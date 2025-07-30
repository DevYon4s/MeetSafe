import React, { useEffect } from "react";
import "./Home.css";
import { Link, useLocation } from "react-router-dom";
import Features from "./Features"; // Import the Features component

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            MeetSafe: Secure, Verified, Real-World Connections
          </h1>
          <p className="hero-description">
            Tired of superficial online interactions? MeetSafe connects you with
            verified individuals for safe, in-person hangouts based on shared
            interests.
          </p>

          <p className="powered-by">Powered by VeriFayda</p>
          <img
            src="/national-id-logo.png"
            alt="VeriFayda Logo"
            className="verifayda-logo"
          />
          <div className="hero-buttons">
            <button className="primary-btn">
              <Link to="/signIn" className="primary-link">
                Start Your Journey
              </Link>
            </button>
          </div>
        </div>
      </section>

      {/* Features Section - Integrated from Features.js */}
      <section
        id="features-section"
        className="home-features-integration features-spacing"
      >
        <Features />
      </section>
    </div>
  );
};

export default Home;
