import "./Feature.css";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <div className="features-container">
      {/* Hero Section */}
      <section className="features-hero">
        <div className="hero-content">
          <h1 className="hero-title">
            How MeetSafe <span>Works</span>
          </h1>
          <p className="hero-description">
            Our platform combines identity verification with social matching to
            create safe, meaningful connections.
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section className="core-features">
        <div className="section-container">
          <h2 className="section-title">Our Safety Features</h2>
          <div className="features-grid">
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Fayda ID Verification",
                description:
                  "Every user verifies their identity through Ethiopia's national ID system, ensuring authenticity and accountability.",
                benefits: [
                  "No fake profiles or catfishing",
                  "Age-appropriate matching",
                  "Legal accountability",
                ],
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24">
                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: "Interest-Based Matching",
                description:
                  "Connect with people who share your passions and hobbies.",
                benefits: [
                  "Find language partners",
                  "Discover cultural events",
                  "Meet fellow hobbyists",
                ],
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24">
                    <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
                title: "Public Meetup System",
                description:
                  "Organize or join gatherings in safe, public spaces.",
                benefits: ["Coffee shops", "Parks", "Community centers"],
              },
            ].map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <ul className="feature-benefits">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="benefit-item">
                      <svg className="check-icon" viewBox="0 0 20 20">
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <div className="section-container">
          <h2 className="section-title">Three Simple Steps</h2>
          <div className="steps-container">
            {[
              {
                number: "1",
                title: "Verify Your Identity",
                description:
                  "Connect your Fayda ID to verify your age and identity securely.",
              },
              {
                number: "2",
                title: "Set Your Interests",
                description:
                  "Select your hobbies and what you're looking for in new connections.",
              },
              {
                number: "3",
                title: "Join or Create Meetups",
                description:
                  "Browse events or organize your own gathering in safe public spaces.",
              },
            ].map((step, index) => (
              <div key={index} className="step-card">
                <div className="step-number">{step.number}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mental Health Benefits */}
      <section className="benefits-section">
        <div className="section-container">
          <h2 className="section-title">Why Real Connections Matter</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3 className="benefit-title">Reduced Loneliness</h3>
              <p>
                Face-to-face interaction decreases feelings of isolation and
                depression.
              </p>
            </div>
            <div className="benefit-card">
              <h3 className="benefit-title">Increased Safety</h3>
              <p>
                Verified identities mean you know exactly who you're meeting.
              </p>
            </div>
            <div className="benefit-card">
              <h3 className="benefit-title">Cultural Exchange</h3>
              <p>
                Connect with others passionate about Ethiopian heritage and
                languages.
              </p>
            </div>
            <div className="benefit-card">
              <h3 className="benefit-title">Accountability</h3>
              <p>
                Verified profiles create a community where everyone behaves
                responsibly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Meet Safely?</h2>
          <p className="cta-text">
            Join our growing community of verified users making real
            connections.
          </p>
          <div className="cta-buttons">
            <button className="primary-btn">
              <Link to="/signIn" className="primary-link">
                {" "}
                Get Started
              </Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
