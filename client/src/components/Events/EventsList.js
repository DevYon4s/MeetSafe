import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EventCard from './EventCard';
import CreateEventForm from './CreateEventForm';
import './EventsList.css';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EventCard from './EventCard';
import CreateEventForm from './CreateEventForm';
import './EventsList.css';

const ethiopianNames = [
  "Abebe", "Kebede", "Fatuma", "Chaltu", "Tigist", "Aster", "Bekele", "Genet", "Solomon", "Meaza"
];

const getRandomTime = () => {
  const hour = Math.floor(Math.random() * 24);
  const minute = Math.floor(Math.random() * 60);
  return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
};

const hardcodedEvents = [
  { id: 1, title: 'Book Club Meetup', description: 'Discussing "The Shadow King" by Maaza Mengiste. All are welcome!', location: 'Tomoca Coffee, Addis Ababa', max_participants: 20, cover_photo: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', creator_id: 1, date_time: `Today at ${getRandomTime()}`, host_name: ethiopianNames[0] },
  { id: 2, title: 'Gebeta Tournament', description: 'A friendly tournament of Gebeta. Prizes for the top 3 players!', location: 'Unity Park, Addis Ababa', max_participants: 16, cover_photo: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', creator_id: 2, date_time: `Tomorrow at ${getRandomTime()}`, host_name: ethiopianNames[1] },
  { id: 3, title: 'Ge\'ez Language Workshop', description: 'An introductory workshop to the Ge\'ez script and basic grammar.', location: 'Addis Ababa University, Addis Ababa', max_participants: 30, cover_photo: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', creator_id: 3, date_time: `This Friday at ${getRandomTime()}`, host_name: ethiopianNames[2] },
  { id: 4, title: 'Poetry Slam Night', description: 'Share your original poetry or enjoy the performances of others.', location: 'Fendika Azmari Bet, Addis Ababa', max_participants: 50, cover_photo: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', creator_id: 4, date_time: `Next Saturday at ${getRandomTime()}`, host_name: ethiopianNames[3] },
  { id: 5, title: 'Traditional Music Jam Session', description: 'Bring your instruments and lets jam to some traditional Ethiopian tunes.', location: 'The Ethiopian National Theatre, Addis Ababa', max_participants: 40, cover_photo: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', creator_id: 5, date_time: `This Sunday at ${getRandomTime()}`, host_name: ethiopianNames[4] },
  { id: 6, title: 'Mental Health Awareness Walk', description: 'A walk to raise awareness about mental health and wellness.', location: 'Meskel Square, Addis Ababa', max_participants: 100, cover_photo: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', creator_id: 6, date_time: `Next Monday at ${getRandomTime()}`, host_name: ethiopianNames[5] },
  { id: 7, title: 'Hiking Trip to Entoto Hills', description: 'A scenic hike through the Entoto Hills. Pack a lunch and enjoy the views!', location: 'Entoto Hills, Addis Ababa', max_participants: 25, cover_photo: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', creator_id: 7, date_time: `Next Tuesday at ${getRandomTime()}`, host_name: ethiopianNames[6] },
  { id: 8, title: 'Tech Talk: The Future of AI', description: 'A discussion on the latest trends and advancements in Artificial Intelligence.', location: 'Iceaddis, Addis Ababa', max_participants: 60, cover_photo: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', creator_id: 8, date_time: `Next Wednesday at ${getRandomTime()}`, host_name: ethiopianNames[7] },
  { id: 9, title: 'Plein Air Painting Session', description: 'A casual painting session outdoors. All skill levels are welcome.', location: 'Friendship Park, Addis Ababa', max_participants: 15, cover_photo: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', creator_id: 9, date_time: `Next Thursday at ${getRandomTime()}`, host_name: ethiopianNames[8] },
  { id: 10, title: 'Amharic-English Language Exchange', description: 'Practice your Amharic or English with native speakers.', location: 'The Lime Tree, Addis Ababa', max_participants: 30, cover_photo: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', creator_id: 10, date_time: `Next Friday at ${getRandomTime()}`, host_name: ethiopianNames[9] }
];

const EventsList = () => {
  const [showForm, setShowForm] = useState(false);
  const [events, setEvents] = useState(hardcodedEvents.map(event => ({
    id: event.id,
    name: event.title,
    description: event.description,
    place: event.location,
    maxParticipants: event.max_participants,
    image: event.cover_photo,
    creator_id: event.creator_id,
    date_time: event.date_time,
    host_name: event.host_name
  })));
  const navigate = useNavigate();

  const handleCreateEvent = (newEvent) => {
    setEvents(prev => [...prev, { ...newEvent, id: Date.now() }]);
    setShowForm(false);
  };

  const handleEventClick = (eventId) => {
    navigate(`/events/${eventId}`);
  };

  return (
    <div className="events-list-container">
      <div className="events-header">
        <h1>Upcoming Events</h1>
        <button 
          onClick={() => setShowForm(true)}
          className="create-event-button"
        >
          Create New Event
        </button>
      </div>

      {showForm && (
        <div className="form-overlay">
          <div className="form-container">
            <CreateEventForm 
              onEventCreated={handleCreateEvent} 
              onCancel={() => setShowForm(false)}
            />
          </div>
        </div>
      )}

      <div className="events-grid">
        {events.map(event => (
          <div key={event.id} onClick={() => handleEventClick(event.id)}>
            <EventCard event={event} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsList;
