import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateEventForm.css';

const CreateEventForm = ({ onEventCreated }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    place: '',
    maxParticipants: '',
    image: null,
    imagePreview: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          image: file,
          imagePreview: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      id: Date.now(), // Temporary ID
      ...formData,
      maxParticipants: parseInt(formData.maxParticipants)
    };
    onEventCreated(newEvent);
    navigate('/events');
  };

  return (
    <div className="create-event-container">
      <h2>Create New Event</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Event Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
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
            name="place"
            value={formData.place}
            onChange={handleChange}
            required
            placeholder="Enter address for Google Maps"
          />
        </div>

        <div className="form-group">
          <label>Max Participants</label>
          <input
            type="number"
            name="maxParticipants"
            value={formData.maxParticipants}
            onChange={handleChange}
            min="1"
            required
            placeholder="Maximum number of attendees"
          />
        </div>

        <div className="form-group">
          <label>Event Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
          {formData.imagePreview && (
            <img 
              src={formData.imagePreview} 
              alt="Preview" 
              className="image-preview"
            />
          )}
        </div>

        <div className="form-actions">
          <button 
            type="button" 
            onClick={() => navigate('/events')}
            className="cancel-button"
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