import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import {
  FaUserAlt,
  FaBriefcase,
  FaProjectDiagram,
  FaEnvelope,
  FaFileAlt,
} from "react-icons/fa";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("about");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSetActiveLink = (value) => setActiveLink(value);

  return (
    <Navbar
      expand="lg"
      bg="dark"
      variant="dark"
      fixed="top"
      className={`px-4 ${scrolled ? "scrolled" : ""}`}
    >
      <Container fluid>
        <Nav className="me-auto">
          <Nav.Link
            href="#about"
            className={
              activeLink === "about" ? "active navbar-link" : "navbar-link"
            }
            onClick={() => handleSetActiveLink("about")}
          >
            <FaUserAlt style={{ marginRight: "6px" }} /> About
          </Nav.Link>
          <Nav.Link
            href="#experience"
            className={
              activeLink === "experience" ? "active navbar-link" : "navbar-link"
            }
            onClick={() => handleSetActiveLink("experience")}
          >
            <FaBriefcase style={{ marginRight: "6px" }} /> Experience
          </Nav.Link>
          <Nav.Link
            href="#projects"
            className={
              activeLink === "projects" ? "active navbar-link" : "navbar-link"
            }
            onClick={() => handleSetActiveLink("projects")}
          >
            <FaProjectDiagram style={{ marginRight: "6px" }} /> Projects
          </Nav.Link>
          <Nav.Link
            href="#contact"
            className={
              activeLink === "contact" ? "active navbar-link" : "navbar-link"
            }
            onClick={() => handleSetActiveLink("contact")}
          >
            <FaEnvelope style={{ marginRight: "6px" }} /> Contact
          </Nav.Link>
        </Nav>

        <Nav>
          <Nav.Link
            href="#resume"
            className={
              activeLink === "resume" ? "active navbar-link" : "navbar-link"
            }
            onClick={() => handleSetActiveLink("resume")}
          >
            <FaFileAlt style={{ marginRight: "6px" }} /> Resume
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
