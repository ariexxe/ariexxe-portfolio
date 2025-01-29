import React from "react";
import { motion } from "framer-motion";
import "./About.css";
import AboutImage from "../../assets/Aboutme.jpg";
import ResumePDF from '../../assets/Resume of mine for portfolio.pdf';


const About = () => {
  const skills = [
    { name: "HTML AND CSS", proficiency: 83.33 },
    { name: "Figma", proficiency: 83.33 },
    { name: "Node.js", proficiency: 75 },
  ];

  const stats = [
    { value: "3+", label: "Years of Experience" },
    { value: "10+", label: "Happy Clients" },
    { value: "20+", label: "Projects Completed" },
  ];

  const testimonials = [
    {
      quote:
        "Working with Princess Arielle M. Perez was an absolute pleasure. They delivered exceptional results!",
      author: "Client A",
      position: "CEO "
    },
    {
      quote:
        "Creative, professional, and highly skilled. I couldn't have asked for more!",
      author: "Client B",
    },
    {
      quote: "Amazing communication and quality of work. Highly recommend!",
      author: "Client C",
    },
  ];

  const achievements = [
    {
      title: "Certified Full-Stack Developer",
      organization: "Institution Name",
    },
    {
      title: "Best Web Design Award",
      organization: "Competition Name",
    },
    {
      title: "Featured in Top Tech Blog",
      organization: "Publication Name",
    },
  ];

  const containerVariants = {
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.section
      className="about-section"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="about-container">
        <motion.h2 className="about-title" variants={itemVariants}>
          About Me
        </motion.h2>

        <div className="about-content about-content-md">
          <motion.div
            className="about-image-container"
            variants={itemVariants}
          >
            <motion.img
              src={AboutImage}
              alt="About Me"
              className="about-image"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.1 }}
            />
            <div className="image-overlay"></div>
          </motion.div>

          <motion.div className="about-details" variants={itemVariants}>
            <motion.p className="about-description" variants={itemVariants}>
              I am a passionate website designer and web developer with a focus
              on building modern and responsive web designs and applications.
              With a strong foundation in both frontend and backend
              technologies, I strive to create seamless and efficient user
              experiences that leave a lasting impression.
            </motion.p>

            <motion.div className="skills-container" variants={itemVariants}>
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="skill-item"
                  variants={itemVariants}
                >
                  <div className="skill-header">
                    <label className="skill-label">{skill.name}</label>
                    <span className="skill-percentage">
                      {skill.proficiency}%
                    </span>
                  </div>
                  <div className="skill-bar-container">
                    <motion.div
                      className="skill-bar"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div className="stats-container" variants={containerVariants}>
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="stats-item"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {stat.value}
                  </motion.h3>
                  <motion.p
                     initial={{ scale: 0.8, opacity: 0 }}
                     whileInView={{ scale: 1, opacity: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.3, delay: 0.5 + (index * 0.1) }}
                  >
                    {stat.label}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Achievements Section */}
        <motion.div
          className="achievements-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h3 className="section-title" variants={itemVariants}>
            Achievements
          </motion.h3>
          <div className="achievement-list">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                className="achievement-item"
                variants={itemVariants}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h4>{achievement.title}</h4>
                <p>{achievement.organization}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          className="testimonials-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h3 className="section-title" variants={itemVariants}>
            Testimonials
          </motion.h3>
          <div className="testimonial-list">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="testimonial-item"
                variants={itemVariants}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <p>{testimonial.quote}</p>
                <h4>{testimonial.author}</h4>
                <p>{testimonial.position}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call-to-Action Section */}
        <motion.div className="cta-container" variants={itemVariants}>
          <h3 className="cta-title">Let's Work Together!</h3>
          <div className="cta-buttons">
            <motion.a
              href="#contacts"
              className="cta-button"
              whileHover={{ scale: 1.1 }}
            >
              Contact Me
            </motion.a>
            <motion.a
              href={ResumePDF}
              download="Resume of mine for portfolio.pdf"
              className="cta-button"
              whileHover={{ scale: 1.1 }}
            >
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
