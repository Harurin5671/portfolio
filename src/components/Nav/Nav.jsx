import React from "react";
import img from "../../images/icono.png";
import "./Nav.css";

export default function Nav() {
  return (
    // <nav className="navbar navbar-expand-md navbar-light">
    //   <div className="container-fluid">
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbar-toggler"
    //       aria-controls="navbarTogglerDemo01"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbar-toggler">
    //       <a className="navbar-brand" href="#">
    //         <img src={img} width="50" alt="logo pagina" />
    //       </a>
    //       <ul className="navbar-nav d-flex justify-content-center align-items-center">
    //         <li className="nav-item">
    //           <a
    //             className="nav-link active"
    //             aria-current="page"
    //             href="#sobre-mi"
    //           >
    //             Sobre mi
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#proyectos">
    //             Proyectos
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#contacto">
    //             Contacto
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
    <nav className="navbar">
      {/* <div className="navbar_container"> */}
      <ul className="ul_nav">
        <li className="navbar_li">
          <a className="navbar_a" href="">
            Sobre mi
          </a>
        </li>
        <li className="navbar_li">
          <a className="navbar_a" href="">
            Proyectos
          </a>
        </li>
        <li className="navbar_li">
          <a className="navbar_a" href="">
            Contacto
          </a>
        </li>
      </ul>
      {/* </div> */}
    </nav>
  );
}
