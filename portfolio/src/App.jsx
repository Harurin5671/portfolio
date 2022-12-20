import "./App.css";
import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import About from "./components/About me/About";
import Experience from "./components/Experience/Experience";
import Proyectos from "./components/Proyectos/Proyectos";

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Proyectos />
    </div>
  );
}

export default App;
