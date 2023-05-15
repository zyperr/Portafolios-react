//react
import React from "react";
import { Link } from "react-router-dom";
//styles
import "../scss/pages/Home.scss";
//react icons
import { FaArrowAltCircleLeft } from "react-icons/fa";
function AboutMe({ resetScroll, showAboutMe, handleAboutMe }) {
  return (
    <div
      className={
        showAboutMe ? `sobre-mi__container active` : "sobre-mi__container"
      }
    >
      <h2 className="home__title">Sobre mi</h2>
      <p className="sobre-mi__paragraph">
        Me apasiona la <span className="highlight-text">programación</span> y
        disfruto trabajar en proyectos retadores que me permitan crecer y
        aprender siempre{" "}
        <span className="highlight-text">dispuesto a colaborar en equipo</span>{" "}
        y encontrar soluciones innovadoras.Si deseas conocer más sobre mi
        trayectoria y habilidades, ¡no dudes en contactarme! 
      </p>
      <button
        className="home__links"
        style={{ fontSize: "20px" }}
        onClick={handleAboutMe}
        title="sobre mi"
      >
        <FaArrowAltCircleLeft />
      </button>
      <div>
        <a
          href="../assets/pdf/cv-Maximiliano-Vera.pdf"
          download
          className="home__links"
        >
          descargar CV
        </a>
        <Link to="/portafolio" className="home__links" onClick={resetScroll}>
          proyectos
        </Link>
      </div>
    </div>
  );
}

export { AboutMe };
