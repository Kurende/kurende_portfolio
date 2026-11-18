export default function Contact() {
  return (
    <section id="contact" className="contact-section fade-section">
      <div className="contact-content">
        
        <h2>LET'S CONNECT</h2>

        <p className="contact-message">
          I'd love to hear from you. Whether it's a project, collaboration, or
          simply a conversation.
        </p>

        <h3 className="social-title">LET'S CHAT</h3>
        <div className="social-icons">
          <a href="mailto:kabibruce@gmail.com" aria-label="Email Kabelo">
            <i className="fa-solid fa-envelope"></i>
          </a>

          <a href="https://wa.me/27789586043" target="_blank" rel="noopener noreferrer" aria-label="Chat with Kabelo on WhatsApp">
            <i className="fa-brands fa-whatsapp"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/kabelo-sebashe-kurende/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Kabelo on LinkedIn"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>

          <a href="https://github.com/kurende" target="_blank" rel="noopener noreferrer" aria-label="Kabelo on GitHub">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>

        <p className="signature-quote">
          "Where business needs meet thoughtful design."
        </p>
      </div>
    </section>
  );
}
