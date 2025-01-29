import React from 'react';
import Navbar from '../../components/A - Navbar/Navbar.jsx'
import About from '../../components/C - AboutMe/About.jsx'
import Footer from '../../components/G - Footer/Footer.jsx'

// AboutMePage.jsx
export const AboutMePage = () => {
  return (
    <div className="about-me">
        <Navbar/>
      <About/>
        <Footer/>
    </div>
  );
};

export default AboutMePage