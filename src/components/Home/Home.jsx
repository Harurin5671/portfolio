import React from "react";
import "./Home.css";
import { useState } from "react";
import Nav from "../Nav/Nav";

export default function Home() {
  const [display, setDisplay] = useState(true);

  const change = () => {
    setDisplay(false);
  };
  const changeTrue = () => {
    setDisplay(true);
  };

  return (
    <div className="home container">
      {/* <Nav /> */}
      <div className={`${display ? "home_perfil" : "home_display"}`}>
        <button onClick={(e) => change(e)} className="home_perfil_btn">
          x
        </button>
        <img
          className="home_image"
          src="https://avatars.githubusercontent.com/u/77626612?s=400&u=a449f2af4deca41360245fea5384331c370ca18c&v=4"
          alt="foto de perfil"
        />
        <h1 className="home_color-black">Frank Santos Gonzales</h1>
        <h2 className="home_color-black">Full Stack Web Developer</h2>
        <p className="home_about">
          Soy un Full Stack Web Developer. Graduado en Henry en la cual aprendi
          y realize proyectos de manera individual y grupal, y sigo añadiendo
          conocimientos dia a dia.
        </p>
        {/* <h3 className="home_h3_projects">Proyectos</h3>
        <div className="home_projects_container">
          <div className="home_projects_listContainer">
            <ul className="home_projects_container_ul">
              <li>
                <a
                  target="_blank"
                  className="home_about_projects_a home_color-black"
                  href="https://github.com/Harurin5671/food-app"
                >
                  PI-Food App
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  className="home_about_projects_a home_color-black"
                  href="https://github.com/FrancoNicolas1/morfi/tree/develop"
                >
                  PF-Morfi
                </a>
              </li>
            </ul>
          </div>
        </div> */}
      </div>
      {display ? null : (
        <a href="?=ajaja=#" onClick={changeTrue} className="home_display_a">
          Perfil
        </a>
      )}
    </div>
  );
}
