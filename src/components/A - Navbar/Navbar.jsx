import React, { useState } from 'react';
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
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

        <input 
          type="checkbox" 
          id="checkbox" 
          checked={isOpen} 
          onChange={toggleMenu} 
        />
        <label className={`toggle ${isOpen ? 'active' : ''}`} htmlFor="checkbox">
          <div className="bars" id="bar1"></div>
          <div className="bars" id="bar2"></div>
          <div className="bars" id="bar3"></div>
        </label>
      </div>
    </nav>
  );
}

export default Navbar;
