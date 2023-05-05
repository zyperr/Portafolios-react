//react  y react-router
import React, { useEffect, useState } from "react";
//style
import "../scss/pages/Home.scss";
//aos import
import Aos from "aos";
import "aos/dist/aos.css";
//components
import { AboutMe } from "../components/AboutMe";
function Home({ resetScroll }) {
  const [showAboutMe, setShowAboutMe] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  const handleAboutMe = () => {
    setShowAboutMe(!showAboutMe);
  };
  return (
    <section>
      <div className={showAboutMe ? "home active" : "home"}>
        <div className="big-bubbles"></div>
        <h1 className="home__greeting" data-aos="fade-up">
          Hola
        </h1>
        <span className="home__title" data-aos="fade-left">
          Soy Maximiliano Vera
          <p className="home-paragraph">Frontend developer</p>
        </span>
        <button
          className="home__links"
          style={{ fontSize: "20px" }}
          onClick={handleAboutMe}
          title="sobre mi"
        >
          sobre mi
        </button>
      </div>
      <AboutMe
        resetScroll={resetScroll}
        showAboutMe={showAboutMe}
        handleAboutMe={handleAboutMe}
      />
    </section>
  );
}

export { Home };
