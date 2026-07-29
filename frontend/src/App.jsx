import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";

function App(){
  return(
    <>
      <Navbar />
      <Hero />
      <About/>
      <Projects/>
      <Skills/>
    </>
  );
}

export default App;