import React from "react";
import img from "../../images/hero-inferior.svg";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero align-items-stretch">
      <div className="hero-principal d-flex flex-column justify-content-center align-items-center">
        <img
          className="hero-img-desarrollador rounded-circle"
          src="https://avatars.githubusercontent.com/u/77626612?s=400&u=a449f2af4deca41360245fea5384331c370ca18c&v=4"
          alt="foto-de-perfil"
        />
        <h1>Hola, Soy Frank Santos</h1>
        <h2>Full Stack Developer</h2>
      </div>
      <div className="hero-inferior">
        <img className="hero-inferior-imagen img-fluid" src={img} alt="img" />
      </div>
    </section>
  );
}
