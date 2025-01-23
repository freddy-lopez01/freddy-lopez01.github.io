import React from 'react';
import './Hero.css'; // Import the CSS file for styling
import Button from './Button.jsx';

const Hero = () => {
  return (
    <div className="hero">
      <video className="hero-video" autoPlay muted loop>
        <source src="short_comp.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-body">
        <div className="hero-text">
          <h1>Hello, I&#39;m Freddy</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;

