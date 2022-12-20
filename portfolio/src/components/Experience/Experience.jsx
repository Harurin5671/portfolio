import React from "react";
import "./Experience.css";

export default function Experience() {
  return (
    <section className="experiencia seccion-clara">
      <div className="container text-center">
        <div className="row">
          <div className="columna col-12 col-md-4">
            <img src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/null/external-front-end-ux-and-ui-flaticons-flat-flat-icons.png" />
            <p className="experiencia-titulo">Front-end</p>
            <p>
              Tengo experiencia en el Desarrollo Front-end haciendo un
              Bootcamp-SoyHenry y aprendiendo tambien de manera individual
              diferentes tecnologias e implementandolas en proyectos propios.
            </p>
            <div className="badges-contenedor">
              <span className="badge text-bg-primary">HTML</span>
              <span className="badge text-bg-primary">CSS</span>
              <span className="badge text-bg-primary">JavaScript</span>
              <span className="badge text-bg-primary">React</span>
              <span className="badge text-bg-primary">Bootstrap</span>
              <span className="badge text-bg-primary">Redux</span>
            </div>
          </div>
          <div className="columna col-12 col-md-4">
            <img src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/null/external-backend-no-code-flaticons-flat-flat-icons.png" />
            <p className="experiencia-titulo">Back-End</p>
            <p>
              Tengo experiencia en el Back-End debido al Bootcamp, En las cuales
              conecte el Front-end con el Back, conecte la base de datos al back
              y tambien tengo experiencia en el manejo de Api-rest
            </p>
            <div className="badges-contenedor">
              <span className="badge text-bg-primary">Node.js</span>
              <span className="badge text-bg-primary">Express</span>
              <span className="badge text-bg-primary">Mongoose</span>
              <span className="badge text-bg-primary">Sequelize</span>
              <span className="badge text-bg-primary">Api-rest</span>
            </div>
          </div>
          <div className="columna col-12 col-md-4">
            <img src="https://img.icons8.com/office/64/null/database-server.png" />
            <p className="experiencia-titulo">Base de Datos</p>
            <p>
              Durante el Bootcamp tuve que hacer proyectos tanto individuales
              como grupales, Asi que durante esas etapas adquiri experiencia
              manejando mongodb y SQL. Implementando las bases de datos.
            </p>
            <div className="badges-contenedor">
              <span className="badge text-bg-primary">Mongodb</span>
              <span className="badge text-bg-primary">PostgreSQL</span>
              <span className="badge text-bg-primary">SQL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
