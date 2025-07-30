import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Groups from './Groups';
import EventsList from './Events/EventsList';
import CreateEventForm from './Events/CreateEventForm';
import './Groups.css';

const Welcome = () => {
  const [name, setName] = useState(null);
  const [picture, setPicture] = useState(null);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);
  const [showCreateEventForm, setShowCreateEventForm] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setName(sessionStorage.getItem('userName'));
    setPicture(sessionStorage.getItem('userPicture'));

    const hasSeenWelcome = sessionStorage.getItem('hasSeenWelcome');

    if (hasSeenWelcome) {
      setShowWelcomeMessage(false);
    } else {
      const timer = setTimeout(() => {
        setShowWelcomeMessage(false);
        sessionStorage.setItem('hasSeenWelcome', 'true');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSignOut = () => {
    sessionStorage.clear();
    navigate('/');
  };

  const handleEventCreated = (newEvent) => {
    // Here you would typically update a shared state or refetch events
    console.log('Event created:', newEvent);
    setShowCreateEventForm(false);
  };

  if (!name) {
    return (
      <div
        style={{
          backgroundColor: "#f0f2f5", // Light gray background
          color: "#333",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p>Loading user info...</p>
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: "#f0f2f5", // Light gray background
        color: "#333",
        minHeight: "100vh",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <main
        style={{
          padding: "20px",
        }}
      >
        {showWelcomeMessage ? (
          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "15px",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
              padding: "40px",
              textAlign: "center",
              maxWidth: "500px",
              width: "100%",
              margin: "auto",
              marginTop: "100px"
            }}
          >
            {picture && (
              <img
                src={picture}
                alt="User Profile"
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "4px solid #4CAF50",
                  marginBottom: "25px",
                }}
              />
            )}
            <h2
              style={{
                color: "#333",
                fontSize: "2.2rem",
                marginBottom: "10px",
              }}
            >
              Welcome, {name}!
            </h2>
            <p style={{ color: "#666", fontSize: "1.1rem" }}>
              We're glad to have you here.
            </p>
          </div>
        ) : (
          <>
            {showCreateEventForm && (
              <div className="form-overlay">
                <div className="form-container">
                  <CreateEventForm 
                    onEventCreated={handleEventCreated} 
                    onCancel={() => setShowCreateEventForm(false)}
                  />
                </div>
              </div>
            )}
            <EventsList />
            <Groups />
          </>
        )}
      </main>
    </div>
  );
};

export default Welcome;