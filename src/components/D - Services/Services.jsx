import React from 'react';
import { motion } from 'framer-motion';
import "./Services.css"

const services = [
  {
    id: 1,
    title: "Web Design",
    description: "Creating visually appealing and user-friendly web designs.",
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
  },
  {
    id: 3,
    title: "Backend Development",
    description: "Developing robust server-side logic and databases.",
  },
  {
    id: 4,
    title: "UX Design",
    description: "Designing seamless and intuitive user journeys for digital products.",
  },
  {
    id: 5,
    title: "UI Design",
    description: "Creating visually compelling and functional user interfaces.",
  },
  {
    id: 6,
    title: "Design Consulting",
    description: "Providing expert advice to improve product design and usability.",
  },
];

const Services = () => {
  return (
    <motion.div 
      className="services-section" 
      id="services"

      viewport={{ once: true }}
      transition={{ duration: 0.9}}
    >
      <div className="services-container">
        <h2 className="services-title">Services</h2>
        <div className="services-grid">
          {services.map((service) => (
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
              <a href="#services" className="service-link">
                Inquire Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Services;