import React, { useState } from 'react';
import axios from 'axios';
import './CreateEventForm.css';

const CreateEventForm = ({ onEventCreated, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    max_participants: '',
    cover_photo: '',
    date_time: '',
    // Assuming a default creator_id for now, replace with actual user ID from auth context
    creator_id: 1, 
    // Assuming a default interest_id for now, or remove if nullable
    interest_id: 1 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/events', {
        title: formData.title,
        description: formData.description,
        location: formData.location,
        max_participants: parseInt(formData.max_participants),
        cover_photo: formData.cover_photo || 'https://via.placeholder.com/500x300?text=Event+Image', // Placeholder if no image URL provided
        date_time: formData.date_time || new Date().toISOString(), // Placeholder if no date_time provided
        creator_id: formData.creator_id,
        interest_id: formData.interest_id
      });
      onEventCreated(response.data);
      alert('Event created successfully!');
    } catch (error) {
      console.error('Error creating event:', error.response ? error.response.data : error.message);
      alert('Failed to create event.');
    }
  };

  return (
    <div className="create-event-form">
      <h2>Create New Event</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Event Name</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="Enter event name"
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            placeholder="Describe your event"
          />
        </div>

        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            placeholder="Enter address for Google Maps"
          />
        </div>

        <div className="form-group">
          <label>Max Participants</label>
          <input
            type="number"
            name="max_participants"
            value={formData.max_participants}
            onChange={handleChange}
            min="1"
            required
            placeholder="Maximum number of attendees"
          />
        </div>

        <div className="form-group">
          <label>Cover Photo URL</label>
          <input
            type="text"
            name="cover_photo"
            value={formData.cover_photo}
            onChange={handleChange}
            placeholder="Enter image URL (e.g., https://example.com/image.jpg)"
          />
        </div>

        <div className="form-group">
          <label>Date and Time</label>
          <input
            type="datetime-local"
            name="date_time"
            value={formData.date_time}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-actions">
          <button 
            type="button" 
            onClick={onCancel}
            className="cancel-create-button"
          >
            Cancel
          </button>
          <button type="submit" className="submit-button">
            Create Event
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateEventForm;