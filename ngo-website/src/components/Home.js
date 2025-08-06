import React from 'react';
import './App.css'; // Assuming CSS is in App.css

export default function Home() {
  return (
    <section className="hero-section" id="home">
      <div className="overlay">
        <h1>Basti Ki Pathshala Foundation</h1>
        <p>
          Join us in our mission to break the barriers of education in underserved communities...
        </p>
        <button className="donate-button">Donate Now</button>
      </div>
    </section>
  );
}
