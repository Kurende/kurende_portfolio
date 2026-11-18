import { useEffect, useLayoutEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Libracore from './pages/Libracore';
import ProjectsPage from './pages/Projects';
import EbenCorePOS from './pages/EbenCorePOS';

function RouteEffects() {
  const location = useLocation();

  useLayoutEffect(() => {
    if (location.hash) {
      const sectionId = decodeURIComponent(location.hash.slice(1));
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      return;
    }

    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const sections = document.querySelectorAll('.fade-section:not(.show)');

    if (!('IntersectionObserver' in window)) {
      sections.forEach((section) => section.classList.add('show'));
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [location.pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <RouteEffects />

      {/* Navbar stays persistent across all pages */}
      <Navbar />

      <main>
        <Routes>
          {/* Home Landing Page */}
          <Route path="/" element={<Home />} />

          {/* Dedicated Projects Page */}
          <Route path="/projects" element={<ProjectsPage />} />

          {/* Project Case Study Pages */}
          <Route path="/case-studies/libracore" element={<Libracore />} />
          <Route path="/case-studies/ebencore-pos" element={<EbenCorePOS />} />
        </Routes>
      </main>

      {/* Footer stays persistent across all pages */}
      <Footer />
    </Router>
  );
}
