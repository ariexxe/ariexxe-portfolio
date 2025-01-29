import React from 'react'
import "./Navbar.css"

const Navbar = () => {

    return(
        <nav className="navbar">
  <div className="container md-justify-between">
    <div className="logo">Ari</div>
    <div className="nav-links">
      <a href="" className="">Home</a>
      <a href="#about" className="">About Me</a>
      <a href="#services" className="">Services</a>
      <a href="#projects" className="">Projects</a>
      <a href="#contact_me" className="">Contacts</a>
    </div>
    <button className="connect-button" id="contact">Connect with me</button>
  </div>
</nav>

    )
}

export default Navbar