import React from 'react';
import Navbar from '../../components/A - Navbar/Navbar.jsx'
import Services from '../../components/D - Services/Services.jsx'
import Footer from '../../components/G - Footer/Footer.jsx'

export const ServicePage = () => {
    return (
      <div className="service-page">
            <Navbar/>
        <Services/>
            <Footer/>
      </div>
    );
  };

  export default ServicePage