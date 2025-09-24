import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/projectCard/projectCard";
import NUBoardImg from "../assets/NUBoard.png";
import RLTetrisImg from "../assets/RLTetris.png";
import "./sections.css";

export const Projects = () => {
  const PROJECTS = [
    {
      title: "NU Board",
      description: "A Kanban-style project planner for student teams.",
      image: NUBoardImg,
      href: "https://github.com/you/nuboard",
      tags: ["React", "Node", "MongoDB"],
    },
    {
      title: "Tetris RL",
      description: "An exploration of Deep Learning and Reinforcement Learning using a Tetris environment.",
      image: RLTetrisImg,
      href: "https://github.com/you/tetris-rl",
      tags: ["PyTorch", "Gymnasium", "RL"],
    }
  ];  
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <Container>
        <Row className="gy-4">
          {PROJECTS.map((p) => (
            <Col key={p.title} xs={12} sm={6} md={4} lg={3}>
              <ProjectCard {...p} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
