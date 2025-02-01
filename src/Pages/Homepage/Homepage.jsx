import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { FaArrowUp, FaGoogle } from "react-icons/fa";
import "./Homepage.css";
import Navbar from '../../components/A - Navbar/Navbar.jsx'
import Profile from "../../assets/Profile.jpg";
import AboutImage from "../../assets/Aboutme.jpg";
import ProjectOne from "../../assets/Streetstyleapp.png";
import ProjectTwo from "../../assets/Socialmediawebsite.png";
import ProjectThree from "../../assets/Coresite.png";
import ProjectFour from "../../assets/Milkinside.png";
import { FaEnvelope, FaPhone, FaMapMarkedAlt, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTiktok, FaTwitter } from "react-icons/fa";

const Homepage = () => {
  const [showButton, setShowButton] = useState(false);
  const [isOpen, setIsOpen] = useState(false);  // Added for hamburger menu state

  useEffect(() => {
    const handleScroll = () => {
      const serviceSection = document.getElementById("service-page"); // Target the service section
      if (serviceSection) {
        const sectionPosition = serviceSection.getBoundingClientRect().top;
        setShowButton(window.scrollY > sectionPosition + 300); // Adjust visibility threshold
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar/>

      {/* Hero Section */}
      <motion.div 
        className="hero" 
        id="hero"
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0 }}
      >
        <motion.img 
          src={Profile} 
          alt="Profile" 
          className="profile-image"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          I'm <span className="highlight">Princess Arielle Perez</span>, Website Designer
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          I specialize in building modern and responsive websites.
        </motion.p>
        <motion.div 
          className="buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <a href="#contacts" className="contact-button">Contact Me</a>
          <a href="#resume" className="resume-button">Resume</a>
          {showButton && (
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="back-to-top-button"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.1 }}
            >
              <FaArrowUp size={20} />
            </motion.button>
          )}
        </motion.div>
      </motion.div>

      {/* About Me Section */}
      <motion.div 
        className="about-section" 
        id="about-me"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="about-container">
          <h2 className="about-title">About Me</h2>
          <div className="about-content about-content-md">
            <motion.img 
              src={AboutImage} 
              alt="About Me" 
              className="about-image"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.10 }}
            />
            <motion.div 
              className="about-details"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="about-description">
                I am a passionate website designer and web developer with a focus
                on building modern and responsive web designs and applications.
                With a strong foundation in both frontend and backend
                technologies, I strive to create seamless and efficient user
                experiences.
              </p>
              <div>
                {["HTML AND CSS", "Figma", "Node.js"].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  >
                    <label className="skill-label">{skill}</label>
                    <div className="skill-bar-container">
                      <div 
                        className="skill-bar" 
                        style={{ width: index === 2 ? "75%" : "83.33%" }}
                      ></div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.div 
                className="stats-container"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {[ 
                  { value: "3+", label: "Years of Experience" },
                  { value: "10+", label: "Happy Clients" },
                  { value: "20+", label: "Projects Completed" }
                ].map((stat, index) => (
                  <motion.div 
                    key={stat.label}
                    className="stats-item"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 + (index * 0.1) }}
                  >
                    <h3>{stat.value}</h3>
                    <p>{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
      {/* Services Section */}
      <motion.div 
        className="services-section" 
        id="service-page"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="services-container">
          <h2 className="services-title">Services</h2>
          <div className="services-grid">
            {[
              { id: 1, title: "Web Design", description: "Creating visually appealing and user-friendly web designs." },
              { id: 2, title: "Frontend Development", description: "Building responsive and interactive user interfaces." },
              { id: 3, title: "Backend Development", description: "Developing robust server-side logic and databases." },
              { id: 4, title: "UX Design", description: "Designing seamless and intuitive user journeys for digital products." },
              { id: 5, title: "UI Design", description: "Creating visually compelling and functional user interfaces." },
              { id: 6, title: "Design Consulting", description: "Providing expert advice to improve product design and usability." },
            ].map((service) => (
              <motion.div 
                key={service.id} 
                className="service-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0, delay: service.id * 0 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="service-id">{service.id}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <a href="#services" className="service-link">Read More</a>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Projects Section */}
      <motion.div 
        className="projects-section" 
        id="projects"
        
      >
        <div className="projects-container">
          <h2 className="projects-title">My Projects</h2>
          <div className="projects-grid">
            {[
              { id: 1, name: "Street Style (E-commerce App)", technologies: "Figma", image: ProjectOne, figma: "#" },
              { id: 2, name: "School Social Website", technologies: "Figma", image: ProjectTwo, figma: "#" },
              { id: 3, name: "CoreSite Website", technologies: "Figma", image: ProjectThree, figma: "#" },
              { id: 4, name: "Milkinside Website", technologies: "Figma", image: ProjectFour, figma: "#" },
            ].map((project) => (
              <motion.div 
                key={project.id} 
                className="project-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0, delay: project.id * 0 }}
                whileHover={{ scale: 1.05 }}
              >
                <img src={project.image} alt={project.name} className="project-image" />
                <h3 className="project-name">{project.name}</h3>
                <p className="project-tech">{project.technologies}</p>
                <a href={project.figma} className="project-link" target="_blank" rel="noopener noreferrer">
                  Figma
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Contact Section */}
      <motion.div 
        className="contact-section" 
        id="contact_me"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="contact-container">
          <h2 className="contact-title">Contact Me</h2>
          <div className="contact-content">
            <motion.div 
              className="contact-details"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="contact-heading">Let's Talk</h3>
              <p className="contact-text">
                I'm open to discussing web development projects or partnership opportunities.
              </p>
              <div className="contact-info">
                <FaEnvelope className="icon" />
                <a href="mailto:princessarielleperez@gmail.com" className="contact-link">
                  princessarielleperez@gmail.com
                </a>
              </div>
              <div className="contact-info">
                <FaPhone className="icon" />
                <span>+63 921 5233 990</span>
              </div>
              <div className="contact-info">
                <FaMapMarkedAlt className="icon" />
                <span>Street, City, Province, Country</span>
              </div>
            </motion.div>
            <motion.form 
              className="contact-form"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" placeholder="Enter your Name" className="form-input" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter your Email" className="form-input" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="Enter your Message" className="form-textarea"></textarea>
              </div>
              <motion.button 
                type="submit" 
                className="submit-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send
              </motion.button>
            </motion.form>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.footer 
        className="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        <div className="footer-container">
          <div className="footer-left">
            <h3 className="footer-title">Ari</h3>
            <p className="footer-description">
              Web Designer and Developer based in the Philippines, specializing in web designing.
            </p>
          </div>
          <div className="footer-right">
            <form className="footer-form">
              <input type="email" placeholder="Enter Email" className="footer-input" />
              <motion.button 
                type="submit" 
                className="footer-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Ari. All rights reserved.
          </p>
          <div className="footer-socials">
            {[
              { Icon: FaFacebook, href: "https://www.facebook.com/princess.manatiga"  },
              { Icon: FaTiktok, href: "https://www.tiktok.com/@arie_xxe" },
              { Icon: FaInstagram, href: "https://www.instagram.com/arie_xxe/" },
              { Icon: FaTwitter, href: "https://x.com/arie_xxe" },
              { Icon: FaGoogle, href: "https://mail.google.com/mail/u/1/#inbox" },
              { Icon: FaGithub, href: "https://github.com/ariexxe" }
            ].map(({ Icon, href }, index) => (
              <motion.a 
                key={index}
                href={href} 
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon />
              </motion.a>
            ))}
          </div>
          <div className="footer-links">
            <a href="#" className="footer-link">Privacy</a>
            <a href="#" className="footer-link">Terms of Service</a>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Homepage;