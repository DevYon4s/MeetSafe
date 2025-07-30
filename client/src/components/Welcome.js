import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut } from 'lucide-react';
import Groups from './Groups';
import './Groups.css';

const Welcome = () => {
  const [name, setName] = useState(null);
  const [picture, setPicture] = useState(null);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);
  const [showSignOut, setShowSignOut] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setName(sessionStorage.getItem('userName'));
    setPicture(sessionStorage.getItem('userPicture'));

    const timer = setTimeout(() => {
      setShowWelcomeMessage(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleSignOut = () => {
    sessionStorage.clear();
    navigate('/');
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
      <nav
        style={{
          backgroundColor: "#ffffff",
          padding: "15px 30px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#333" }}>
          MeetSafe
        </div>
        <div style={{ position: "relative" }}>
          {picture && (
            <img
              src={picture}
              alt="User Profile"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "2px solid #4CAF50",
                cursor: "pointer",
              }}
              onClick={() => setShowSignOut(!showSignOut)}
            />
          )}
          {showSignOut && (
            <button
              onClick={handleSignOut}
              style={{
                position: "absolute",
                top: "50px",
                right: "0",
                backgroundColor: "#fff",
                border: "1px solid #ddd",
                borderRadius: "5px",
                padding: "10px 15px",
                cursor: "pointer",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                zIndex: "1000",
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <LogOut size={18} /> Sign Out
            </button>
          )}
        </div>
      </nav>

      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "calc(100vh - 70px)", // Adjust based on navbar height
          padding: "20px",
        }}
      >
        {showWelcomeMessage && (
          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "15px",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
              padding: "40px",
              textAlign: "center",
              maxWidth: "500px",
              width: "100%",
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
        )}
        {!showWelcomeMessage && <Groups />}
      </main>
    </div>
  );
};

export default Welcome;