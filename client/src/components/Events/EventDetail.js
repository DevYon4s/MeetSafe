import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './EventDetail.css';

const EventDetail = () => {
  const navigate = useNavigate();
  const { eventId } = useParams();
  
  // In a real app, you would fetch this data based on eventId
  const event = {
    id: 1,
    name: 'Beach Volleyball',
    description: 'Fun volleyball game at the beach, all skill levels welcome!',
    place: 'Santa Monica Beach, CA',
    maxParticipants: 12,
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  };

  return (
    <div className="event-detail-container">
      <button onClick={() => navigate('/events')} className="back-button">
        ← Back to Events
      </button>
      
      <div className="event-detail-card">
        <img src={event.image} alt={event.name} className="event-detail-image" />
        
        <div className="event-detail-content">
          <h2>{event.name}</h2>
          
          <div className="map-container">
            <iframe
              title="event-location"
              width="100%"
              height="300"
              frameBorder="0"
              style={{ border: 0 }}
              src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodeURIComponent(event.place)}`}
              allowFullScreen>
            </iframe>
          </div>
          
          <div className="event-meta">
            <p><strong>Location:</strong> {event.place}</p>
            <p><strong>Max Participants:</strong> {event.maxParticipants}</p>
          </div>
          
          <div className="event-description">
            <h3>Description</h3>
            <p>{event.description}</p>
          </div>
          
          <button className="join-button">Join Event</button>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;