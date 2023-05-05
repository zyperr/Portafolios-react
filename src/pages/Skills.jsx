import React from "react";

import {
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiReact,
  SiGit,
  SiGithub,
  SiVisualstudiocode
} from "react-icons/si";
import { DiSass, DiNpm } from "react-icons/di";
import vite from "../assets/vitejs.svg"
import "../scss/pages/skills.scss";

function Skills() {
  const skillsData = [
    {
      programmingLanguage: [
        <SiJavascript style={{ color: "rgb(239, 232, 14)" }} title="javascript"/>,
        <SiCss3 style={{ color: "#1369A0" }} title="CSS"/>,
        <SiHtml5 style={{ color: "#d04a2b" }} title="HTML5"/>,
      ],
      frameworklibraries: [
        <SiReact style={{ color: "#149ECA" }} title="React"/>,
        <DiSass style={{ color: "#CF649A" }} title="Sass"/>,
        <img src="https://seekicon.com/free-icon-download/react-router_1.png" className="vite-icon" title="react-router-dom-6" alt="react router dom icon"/>
      ],
      tools: [
        <DiNpm style={{ color: "#C82D2F" }} title="npm"/>,
        <SiGithub style={{ color: "#f3f3f3" }} title="github"/>,
        <SiGit style={{ color: "#F44D27" }} title="git"/>,
        <img src={vite} className="vite-icon" title="vite.js" alt="vite.js"/>,
        <SiVisualstudiocode style={{color:"#005BA4"}} title="VS code"/>
      ],
    },
  ];
  return (
    <section className="skills_section">
      <div className="skill__language-section">
      <h3 className="skills__title">Lenguajes</h3>
        <ul className="skills__list-container">
          {skillsData.map((item, index) => (
            <li key={`list-item-language-${index}`}>
              {item.programmingLanguage.map((language, index) => (
                <span key={`list-language-${index}`} className="skills__items" >{language}</span>
              ))}
            </li>
          ))}
        </ul>
        <h3 className="skills__title">Frameworks y librerías</h3>
        <ul className="skills__list-container">
          {skillsData.map((item, index) => (
            <li key={`list-item-framework-${index}`}>
              {item.frameworklibraries.map((framework, index) => (
                <span key={`list-framework-${index}`} className="skills__items" >{framework}</span>
              ))}
            </li>
          ))}
        </ul>
        <h3 className="skills__title">Herramientas</h3>
        <ul className="skills__list-container">
          {skillsData.map((item, index) => (
            <li key={`list-item-tools-${index}`}>
              {item.tools.map((tool, index) => (
                <span key={`list-tools-${index}`} className="skills__items">{tool}</span>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export { Skills };
