import React from "react";
import "./Contacto.css";

export default function Contacto() {
  return (
    <section id="contacto" className="contacto seccion-oscura">
      <div className="container">
        <div className="container text-center rectangulo d-flex justify-content-evenly">
          <div className="row">
            <div className="col-12 col-md-4 seccion-titulo">¡Hablemos!</div>
            <div className="col-12 col-md-4 description">
              Contactame para iniciar tu proyecto de Desarrollo Web.
            </div>
            <div className="col-12 col-md-4">
              <a href="mailto:frankcito639@gmail.com">
                <button type="button">
                  Contacto
                  <i className="bi bi-envelope-check-fill"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
