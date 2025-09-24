import "./sections.css";

export const About = () => {
  return (
    <section id="about" className="section">
      <h2>About Me</h2>
      <div className="about-grid">
        <div className="about-card">
          <p>
            Hi! I'm Jason Leon! I'm an aspiring software developer with a
            passion for creating applications that have an impact. I care about
            improving lives through technology and am always eager to learn and
            grow in this ever-evolving world.
          </p>
        </div>

        <div className="about-card">
          <p>
            I'm interested in using Machine Learning and Artificial Intelligence
            to solve real-world problems. I also enjoy working on full-stack
            applications and exploring new technologies. I'm currently looking
            for any work opportunities, so please feel free to reach out if you
            have any questions or would like to connect!
          </p>
        </div>

        <div className="about-card">
          <p>
            I graduated from the Northeastern University Class of 2025 with a
            Bachelor's degree in Computer Science with an Artificial
            Intelligence concentration. I'm based in Long Island, New York, and
            am open to remote work opportunities as well as on-site positions.
          </p>
        </div>

        <div className="about-card">
          <p>
            When I'm not coding, I enjoy traveling, playing golf, skiing,
            hiking, and spending time with friends and family. I also love
            watching sports, video games, and of course, YouTube.
          </p>
        </div>
      </div>

      <hr></hr>
      <h2 className="stack-title">My Tech Stack</h2>
      <ul className="stack-grid">
        <li className="stack-item">
          <span className="stack-icon devicon-python-plain"></span>
          <span>Python</span>
        </li>
        <li className="stack-item">
          <span className="stack-icon devicon-java-plain"></span>
          <span>Java</span>
        </li>
        <li className="stack-item">
          <span className="stack-icon devicon-javascript-plain"></span>
          <span>JavaScript / TypeScript</span>
        </li>
        <li className="stack-item">
          <span className="stack-icon devicon-react-original"></span>
          <span>React</span>
        </li>
        <li className="stack-item">
          <span className="stack-icon devicon-nodejs-plain"></span>
          <span>Node.js</span>
        </li>
        <li className="stack-item">
          <span className="stack-icon devicon-bootstrap-plain"></span>
          <span>Bootstrap CSS</span>
        </li>
        <li className="stack-item">
          <span className="stack-icon devicon-mongodb-plain"></span>
          <span>SQL / NoSQL</span>
        </li>
        <li className="stack-item">
          <span className="stack-icon devicon-pytorch-original"></span>
          <span>PyTorch</span>
        </li>
        <li className="stack-item">
          <span className="stack-icon devicon-tensorflow-original"></span>
          <span>TensorFlow</span>
        </li>
        <li className="stack-item">
          <span className="stack-icon devicon-anaconda-original"></span>
          <span>ML / Deep Learning</span>
        </li>
      </ul>
    </section>
  );
};
