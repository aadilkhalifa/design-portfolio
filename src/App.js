import Heading from "./components/Heading/Heading";
import NavBar from "./components/Navbar/NavBar";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import { useEffect, useState } from "react";
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';

function App() {

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageXOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  return (
    <ParallaxProvider>
      <div className="App"> 
        <NavBar/>
        <Heading/>
        <About/>
        <Portfolio/>
        <Contact/>
      </div>
    </ParallaxProvider>
  );
}

export default App;
