import "./App.css";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/navBar/navBar";
import { About } from "./sections/about";
import { Experience } from "./sections/experience";
import { Projects } from "./sections/projects";
import { Contact } from "./sections/contact";
import { Resume } from "./sections/resume";
import Header from "./components/header/Header";

function App() {
  useEffect(() => {
    const root = document.documentElement;
    const getMaxScroll = () => root.scrollHeight - root.clientHeight || 1;

    let target = 0; // target background position (0–300)
    let current = 0; // smoothed value
    let rafId = 0;

    const lerp = (a, b, t) => a + (b - a) * t; // smoothing helper

    const animate = () => {
      // smaller t = smoother/slower, larger t = snappier
      current = lerp(current, target, 0.08);
      root.style.setProperty("--bg-x", `${current}%`);
      if (Math.abs(current - target) > 0.1) {
        rafId = requestAnimationFrame(animate);
      } else {
        rafId = 0;
      }
    };

    const onScrollOrResize = () => {
      const progress = window.scrollY / getMaxScroll();
      target = progress * 300; 
      if (!rafId) rafId = requestAnimationFrame(animate);
    };

    onScrollOrResize(); // set initial value
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <NavBar />
      <Header />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Resume />
    </>
  );
}

export default App;
