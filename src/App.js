import Heading from "./components/Heading";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Heading/>
      <About/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;
