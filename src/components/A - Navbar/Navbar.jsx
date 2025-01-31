import React, { useState } from 'react';
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return(
    <nav className="navbar">
      <div className="container md-justify-between">
        <div className="logo">Ari</div>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href="">Home</a>
          <a href="#about">About Me</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact_me">Contacts</a>
        </div>

        <button className="connect-button" id="contact">Connect with me</button>

        <div className="hamburger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;