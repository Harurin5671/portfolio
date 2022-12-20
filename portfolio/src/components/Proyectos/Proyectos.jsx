import React from "react";
import img1 from "../../images/proyecto1.png";
import img2 from "../../images/proyecto2.png";
import img3 from "../../images/proyecto3.png";
import img4 from "../../images/proyecto4.png";
import img5 from "../../images/proyecto5.png";
import img6 from "../../images/proyecto6.png";
import "./Proyectos.css";

export default function Proyectos() {
  return (
    <section id="proyectos" class="proyectos seccion-clara d-flex flex-column">
      <h2 className="seccion-titulo texto-negro">Mis Proyectos</h2>
      <h3 className="seccion-description">
        Estos son los proyectos que he realizado
      </h3>
      <div className="container text-center proyectos-contenedor">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="proyecto">
              <img src={img1} alt="proyecto-1" />
              <div className="overlay">
                <p>Proyecto 1</p>
                <div className="icon-contenedor">
                  <a
                    href="https://github.com/Harurin5671"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                  <a
                    href="https://www.amazon.com/?&linkCode=ll2&tag=operagx-desktop-pe-20&linkId=a220549321c0182d3a17216a45ca75b4&language=es_US&ref_=as_li_ss_tl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-laptop"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="proyecto">
              <img src={img2} alt="proyecto-2" />
              <div className="overlay">
                <p>Proyecto 2</p>
                <div className="icon-contenedor">
                  <a
                    href="https://github.com/Harurin5671"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                  <a
                    href="https://www.amazon.com/?&linkCode=ll2&tag=operagx-desktop-pe-20&linkId=a220549321c0182d3a17216a45ca75b4&language=es_US&ref_=as_li_ss_tl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-laptop"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="proyecto">
              <img src={img3} alt="proyecto-3" />
              <div className="overlay">
                <p>Proyecto 3</p>
                <div className="icon-contenedor">
                  <a
                    href="https://github.com/Harurin5671"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                  <a
                    href="https://www.amazon.com/?&linkCode=ll2&tag=operagx-desktop-pe-20&linkId=a220549321c0182d3a17216a45ca75b4&language=es_US&ref_=as_li_ss_tl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-laptop"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="proyecto">
              <img src={img4} alt="proyecto-4" />
              <div className="overlay">
                <p>Proyecto 4</p>
                <div className="icon-contenedor">
                  <a
                    href="https://github.com/Harurin5671"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                  <a
                    href="https://www.amazon.com/?&linkCode=ll2&tag=operagx-desktop-pe-20&linkId=a220549321c0182d3a17216a45ca75b4&language=es_US&ref_=as_li_ss_tl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-laptop"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="proyecto">
              <img src={img5} alt="proyecto-5" />
              <div className="overlay">
                <p>Proyecto 5</p>
                <div className="icon-contenedor">
                  <a
                    href="https://github.com/Harurin5671"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                  <a
                    href="https://www.amazon.com/?&linkCode=ll2&tag=operagx-desktop-pe-20&linkId=a220549321c0182d3a17216a45ca75b4&language=es_US&ref_=as_li_ss_tl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-laptop"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="proyecto">
              <img src={img6} alt="proyecto-6" />
              <div className="overlay">
                <p>Proyecto 6</p>
                <div className="icon-contenedor">
                  <a
                    href="https://github.com/Harurin5671"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                  <a
                    href="https://www.amazon.com/?&linkCode=ll2&tag=operagx-desktop-pe-20&linkId=a220549321c0182d3a17216a45ca75b4&language=es_US&ref_=as_li_ss_tl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-laptop"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        href="https://github.com/Harurin5671?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button type="button" className="btn btn-info">
          Ver más proyectos <i className="bi bi-arrow-right-circle-fill"></i>
        </button>
      </a>
    </section>
  );
}
