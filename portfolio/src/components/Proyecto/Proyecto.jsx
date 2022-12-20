import React from "react";

export default function Proyecto({ name, number }) {
  console.log(
    "🚀 ~ file: Proyecto.jsx:4 ~ Proyecto ~ name, number",
    name,
    number
  );

  const cargarImagen = require.context("./tu_patch_assets", true);

  <img src={cargarImagen(`./${nombre_imagen}.jpg`)} alt={nombre_imagen} />;

  return (
    <div class="col-12 col-md-6 col-lg-4">
      <div class="proyecto">
        <img src={`../../images/proyecto${number}.png`} alt="proyecto-1" />
        <div class="overlay">
          <p>{name}</p>
          <div class="icon-contenedor">
            <a
              href="https://github.com/Harurin5671"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="bi bi-github"></i>
            </a>
            <a
              href="https://www.amazon.com/?&linkCode=ll2&tag=operagx-desktop-pe-20&linkId=a220549321c0182d3a17216a45ca75b4&language=es_US&ref_=as_li_ss_tl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="bi bi-laptop"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
