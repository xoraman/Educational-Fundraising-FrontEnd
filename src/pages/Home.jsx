import React from 'react';
import './Home.css';  // Import the CSS file

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-heading">Welcome to the Decentralized Scholarship Platform</h1>
        <p className="hero-subheading">Connecting students with global donors for a brighter future</p>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="feature-card">
            <h3 className="feature-title">Global Donations</h3>
            <p className="feature-description">Support education worldwide with ease and transparency through blockchain technology.</p>
          </div>
          <div className="feature-card">
            <h3 className="feature-title">Smart Contracts</h3>
            <p className="feature-description">Automated fund distribution ensures no misuse of donations, based on eligibility criteria.</p>
          </div>
          <div className="feature-card">
            <h3 className="feature-title">Transparency</h3>
            <p className="feature-description">All transactions are recorded on the blockchain for full transparency and traceability.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="call-to-action">
        <h2 className="cta-heading">Get Involved</h2>
        <p className="cta-description">Become a donor or apply for a scholarship today!</p>
        <div className="cta-buttons">
          <a
            href="/donor"
            className="cta-button cta-button-donor hover:bg-blue-700"
          >
            Become a Donor
          </a>
          <a
            href="/apply"
            className="cta-button cta-button-scholarship hover:bg-green-700"
          >
            Apply for Scholarship
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
