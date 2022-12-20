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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              nulla consequatur iste laboriosam. Animi explicabo corporis omnis
              nisi deserunt et nihil, possimus id est ullam eos accusamus?
              Commodi porro sed praesentium placeat iste earum quaerat modi,
              nisi corporis architecto temporibus blanditiis dignissimos eum
              sequi aut.
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              nulla consequatur iste laboriosam. Animi explicabo corporis omnis
              nisi deserunt et nihil, possimus id est ullam eos accusamus?
              Commodi porro sed praesentium placeat iste earum quaerat modi,
              nisi corporis architecto temporibus blanditiis dignissimos eum
              sequi aut.
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              nulla consequatur iste laboriosam. Animi explicabo corporis omnis
              nisi deserunt et nihil, possimus id est ullam eos accusamus?
              Commodi porro sed praesentium placeat iste earum quaerat modi,
              nisi corporis architecto temporibus blanditiis dignissimos eum
              sequi aut.
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
