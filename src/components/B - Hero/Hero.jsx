import React from 'react';
import "./Hero.css"
import Profile from '../../assets/Profile.jpg'; 
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <div className="hero" id='hero'>
      <img src={Profile} alt="Profile" className="profile-image" />
      <h1>
        I'm{' '}
        <span className="highlight">Princess Arielle Perez</span>, Website Designer
      </h1>
      <p>
        I specialize in building modern and responsive websites.
      </p>
      <div className="buttons">
        <Link to="/contact" className="contact-button">
          Contact Me
        </Link>
        <Link to="/resume" className="resume-button">
          Resume
        </Link>
      </div>
    </div>
  );
};

export default Hero;
