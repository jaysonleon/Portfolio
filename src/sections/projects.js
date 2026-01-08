import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/projectCard/projectCard";
import NUBoardImg from "../assets/NUBoard.png";
import RLTetrisImg from "../assets/RLTetris.png";
import RecipeImg from "../assets/RecipeRecommender.png";
import "./sections.css";

export const Projects = () => {
  const PROJECTS = [
    {
      title: "NU Board",
      description: "A Kanban-style project planner for student teams.",
      image: NUBoardImg,
      href: "https://github.com/lawrenceosher/spring25-team-project-spring25-project-group-309",
      tags: ["React", "Node", "MongoDB"],
    },
    {
      title: "Tetris AI",
      description: "An exploration of several AI & Reinforcement Learning techniques using a Tetris environment.",
      image: RLTetrisImg,
      href: "https://github.com/jaysonleon/TetrisAI",
      tags: ["PyTorch", "Gymnasium", "RL"],
    }, 
    {
      title: "Recipe Recommender",
      description: "A LLM powered recipe recommendation system that could be tailored to user preferences and dietary restrictions.",
      image: RecipeImg,
      href: "https://github.com/natesawant/recipe-recommender",
      tags: ["NLP", "OpenAI", "LLM",],
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
