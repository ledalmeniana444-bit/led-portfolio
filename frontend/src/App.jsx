import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";

function App(){
  return(
    <>
      <Navbar />
      <Hero />
      <About/>
      <Projects/>
    </>
  );
}

export default App;