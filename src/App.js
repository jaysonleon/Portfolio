import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/navBar/navBar";
import { About } from "./sections/about";
import { Experience } from "./sections/experience";
import { Projects } from "./sections/projects";
import { Contact } from "./sections/contact";
import { Resume } from "./sections/resume";

function App() {
  return (
    <>
      <NavBar />
      <header className="App-header">
        <p>Hello React!</p>
      </header>
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Resume />
      <div className="App">{/* Rest of your app content */}</div>
    </>
  );
}

export default App;
