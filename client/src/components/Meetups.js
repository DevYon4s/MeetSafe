import React, { useState } from "react";
import "./Meetups.css";

const Meetups = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [selectedMeetup, setSelectedMeetup] = useState(null);

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
        description:
          "Practice Amharic with native speakers and learners in a casual coffee shop setting. All levels welcome!",
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
        description:
          "Bring your kirar, masinko, or just come to listen to traditional Ethiopian music.",
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

  const handleJoinMeetup = (meetupId) => {
    console.log(`Joining meetup ${meetupId}`);
    setSelectedMeetup(null);
  };

  const handleCreateMeetup = () => {
    console.log("Navigate to create meetup form");
  };

  return (
    <div className="meetups-container">
      <main className="meetups-main">
        <div className="meetups-header">
          <h1>Find Your Next Meetup</h1>
          <p>Join verified users for safe, interest-based gatherings</p>
          <button className="create-meetup-btn" onClick={handleCreateMeetup}>
            <svg viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Create New Meetup
          </button>
        </div>

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

        <div className="meetups-list">
          {meetupData[activeTab].map((meetup) => (
            <div key={meetup.id} className="meetup-card">
              <div className="meetup-card-header">
                <h3>{meetup.title}</h3>
                <span className="interest-badge">{meetup.interest}</span>
              </div>
              <div className="meetup-card-details">
                <div className="detail-item">
                  <svg viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>{meetup.location}</span>
                </div>
                <div className="detail-item">
                  <svg viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>
                    {meetup.date}
                    {meetup.time ? ` • ${meetup.time}` : ""}
                  </span>
                </div>
                {activeTab === "upcoming" && (
                  <div className="attendees">
                    <div className="attendees-count">
                      {meetup.attendees}/{meetup.maxAttendees} spots filled
                    </div>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{
                          width: `${
                            (meetup.attendees / meetup.maxAttendees) * 100
                          }%`,
                        }}
                      />
                    </div>
                  </div>
                )}
                {activeTab === "past" && (
                  <div className="rating">
                    <svg viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>{meetup.rating}/5</span>
                  </div>
                )}
              </div>
              <button
                className="view-details-btn"
                onClick={() => setSelectedMeetup(meetup)}
              >
                {activeTab === "upcoming" ? "Join Meetup" : "View Details"}
              </button>
            </div>
          ))}
        </div>
      </main>

      {selectedMeetup && (
        <div className="meetup-modal">
          <div
            className="modal-overlay"
            onClick={() => setSelectedMeetup(null)}
          />
          <div className="modal-content">
            <button
              className="close-modal"
              onClick={() => setSelectedMeetup(null)}
            >
              <svg viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="modal-header">
              <h2>{selectedMeetup.title}</h2>
              <span className="interest-badge">{selectedMeetup.interest}</span>
            </div>
            <div className="modal-details">
              <div className="detail-row">
                <svg viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>
                  <h4>Location</h4>
                  <p>{selectedMeetup.location}</p>
                </div>
              </div>
              <div className="detail-row">
                <svg viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <h4>Date & Time</h4>
                  <p>
                    {selectedMeetup.date} • {selectedMeetup.time}
                  </p>
                </div>
              </div>
              {selectedMeetup.organizer && (
                <div className="detail-row">
                  <svg viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <div>
                    <h4>Organizer</h4>
                    <p>{selectedMeetup.organizer}</p>
                  </div>
                </div>
              )}
              {activeTab === "upcoming" && selectedMeetup.maxAttendees && (
                <div className="detail-row">
                  <svg viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  <div>
                    <h4>Attendees</h4>
                    <div className="attendees-modal">
                      <div className="attendees-count">
                        {selectedMeetup.attendees}/{selectedMeetup.maxAttendees}{" "}
                        spots filled
                      </div>
                      <div className="progress-bar">
                        <div
                          className="progress-fill"
                          style={{
                            width: `${
                              (selectedMeetup.attendees /
                                selectedMeetup.maxAttendees) *
                              100
                            }%`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className="detail-row full-width">
                <svg viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <h4>Description</h4>
                  <p>{selectedMeetup.description}</p>
                </div>
              </div>
              {selectedMeetup.requirements && (
                <div className="detail-row full-width">
                  <svg viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <div>
                    <h4>Requirements</h4>
                    <p>{selectedMeetup.requirements}</p>
                  </div>
                </div>
              )}
            </div>
            <div className="modal-actions">
              {activeTab === "upcoming" ? (
                <>
                  <button
                    className="join-btn"
                    onClick={() => handleJoinMeetup(selectedMeetup.id)}
                  >
                    Join Meetup
                  </button>
                  <button className="message-btn">Message Organizer</button>
                </>
              ) : (
                <button className="rate-btn">Rate Experience</button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Meetups;
