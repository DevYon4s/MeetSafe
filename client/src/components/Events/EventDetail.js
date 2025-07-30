import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import EditEventForm from './EditEventForm';
import './EventDetail.css';

const EventDetail = () => {
  const navigate = useNavigate();
  const { eventId } = useParams();
  const [showDropdown, setShowDropdown] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Mock current user - in a real app, this would come from authentication context
  const currentUser = {
    id: 1 // This should come from your auth system
  };

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`localhost:5000/api/events/${eventId}`);
        setEvent({
          ...response.data,
          name: response.data.title, // Mapping backend fields to frontend naming
          place: response.data.location,
          maxParticipants: response.data.max_participants,
          image: response.data.cover_photo,
          creator: {
            id: response.data.creator_id,
            name: response.data.creator_name,
            photo: '' // You might need to fetch this separately
          },
          participants: response.data.participants.map(p => ({
            id: p.id,
            name: p.full_name,
            photo: p.picture
          }))
        });
      } catch (err) {
        setError(err.response?.data?.error || 'Failed to fetch event');
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [eventId]);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleEdit = () => {
    setIsEditing(true);
    setShowDropdown(false);
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      try {
        await axios.delete(`/api/events/${eventId}`, {
          data: { creator_id: currentUser.id }
        });
        navigate('/events');
      } catch (err) {
        alert(err.response?.data?.error || 'Failed to delete event');
      }
    }
    setShowDropdown(false);
  };

  const handleSave = async (updatedData) => {
    try {
      const response = await axios.put(`/api/events/${eventId}`, {
        creator_id: currentUser.id,
        title: updatedData.name,
        location: updatedData.place,
        max_participants: updatedData.maxParticipants,
        description: updatedData.description,
        cover_photo: updatedData.image
      });
      
      setEvent(prev => ({
        ...prev,
        ...updatedData
      }));
      setIsEditing(false);
    } catch (err) {
      alert(err.response?.data?.error || 'Failed to update event');
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!event) return <div className="error">Event not found</div>;

  const isCreator = event.creator.id === currentUser.id;

  return (
    <div className="event-detail-container">
      <button onClick={() => navigate('/events')} className="back-button">
        ← Back to Events
      </button>
      
      <div className="event-detail-card">
        <div className="event-header">
          <img src={event.image} alt={event.name} className="event-detail-image" />
          {isCreator && !isEditing && (
            <div className="event-actions">
              <button className="event-menu-button" onClick={toggleDropdown}>
                <span>⋮</span>
              </button>
              {showDropdown && (
                <div className="event-menu-dropdown">
                  <button className="edit-button" onClick={handleEdit}>Edit Event</button>
                  <button className="delete-button" onClick={handleDelete}>Delete Event</button>
                </div>
              )}
            </div>
          )}
        </div>
        
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
            <p><strong>Current Participants:</strong> {event.participants.length}</p>
          </div>
          
          <div className="event-description">
            <h3>Description</h3>
            <p>{event.description}</p>
          </div>
          
          <div className="participants-section">
            <h3>Participants</h3>
            <div className="participants-grid">
              {event.participants.map(participant => (
                <div key={participant.id} className="participant-card">
                  <img 
                    src={participant.photo} 
                    alt={participant.name} 
                    className="participant-photo"
                  />
                  <p className="participant-name">{participant.name}</p>
                  {participant.id === event.creator.id && (
                    <span className="creator-badge">Creator</span>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <button className="join-button">Join Event</button>
        </div>
      </div>

      {isEditing && (
        <EditEventForm 
          event={event} 
          onSave={handleSave} 
          onCancel={handleCancelEdit} 
        />
      )}
    </div>
  );
};

export default EventDetail;