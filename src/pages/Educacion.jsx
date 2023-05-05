import React from "react";
//component
import { TimeLine } from "../components/TimeLine";
//style
import "../scss/pages/Education.scss";
//icons
import aluraIcon from "../assets/alura-icon.png";
import npmIcon from "../assets/npmcurso.png";
import es6Icon from "../assets/es6plus.png";
import reactIcon from "../assets/reactJsCurso.png";
import asincCurso from "../assets/asincronismocurso.png";
import frontendIcon from "../assets/frontendPractico.png";
import ingIcon from "../assets/ingIcon.jpg";
//pdf path
import pdfFrontend from "../assets/pdf/diploma-frontend-developer-practico.pdf";
import pdfEs6 from "../assets/pdf/diploma-ecmascript-6.pdf";
import pdfAsync from "../assets/pdf/diploma-asincronismo-js.pdf";
import pdfNpm from "../assets/pdf/diploma-npm.pdf";
import pdfReactPractico from "../assets/pdf/diploma-react-practico.pdf";
import pdfReact from "../assets/pdf/diploma-react.pdf";

function Educacion() {
  const educationData = [
    {
      icon: ingIcon,
      certLink: null,
      title: "Ing Pablo Nogues - 4-111",
      date: "2015 2021",
      institution: "secundario",
    },
    {
      icon: aluraIcon,
      certLink:
        "https://app.aluracursos.com/user/maximiliano/program/certificate",
      title: "Programa One Oracle Alura Latam ",
      date: "2022 31/1/23",
      institution: "Alura",
    },
    {
      icon: frontendIcon,
      certLink: pdfFrontend,
      title: "Practico de Frontend developer",
      date: "2023 31/1/23",
      institution: "Platzi",
    },
    {
      icon: es6Icon,
      certLink: pdfEs6,
      title: "Ecmascript ES6+",
      date: "2023 11/02/23",
      institution: "Platzi",
    },
    {
      icon: asincCurso,
      certLink: pdfAsync,
      title: "Asincronismo con javascript",
      date: "2023 26/02/23",
      institution: "Platzi",
    },
    {
      icon: npmIcon,
      certLink: pdfNpm,
      title: "NPM Gestión de paquetes y dependencias",
      date: "2023 - 6/03/23",
      institution: "Platzi",
    },
    {
      icon: frontendIcon,
      certLink: pdfReactPractico,
      title: "React practico",
      date: "2023 31/1/23",
      institution: "Platzi",
    },
    {
      icon: reactIcon,
      certLink: pdfReact,
      title: "Introduccion a React.Js",
      date: "2023 - 20/03/23",
      institution: "Platzi",
    },
  ];
  return (
    <section className="education">
      {educationData.map((item, index) => (
        <TimeLine
          title={item.title}
          dateTimeline={item.date}
          key={`time-line-items-${index}`}
          alt={item.title}
          icon={item.icon}
          institution={item.institution}
          pdfLink={item.certLink}
        />
      ))}
    </section>
  );
}

export { Educacion };
