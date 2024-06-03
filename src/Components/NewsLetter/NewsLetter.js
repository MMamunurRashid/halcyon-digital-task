import React, { useState } from 'react';
import './NewsLetter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Email submitted:', email);
  };

  return (
    <div className="newsletter">
      <div className="newsletter-header">
        <h2>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
      </div>
      <div className="newsletter-form">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe to Newsletter</button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
