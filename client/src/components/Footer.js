import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-brand">
              <h3 className="footer-title">MeetSafe</h3>
              <div className="fayda-badge">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="Fayda National ID Verified"
                  className="fayda-logo"
                />
                <span>National ID Integrated</span>
              </div>
            </div>
            <p className="footer-text">
              Secure meetings for sensitive conversations.
            </p>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Product</h4>
            <ul className="footer-links">
              <li>
                <Link to="/features" className="footer-link">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="footer-link">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/api" className="footer-link">
                  API
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li>
                <Link to="/about" className="footer-link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/blog" className="footer-link">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/careers" className="footer-link">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Legal</h4>
            <ul className="footer-links">
              <li>
                <Link to="/privacy" className="footer-link">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="footer-link">
                  Terms
                </Link>
              </li>
              <li>
                <Link to="/security" className="footer-link">
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            &copy; {new Date().getFullYear()} MeetSafe. All rights reserved.
          </div>
          <div className="government-badge">
            <img
              src="data:image/jpeg;base64,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"
              alt="Government Certified"
              className="government-logo"
            />
            <span>Official National ID Partner</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
