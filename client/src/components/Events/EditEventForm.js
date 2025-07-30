import React, { useState } from 'react';
import './EditEventForm.css';

const EditEventForm = ({ event, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    title: event.name,
    description: event.description,
    location: event.place,
    max_participants: event.maxParticipants,
    cover_photo: event.image,
    date_time: event.date_time || new Date().toISOString().slice(0, 16)
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'max_participants' ? parseInt(value) : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData)
  };

  return (
    <div className="edit-form-overlay">
      <div className="edit-form-container">
        <form onSubmit={handleSubmit} className="edit-event-form">
          <h2>Edit Event</h2>
          
          {error && <div className="form-error">{error}</div>}
          
          <div className="form-group">
            <label htmlFor="title">Event Name</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              placeholder="Enter event name"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
              rows="4"
              placeholder="Describe your event"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              required
              placeholder="Enter address"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="max_participants">Max Participants</label>
            <input
              type="number"
              id="max_participants"
              name="max_participants"
              value={formData.max_participants}
              onChange={handleInputChange}
              min="1"
              required
              placeholder="Maximum number of attendees"
            />
          </div>

          <div className="form-group">
            <label htmlFor="cover_photo">Cover Photo URL</label>
            <input
              type="text"
              id="cover_photo"
              name="cover_photo"
              value={formData.cover_photo}
              onChange={handleInputChange}
              placeholder="Enter image URL (e.g., https://example.com/image.jpg)"
            />
          </div>

          <div className="form-group">
            <label htmlFor="date_time">Date and Time</label>
            <input
              type="datetime-local"
              id="date_time"
              name="date_time"
              value={formData.date_time}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-buttons">
            <button 
              type="button" 
              className="cancel-button" 
              onClick={onCancel}
              disabled={isLoading}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="save-button"
              disabled={isLoading}
            >
              {isLoading ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditEventForm;