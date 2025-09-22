import { useState, useEffect } from "react";
import headerImage from "../../assets/cpu.png";

function Header() {
  const titles = ["Full Stack Engineer", "AI Developer", "Programmer", "Bag Chaser"];
  const [index, setIndex] = useState(0);
  

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [titles.length]);

  return (
    <header className="App-header">
      <p>Jason Leon</p>
      <p>{titles[index]}</p>
      <img src={headerImage} alt="Header" className="Header-image" />
    </header>
  );
}

export default Header;
