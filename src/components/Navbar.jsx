import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav aria-label="Main navigation">
      <Link to="/" className="logo" onClick={closeMenu}>
        BRUCE
      </Link>

      <button
        type="button"
        className="menu-toggle"
        aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-menu"
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span aria-hidden="true">{isMenuOpen ? '×' : '☰'}</span>
      </button>

      <ul id="mobile-menu" className={isMenuOpen ? 'active' : ''}>
        <li><Link to="/#about" onClick={closeMenu}>About</Link></li>
        <li><Link to="/#skills" onClick={closeMenu}>Skills</Link></li>
        <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
        <li><Link to="/#contact" onClick={closeMenu}>Contact</Link></li>
      </ul>

      <Link to="/#contact" className="nav-btn">
        Let's Talk
      </Link>
    </nav>
  );
}
