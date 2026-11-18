import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="hero">
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>KABELO SEBASHE</h1>

        <p>
          Junior Software Developer.
        </p>

        <div className="hero-buttons">
          <Link to="/projects" className="btn primary">
            View My Work
          </Link>

          <Link to="/#contact" className="btn secondary">
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}
