import { Mail, Linkedin, Github, Phone } from "lucide-react";
import "./sections.css";

export const Contact = () => {
  return (
    <section id="contact" className="contact section">
      <h2>Contact</h2>

      {/* <p className="contact-text">
        Feel free to reach out to me using any of the following methods:
      </p> */}

      <div className="contact-box">
        <a
          href="mailto: jasonleon01@gmail.com"
          className="contact-item"
          aria-label="Email"
        >
          <Mail size={32} />
          <span>Email</span>
        </a>

        <a 
          href="https://www.linkedin.com/in/jason-leon-8566b3204/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
          aria-label="LinkedIn"
        >
          <Linkedin size={32} />
          <span>LinkedIn</span>
        </a>

        <a
          href="https://github.com/jaysonleon"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
          aria-label="GitHub"
        >
          <Github size={32} />
          <span>GitHub</span>
        </a>

        <a
          href="tel:516-587-7801"
          className="contact-item"
          aria-label="Phone"
        >
          <Phone size={32} />
          <span>Phone</span>
        </a>
      </div>
    </section>
  );
};
