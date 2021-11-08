import Heading from "./components/Heading";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
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
