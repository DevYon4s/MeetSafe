import React, { useState } from 'react';
import EventCard from './EventCard';
import CreateEventForm from './CreateEventForm';
import './EventsList.css';

const EventsList = () => {
  const [showForm, setShowForm] = useState(false);
  const [events, setEvents] = useState([
    {
      id: 1,
      name: 'Beach Volleyball',
      description: 'Fun volleyball game at the beach, all skill levels welcome!',
      place: 'Santa Monica Beach, CA',
      maxParticipants: 12,
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 2,
      name: 'Tech Meetup',
      description: 'Monthly tech discussion about the latest in web development',
      place: 'Downtown Co-working Space',
      maxParticipants: 30,
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
     {
      id: 3,
      name: 'Beach Volleyball',
      description: 'Fun volleyball game at the beach, all skill levels welcome!',
      place: 'Santa Monica Beach, CA',
      maxParticipants: 12,
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 4,
      name: 'Tech Meetup',
      description: 'Monthly tech discussion about the latest in web development',
      place: 'Downtown Co-working Space',
      maxParticipants: 30,
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
     {
      id: 5,
      name: 'Beach Volleyball',
      description: 'Fun volleyball game at the beach, all skill levels welcome!',
      place: 'Santa Monica Beach, CA',
      maxParticipants: 12,
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 6,
      name: 'Tech Meetup',
      description: 'Monthly tech discussion about the latest in web development',
      place: 'Downtown Co-working Space',
      maxParticipants: 30,
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }
  ]);

  const handleCreateEvent = (newEvent) => {
    setEvents(prev => [...prev, { ...newEvent, id: Date.now() }]);
    setShowForm(false);
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
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventsList;