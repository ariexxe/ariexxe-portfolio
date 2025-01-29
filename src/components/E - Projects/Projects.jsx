import React from 'react';
import "./Projects.css"
import { motion } from 'framer-motion';
import ProjectOne from '../../assets/Streetstyleapp.png';
import ProjectTwo from '../../assets/Socialmediawebsite.png';
import ProjectThree from '../../assets/Coresite.png';
import ProjectFour from '../../assets/Milkinside.png';

const projects = [
  {
    id: 1,
    name: "Street Style (E-commerce App)",
    technologies: "Figma",
    image: ProjectOne,
    figma: "https://www.figma.com/design",
  },
  {
    id: 2,
    name: "School Social Website (School project)",
    technologies: "Figma",
    image: ProjectTwo,
    figma: "https://www.figma.com/design",
  },
  {
    id: 3,
    name: "CoreSite Website (Service Website)",
    technologies: "Figma",
    image: ProjectThree,
    figma: "https://www.figma.com/design",
  },
  {
    id: 4,
    name: "Milkinside Website (Service Website)",
    technologies: "Figma",
    image: ProjectFour,
    figma: "https://www.figma.com/design",
  },
];

const Projects = () => {
  return (
    <motion.div 
      className="projects-section" 
      id="projects"
      
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="projects-container">
        <h2 className="projects-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
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
              <a
                href={project.figma}
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Figma
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;