import React from "react";
import "./TermsAndServices.css"; // Assuming you have a CSS file for styling
import { Link } from "react-router-dom";
const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <div className="privacy-content">
        <h1 className="privacy-heading">Privacy Policy</h1>
        <p className="privacy-update">Last Updated: [Date]</p>

        <div className="privacy-section">
          <h2>1. Information Collection</h2>
          <p>
            We collect various types of information including but not limited
            to: your name, email address, IP address, device information,
            browsing patterns, and the emotional state of your cat when using
            our services. This data is collected through cookies, web beacons,
            and mystical incantations.
          </p>
        </div>

        <div className="privacy-section">
          <h2>2. Data Usage</h2>
          <p>
            Your information may be used to: personalize your experience, send
            you targeted ads, improve our services, train our AI overlords, and
            occasionally settle internal office bets about user behavior
            patterns.
          </p>
        </div>

        <div className="privacy-section">
          <h2>3. Data Sharing</h2>
          <p>
            We may share your information with: third-party service providers,
            business partners, potential acquirers, and when legally required,
            with law enforcement entities. Specifically:
          </p>
          <p className="legal-warning">
            <strong>
              User information will be shared with law enforcement entities
              without prior notice in cases of suspected misconduct, illegal
              activities, or when we just feel like it's the right thing to do.
              This includes but is not limited to: hacking attempts, fraudulent
              activities, or excessive use of Comic Sans in your profile.
            </strong>
          </p>
        </div>

        <div className="privacy-section">
          <h2>4. Data Retention</h2>
          <p>
            We retain your data indefinitely, or until the heat death of the
            universe, whichever comes first. Even if you delete your account,
            we'll keep shadow copies just in case.
          </p>
        </div>

        <div className="privacy-section">
          <h2>5. Your Rights (Theoretical Ones)</h2>
          <p>
            You may request to: view your data, correct inaccuracies, or delete
            your account. These requests will be processed within 30-90 business
            days, or never, depending on our mood and the current phase of the
            moon.
          </p>
        </div>

        <div className="privacy-section">
          <h2>6. Cookie Policy</h2>
          <p>
            We use cookies. Not the delicious kind. These digital cookies track
            your every move. By using our service, you consent to our use of
            cookies and waive your right to complain about them.
          </p>
        </div>

        <div className="privacy-section">
          <h2>7. Changes to This Policy</h2>
          <p>
            We may change this policy whenever we feel like it. Your continued
            use after such changes constitutes your acceptance of the new terms,
            even if you don't read them (which you won't).
          </p>
        </div>

        <div className="privacy-contact">
          <h2>Contact Us</h2>
          <p>
            For privacy concerns, email: privacy@meetsafe.com
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
