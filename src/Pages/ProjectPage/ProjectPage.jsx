import Navbar from '../../components/A - Navbar/Navbar.jsx'
import Project from '../../components/E - Projects/Projects.jsx'
import Footer from '../../components/G - Footer/Footer.jsx'

export const ProjectPage = () => {
    return (
      <div className="project-page">
        <Navbar/>
            <Project/>
        <Footer/>
      </div>
    );
  };

  export default ProjectPage