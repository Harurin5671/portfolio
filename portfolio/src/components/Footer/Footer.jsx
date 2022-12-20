import React from "react";
import img from "../../images/icono-blanco.svg";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="seccion-oscura d-flex flex-column align-items-center justify-content-center">
      <img className="footer-logo" src={img} alt="icono-blanco" />
      <p className="footer-texto text-center">
        Aprendo y creo todos los dias.
        <br />
        Creemos un proyecto juntos
      </p>
      <div className="iconos-redes-sociales d-flex flex-wrap align-items-center justify-content-center">
        <a
          href="https://github.com/Harurin5671"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/frank-erick-santos-gonzales-80a84015b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-linkedin"></i>
        </a>
        <a
          href="mailto:frankcito639@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-envelope"></i>
        </a>
      </div>
      <div className="derechos-de-autor">
        Creado por Frank Santos(2022) &#169;
      </div>
    </footer>
  );
}
