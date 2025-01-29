import React from 'react';
import ResumeImage from '../../assets/Resume of mine for portfolio.png';
import ResumePDF from '../../assets/Resume of mine for portfolio.pdf';
import Navbar from '../../components/A - Navbar/Navbar.jsx';
import Footer from '../../components/G - Footer/Footer.jsx';
import './Resume.css';

const Resume = () => {
  return (
    <div className="resume-page">
      <Navbar />
      <main className="resume-content">
        <h1 className="resume-title">Resume</h1>
        <img
          src={ResumeImage}
          alt="Preview of my resume"
          className="resume-image"
        />
        <p className="resume-description">Feel free to download my resume below:</p>
        <a
          className="resume-download-button"
          href= {ResumePDF}
          download="Resume of mine for portfolio.pdf"
          aria-label="Download my resume"
        >
          Download Resume
        </a>
      </main>
      <Footer />
    </div>
  );
};

export default Resume;
