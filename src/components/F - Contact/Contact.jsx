import React, { useState } from "react";
import "./Contact.css"
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkedAlt } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="contact-section" id="contact_me">
            {/* Contact Section */}
                  <motion.div 
                    className="contact-section" 
                    id="contact_me"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
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
        </div>
    );
};

export default Contact;
