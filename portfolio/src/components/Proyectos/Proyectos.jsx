import React from "react";
import Proyecto from "../Proyecto/Proyecto";

export default function Proyectos() {
  return (
    <section
      id="proyectos"
      className="proyectos seccion-clara d-flex flex-column"
    >
      <h2 className="seccion-titulo texto-negro">Mis Proyectos</h2>
      <h3 className="seccion-description">
        Estos son los proyectos que he realizado
      </h3>
      <div className="container text-center proyectos-contenedor">
        <div className="row">
          <Proyecto name={"Proyecto 1"} number={1} />
        </div>
      </div>
    </section>
  );
}
