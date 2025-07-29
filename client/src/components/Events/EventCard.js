import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EventCard.css';

const EventCard = ({ event }) => {
  const navigate = useNavigate();

  return (
    <div className="event-card" onClick={() => navigate(`/events/${event.id}`)}>
      <div className="event-card-image-container">
        <img 
          src={event.image} 
          alt={event.name} 
          className="event-card-image"
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src = 'https://via.placeholder.com/500x300?text=Event+Image';
          }}
        />
        <div className="event-card-overlay">
          <span>View Details</span>
        </div>
      </div>
      <div className="event-card-content">
        <h3>{event.name}</h3>
        <div className="event-card-meta">
          <p><i className="fas fa-map-marker-alt"></i> {event.place}</p>
          <p><i className="fas fa-users"></i> Max: {event.maxParticipants}</p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;