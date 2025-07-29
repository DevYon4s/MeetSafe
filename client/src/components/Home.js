import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Secure Meetings <span>Simplified</span>
          </h1>
          <p className="hero-description">
            MeetSafe provides end-to-end encrypted video conferencing with
            identity verification for your most sensitive conversations.
          </p>
          <div className="hero-buttons">
            <button className="primary-btn">
              <Link to="/meetups" className="primary-link">
                Start Free Meeting
              </Link>
            </button>
            <button className="secondary-btn">Learn More</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="features-container">
          <h2 className="section-title">Key Features</h2>
          <div className="features-grid">
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24">
                    <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
                title: "End-to-End Encryption",
                description:
                  "All your meetings are secured with military-grade encryption.",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Identity Verification",
                description:
                  "Participants are verified before joining sensitive meetings.",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24">
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                ),
                title: "Privacy Controls",
                description:
                  "Granular permissions for who can join, share, or record.",
              },
            ].map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-col">
              <h3 className="footer-title">MeetSafe</h3>
              <p className="footer-text">
                Secure meetings for sensitive conversations.
              </p>
            </div>
            <div className="footer-col">
              <h4 className="footer-heading">Product</h4>
              <ul className="footer-links">
                <li>
                  <a href="#" className="footer-link">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    API
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4 className="footer-heading">Company</h4>
              <ul className="footer-links">
                <li>
                  <a href="#" className="footer-link">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4 className="footer-heading">Legal</h4>
              <ul className="footer-links">
                <li>
                  <a href="#" className="footer-link">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            &copy; {new Date().getFullYear()} MeetSafe. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
