import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";

function App(){
  return(
    <>
      <Navbar />
      <Hero />
      <Projects/>
      <Skills/>
      <About/>
      <Experience/>
      <Contact/>
    </>
  );
}

export default App;