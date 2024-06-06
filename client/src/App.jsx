import About from "./Components/About/About";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Skills from "./Components/Skills/Skills";
import CapstoneProject from "./Components/Capstone-Project/CapstoneProject";
import MiniProject from "./Components/Mini-Projects/MiniProject";
import Contact from "./Components/Contact/Contact";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <CapstoneProject></CapstoneProject>
      <MiniProject></MiniProject>
      <Contact></Contact>
    </div>
  );
};

export default App;
