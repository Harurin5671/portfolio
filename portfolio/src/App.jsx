import "./App.css";
import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import About from "./components/About me/About";
import Experience from "./components/Experience/Experience";
import Proyectos from "./components/Proyectos/Proyectos";
import Contacto from "./components/Contacto/Contacto";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Proyectos />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
