import { Link } from 'react-router-dom';
import libraryLogo from '../assets/LibraCore_white.png';
import ebenCorePosIllustration from '../assets/ebencore-pos.svg';

export default function Projects() {
  return (
    <section id="projects" className="fade-section">
      <h2>FEATURED PROJECTS</h2>

      <div className="projects-container">
        {/* PROJECT 1: LibraCore */}
        <div className="project-card">
          <img
            src={libraryLogo}
            alt="LibraCore Library Management System"
            className="project-image"
          />
          <h3>LibraCore Library System</h3>

          <p>
            An offline-first school library management system built with Qt 6, C++17, 
            and SQLite 3 for managing books, learners, and secure borrowing workflows.
          </p>

          <div className="project-buttons">
            <Link to="/case-studies/libracore" className="btn small">
              Case Study
            </Link>
          </div>
        </div>

        {/* PROJECT 2: EbenCore Spaza POS */}
        <div className="project-card">
          <img
            src={ebenCorePosIllustration}
            alt="Illustration of an EbenCore point-of-sale terminal"
            className="project-image"
          />
          <h3>EbenCore Spaza POS</h3>
          <p className="project-status">
            <span className="badge bg-success">Active project</span>
          </p>

          <p>
            A modern, offline-first point-of-sale application designed for South
            African spaza shops. Built with C++17 and Qt Widgets, with an initial
            SQLite database, it focuses on sales processing, inventory management,
            supplier purchasing, cash management, and checkout operations.
          </p>

          <div className="project-buttons">
            <Link to="/case-studies/ebencore-pos" className="btn small">
              Case Study
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
