import React from "react";
import "./Home.css";
import Nav from "../Nav/Nav";

export default function Home() {
  return (
    <div className="home">
      <Nav />
      <div className="home_perfil">
        <img
          className="home_image"
          src="https://avatars.githubusercontent.com/u/77626612?s=400&u=a449f2af4deca41360245fea5384331c370ca18c&v=4"
          alt="foto de perfil"
        />
        <h1 className="home_color">Frank Santos Gonzales</h1>
        <h2 className="home_color">Full Stack Web Developer</h2>
      </div>
    </div>
  );
}
