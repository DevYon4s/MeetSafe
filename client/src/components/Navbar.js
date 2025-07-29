import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
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

              <button className="signin-btn">
                <Link to="/signIn" className="logo-link">
                  Sign In
                </Link>
              </button>
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
