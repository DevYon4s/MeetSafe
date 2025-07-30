import React from 'react';
import './EditEventForm.css';

const EditEventForm = ({ event, onSave, onCancel }) => {
  const [formData, setFormData] = React.useState({
    name: event.name,
    description: event.description,
    place: event.place,
    maxParticipants: event.maxParticipants
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'maxParticipants' ? parseInt(value) : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="edit-form-overlay">
      <div className="edit-form-container">
        <form onSubmit={handleSubmit} className="edit-event-form">
          <h2>Edit Event</h2>
          
          <div className="form-group">
            <label htmlFor="name">Event Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
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
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="place">Location</label>
            <input
              type="text"
              id="place"
              name="place"
              value={formData.place}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="maxParticipants">Max Participants</label>
            <input
              type="number"
              id="maxParticipants"
              name="maxParticipants"
              value={formData.maxParticipants}
              onChange={handleInputChange}
              min="1"
              required
            />
          </div>
          
          <div className="form-buttons">
            <button type="button" className="cancel-button" onClick={onCancel}>
              Cancel
            </button>
            <button type="submit" className="save-button">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditEventForm;