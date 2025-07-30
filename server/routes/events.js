import express from 'express';
import pool from '../db.js';

const router = express.Router();

// Get all events
router.get('/', async (req, res) => {
  try {
    const allEvents = await pool.query(`
      SELECT 
        e.*, 
        u.full_name as creator_name,
        i.name as interest_name,
        (SELECT COUNT(*) FROM event_participants WHERE event_id = e.id) as participant_count
      FROM events e
      LEFT JOIN users u ON e.creator_id = u.id
      LEFT JOIN interests i ON e.interest_id = i.id
      ORDER BY e.date_time ASC
    `);
    res.json(allEvents.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Get a specific event by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    const event = await pool.query(`
      SELECT 
        e.*, 
        u.full_name as creator_name,
        i.name as interest_name,
        (SELECT COUNT(*) FROM event_participants WHERE event_id = e.id) as participant_count
      FROM events e
      LEFT JOIN users u ON e.creator_id = u.id
      LEFT JOIN interests i ON e.interest_id = i.id
      WHERE e.id = $1
    `, [id]);

    if (event.rows.length === 0) {
      return res.status(404).json({ error: 'Event not found' });
    }

    const participants = await pool.query(`
      SELECT u.id, u.full_name, u.picture
      FROM event_participants ep
      JOIN users u ON ep.user_id = u.id
      WHERE ep.event_id = $1
    `, [id]);

    res.json({
      ...event.rows[0],
      participants: participants.rows
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Create a new event
router.post('/', async (req, res) => {
  try {
    const { title, description, location, date_time, creator_id, interest_id, max_participants } = req.body;
    
    if (!title || !location || !date_time || !creator_id) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const newEvent = await pool.query(
      'INSERT INTO events (title, description, location, date_time, creator_id, interest_id, max_participants) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [title, description, location, date_time, creator_id, interest_id, max_participants]
    );

    await pool.query(
      'INSERT INTO event_participants (event_id, user_id) VALUES ($1, $2)',
      [newEvent.rows[0].id, creator_id]
    );

    res.status(201).json(newEvent.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Join an event
router.post('/:eventId/join', async (req, res) => {
  try {
    const { eventId } = req.params;
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({ error: 'User ID is required' });
    }

    const event = await pool.query('SELECT * FROM events WHERE id = $1', [eventId]);
    if (event.rows.length === 0) {
      return res.status(404).json({ error: 'Event not found' });
    }

    const existingParticipant = await pool.query(
      'SELECT * FROM event_participants WHERE event_id = $1 AND user_id = $2',
      [eventId, userId]
    );

    if (existingParticipant.rows.length > 0) {
      return res.status(400).json({ error: 'User already joined this event' });
    }

    if (event.rows[0].max_participants) {
      const participantCount = await pool.query(
        'SELECT COUNT(*) FROM event_participants WHERE event_id = $1',
        [eventId]
      );
      
      if (participantCount.rows[0].count >= event.rows[0].max_participants) {
        return res.status(400).json({ error: 'Event has reached maximum participants' });
      }
    }

    const joinEvent = await pool.query(
      'INSERT INTO event_participants (event_id, user_id) VALUES ($1, $2) RETURNING *',
      [eventId, userId]
    );

    res.status(201).json(joinEvent.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Leave an event
router.delete('/:eventId/leave', async (req, res) => {
  try {
    const { eventId } = req.params;
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({ error: 'User ID is required' });
    }

    const event = await pool.query('SELECT * FROM events WHERE id = $1 AND creator_id = $2', [eventId, userId]);
    if (event.rows.length > 0) {
      return res.status(400).json({ error: 'Event creator cannot leave the event' });
    }

    const existingParticipant = await pool.query(
      'SELECT * FROM event_participants WHERE event_id = $1 AND user_id = $2',
      [eventId, userId]
    );

    if (existingParticipant.rows.length === 0) {
      return res.status(400).json({ error: 'User is not a participant of this event' });
    }

    await pool.query(
      'DELETE FROM event_participants WHERE event_id = $1 AND user_id = $2',
      [eventId, userId]
    );

    res.status(200).json({ message: 'Successfully left the event' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

export default router;