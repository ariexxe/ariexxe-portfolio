import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import ContactMe from './Pages/ContactMe/ContactMe.jsx';
import Resume from './Pages/Resume/Resume.jsx';
import Homepage from './Pages/Homepage/Homepage.jsx';
import AboutMePage from './Pages/AboutMePage/AboutMePage.jsx';
import ServicePage from './Pages/ServicePage/ServicePage.jsx';
import ProjectPage from './Pages/ProjectPage/ProjectPage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for Homepage */}
        <Route path="/" element={<Homepage />} />

        {/* Route for About Me Page */}
        <Route path="/about" element={<AboutMePage />} />

        {/* Route for Service Me Page */}
        <Route path="/services" element={<ServicePage />} />

        {/* Route for Project Me Page */}
        <Route path="/projects" element={<ProjectPage />} />

        {/* Route for Contact Me Page */}
        <Route path="/contact_me" element={<ContactMe />} />


        {/* Route for Button Contact Me Page */}
        <Route path="/contacts" element={<ContactMe />} />

        {/* Route for Button Resume Page */}
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;
