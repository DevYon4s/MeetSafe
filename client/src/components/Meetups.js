import React, { useState } from "react";
import { Plus } from "lucide-react";
import "./Meetups.css";

const Meetups = () => {
  // State management
  const [activeTab, setActiveTab] = useState("upcoming");
  const [selectedMeetup, setSelectedMeetup] = useState(null);
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [review, setReview] = useState("");

  // Meetup data
  const meetupData = {
    upcoming: [
      {
        id: 1,
        title: "Amharic Language Exchange",
        location: "Tomoca Coffee, Addis Ababa",
        date: "June 15, 2023",
        time: "4:00 PM",
        attendees: 5,
        maxAttendees: 8,
        interest: "Language Learning",
        organizer: "Selam T.",
        description: "Practice Amharic with native speakers and learners in a casual coffee shop setting. All levels welcome!",
        requirements: "Verified users only, 18-35 age range",
      },
      {
        id: 2,
        title: "Traditional Instrument Jam Session",
        location: "Ghion Hotel Gardens",
        date: "June 18, 2023",
        time: "2:00 PM",
        attendees: 3,
        maxAttendees: 10,
        interest: "Music",
        organizer: "Yonas B.",
        description: "Bring your kirar, masinko, or just come to listen to traditional Ethiopian music.",
        requirements: "Verified users only",
      },
    ],
    past: [
      {
        id: 3,
        title: "Coffee Ceremony & Conversation",
        location: "Kaldi's Coffee, Bole",
        date: "June 5, 2023",
        interest: "Cultural Exchange",
        rating: "4.8",
        attendees: 6,
      },
    ],
  };

  // Handlers
  const handleJoinMeetup = (meetupId) => {
    console.log(`Joining meetup ${meetupId}`);
    setSelectedMeetup(null);
  };

  const handleCreateMeetup = () => {
    console.log("Navigate to create meetup form");
  };

  const handleSubmitRating = () => {
    console.log("Submitted rating:", rating);
    console.log("Review:", review);
    // API call would go here
    setShowRatingModal(false);
    setRating(0);
    setReview("");
    setSelectedMeetup(null);
  };

  const renderStars = () => {
    return Array(5).fill(0).map((_, i) => {
      const ratingValue = i + 1;
      return (
        <button
          key={i}
          className={`star-btn ${ratingValue <= (hoverRating || rating) ? "filled" : ""}`}
          onClick={() => setRating(ratingValue)}
          onMouseEnter={() => setHoverRating(ratingValue)}
          onMouseLeave={() => setHoverRating(0)}
        >
          <svg viewBox="0 0 24 24">
            <path
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            />
          </svg>
        </button>
      );
    });
  };

  return (
    <div className="meetups-container">
      <main className="meetups-main">
        {/* Header Section */}
        <div className="meetups-header">
          <h1>Find Your Next Meetup</h1>
          <p>Join verified users for safe, interest-based gatherings</p>
          <button className="primary-btn" onClick={handleCreateMeetup}>
            <Plus size={20} />
            Create New Meetup
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="meetups-tabs">
          <button
            className={`tab-btn ${activeTab === "upcoming" ? "active" : ""}`}
            onClick={() => setActiveTab("upcoming")}
          >
            Upcoming Meetups
          </button>
          <button
            className={`tab-btn ${activeTab === "past" ? "active" : ""}`}
            onClick={() => setActiveTab("past")}
          >
            Past Meetups
          </button>
        </div>

        {/* Meetups List */}
        <div className="meetups-list">
          {meetupData[activeTab].map((meetup) => (
            <div key={meetup.id} className="meetup-card">
              <div className="card-header">
                <h3>{meetup.title}</h3>
                <span className="interest-badge">{meetup.interest}</span>
              </div>
              <div className="card-details">
                <div className="detail-item">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <span>{meetup.location}</span>
                </div>
                <div className="detail-item">
                  <svg viewBox="0 0 24 24">
                    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM9 10H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm-8 4H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z" />
                  </svg>
                  <span>{meetup.date} • {meetup.time}</span>
                </div>
                {activeTab === "upcoming" ? (
                  <div className="attendees">
                    <div className="progress-container">
                      <div 
                        className="progress-bar" 
                        style={{ width: `${(meetup.attendees / meetup.maxAttendees) * 100}%` }}
                      />
                    </div>
                    <span>{meetup.attendees}/{meetup.maxAttendees} spots filled</span>
                  </div>
                ) : (
                  <div className="rating-display">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <span>{meetup.rating}/5</span>
                  </div>
                )}
              </div>
              <button 
                className="secondary-btn" 
                onClick={() => setSelectedMeetup(meetup)}
              >
                {activeTab === "upcoming" ? "Join Meetup" : "View Details"}
              </button>
            </div>
          ))}
        </div>

        {/* Meetup Detail Modal */}
        {selectedMeetup && (
          <div className="modal">
            <div className="modal-overlay" onClick={() => setSelectedMeetup(null)} />
            <div className="modal-content">
              <button className="close-btn" onClick={() => setSelectedMeetup(null)}>
                <svg viewBox="0 0 24 24">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
              </button>
              
              <div className="modal-header">
                <h2>{selectedMeetup.title}</h2>
                <span className="interest-badge">{selectedMeetup.interest}</span>
              </div>
              
              <div className="modal-body">
                <div className="detail-section">
                  <h4>About This Meetup</h4>
                  <p>{selectedMeetup.description}</p>
                </div>
                
                <div className="details-grid">
                  <div className="detail-item">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    <div>
                      <h5>Location</h5>
                      <p>{selectedMeetup.location}</p>
                    </div>
                  </div>
                  
                  <div className="detail-item">
                    <svg viewBox="0 0 24 24">
                      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM9 10H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm-8 4H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z" />
                    </svg>
                    <div>
                      <h5>Date & Time</h5>
                      <p>{selectedMeetup.date} • {selectedMeetup.time}</p>
                    </div>
                  </div>
                  
                  {selectedMeetup.organizer && (
                    <div className="detail-item">
                      <svg viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                      <div>
                        <h5>Organizer</h5>
                        <p>{selectedMeetup.organizer}</p>
                      </div>
                    </div>
                  )}
                  
                  {activeTab === "upcoming" && selectedMeetup.maxAttendees && (
                    <div className="detail-item">
                      <svg viewBox="0 0 24 24">
                        <path d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zM8 11c1.66 0 3-1.34 3-3S9.66 5 8 5s-3 1.34-3 3 1.34 3 3 3zM8 13c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zM16 13c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                      </svg>
                      <div>
                        <h5>Attendees</h5>
                        <p>{selectedMeetup.attendees}/{selectedMeetup.maxAttendees} spots filled</p>
                      </div>
                    </div>
                  )}
                </div>
                
                {selectedMeetup.requirements && (
                  <div className="detail-section">
                    <h4>Requirements</h4>
                    <p>{selectedMeetup.requirements}</p>
                  </div>
                )}
              </div>
              
              <div className="modal-footer">
                {activeTab === "upcoming" ? (
                  <>
                    <button className="primary-btn" onClick={() => handleJoinMeetup(selectedMeetup.id)}>
                      Join Meetup
                    </button>
                    <button className="secondary-btn">
                      Message Organizer
                    </button>
                  </>
                ) : (
                  <button className="primary-btn" onClick={() => setShowRatingModal(true)}>
                    Rate Experience
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Rating Modal */}
        {showRatingModal && (
          <div className="modal">
            <div className="modal-overlay" onClick={() => setShowRatingModal(false)} />
            <div className="modal-content rating-modal">
              <button className="close-btn" onClick={() => setShowRatingModal(false)}>
                <svg viewBox="0 0 24 24">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
              </button>
              
              <div className="modal-header">
                <h2>Rate Your Experience</h2>
                <p>How would you rate the "{selectedMeetup?.title}" meetup?</p>
              </div>
              
              <div className="modal-body">
                <div className="star-rating">
                  {renderStars()}
                  <div className="rating-text">
                    {rating === 0 ? "Select your rating" : `You rated: ${rating} star${rating > 1 ? "s" : ""}`}
                  </div>
                </div>
                
                <div className="review-section">
                  <label htmlFor="review">Share your thoughts (optional)</label>
                  <textarea
                    id="review"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    placeholder="What did you like about this meetup? Any suggestions for improvement?"
                    rows="4"
                  />
                </div>
              </div>
              
              <div className="modal-footer">
                <button 
                  className="primary-btn" 
                  onClick={handleSubmitRating}
                  disabled={rating === 0}
                >
                  Submit Review
                </button>
                <button 
                  className="secondary-btn" 
                  onClick={() => setShowRatingModal(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Meetups;