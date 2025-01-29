import React from 'react';
import Navbar from '../../components/A - Navbar/Navbar.jsx'
import Contact from '../../components/F - Contact/Contact.jsx'
import Footer from '../../components/G - Footer/Footer.jsx'
import "./ContactMe.css"

const ContactMe = () => {
  return (
    <div className="contact-me">
      <Navbar/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default ContactMe;
