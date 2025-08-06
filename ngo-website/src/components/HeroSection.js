import React from 'react';
import { Button } from 'react-bootstrap';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-overlay">
        <h1>Basti Ki Pathshala Foundation</h1>
        <p>
          Join us in our mission to break the barriers of education in underserved communities...
        </p>
        <Button className="donate-button" href="#donate">
          Donate Now
        </Button>
      </div>
    </section>
  );
}
