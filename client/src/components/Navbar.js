import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogOut } from 'lucide-react';
import "./Navbar.css";

function Navbar() {
  const [name, setName] = useState(null);
  const [picture, setPicture] = useState(null);
  const [showSignOut, setShowSignOut] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setName(sessionStorage.getItem('userName'));
    setPicture(sessionStorage.getItem('userPicture'));
  }, []);

  const handleSignOut = () => {
    sessionStorage.clear();
    navigate('/');
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-content">
            <div className="nav-brand">
              <Link to="/" className="logo-link">
                <span className="logo">MeetSafe</span>
              </Link>
            </div>
            <div className="nav-links">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="#features-section" className="nav-link">
                Features
              </Link>

              {name ? (
                <div style={{ position: "relative" }}>
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
              ) : (
                <button className="signin-btn">
                  <Link to="/signIn" className="logo-link">
                    Sign In
                  </Link>
                </button>
              )}
            </div>
            {/* Mobile menu button */}
            <div className="mobile-menu-btn">
              <button className="menu-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;