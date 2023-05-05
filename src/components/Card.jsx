import React,{useEffect} from "react";

import { AiFillGithub } from "react-icons/ai";
import { BiLink } from "react-icons/bi";

//style
import "../scss/components/Card.scss";

//react icon
import { FaHtml5 } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { FaSass } from "react-icons/fa";

//aos import
import Aos from "aos";
import "aos/dist/aos.css";


const projects = [
  {
    name: "AnimeLand",
    image:
      "https://lh3.googleusercontent.com/pw/AJFCJaWJ4pZIQQOVVhfzwXUV7luS1G0PbUMJkp5aHt2oJqRWaBsdPGwajastPvs3llorvyrY-3cfqZ9ZkI866tk6wI_8JWTLTCkZQwiG8WfzD2WOFwbQD5wABBHP1wFD8RrViDvthNw1SvRJ5QQt69ifPTI=w1317-h619-s-no",
    description:
      "Esta pagina web contiene una pagina de inicio la cual es una landing page y un directorio en la cual el usuario puede buscar animes y visualizar el puntaje que la comunidad a establecido a dicho anime.",
    repository: "https://github.com/zyperr/animeLand",
    demo: "https://zyperr.github.io/animeLand/",
    technologies: [
      <SiJavascript title="Javascript" />,
      <FaHtml5 title="Html" />,
      <SiCss3 title="css" style={{ color: "#1369A0" }} />,
    ],
  },
  {
    name: "Space turism",
    image:
      "https://lh3.googleusercontent.com/pw/AJFCJaWZe5coiIp1dzwvP0MjNs4-PF9AXKb9SMM1zzBdaagNz1u1M5fBgQN-i2QglhkegctEnULJR6gV1LFTyOjswINAaklow6kVYKhm1BZPe8rrGkVQRFOhhBO5CNlTSXgxPhT5pXbsFk03CUc4Z-gg057w=w1316-h668-s-no",
    description:
      `Esta pagina web es un challenge de la pagina frontendmentor y la he realizado en conjunto con mi hermano.`,
    repository: "https://github.com/Irumau/SpaceTurism",
    demo: "https://spaceturismweb.netlify.app",
    technologies: [
      <SiJavascript title="Javascript" />,
      <FaHtml5 title="Html" />,
      <SiCss3 title="css" style={{ color: "#1369A0" }} />,
    ],
  },
  {
    name: "Ahorcado",
    image:
      "https://lh3.googleusercontent.com/pw/AJFCJaV50o8bQaHGR5-94PLPB5OG1KQPiIT4GPCM3V0W8sRWNX5XZZoJUQ9-vh3NNTmEYjqadTn2Ftpuczx3aOIllOyYxHvNvNcN03sFZgdWbRUr-hyAlYNXHDS2H8LJXb9IQk0xRSV8N43VEgre_B3ZgTk=w1297-h668-s-no",
    description:
      "Juego desarrollado durante el challenge 2 de el programa One de Alura Latam.",
    repository: "https://github.com/zyperr/HangmanGame",
    demo: "https://hagmangame.netlify.app",
    technologies: [
      <SiJavascript title="Javascript" />,
      <FaHtml5 title="Html" />,
      <FaSass title="Sass" style={{ color: "#CF649A" }}/>,
    ],
  },
  {
    name: "Calculadora",
    image:
      "https://lh3.googleusercontent.com/pw/AJFCJaW4NxEp6snd7ocDzQodwsMEUUUX5r6NKQ-6p9674uRauKtA0Y5XHnerV__WDQywJiEcIxULQKQAeneIwJiOnv2ZjeisL0wJXlpP3BAyqT0uyT50E8WKpdfRVSWWBOjamAQmSs0Bx95PIRf9b48UOEQ=w1299-h668-s-no",
    description:
      "Una app de calculadora que permite al usuario hacer operaciones aritméticas sencillas.",
    repository: "https://github.com/zyperr/SimpleCalculator",
    demo: "https://zyperr.github.io/SimpleCalculator/",
    technologies: [
      <SiJavascript title="Javascript" />,
      <FaHtml5 title="Html" />,
      <FaSass title="Sass" style={{ color: "#CF649A" }} />,
    ],
  },
  {
    name: "To-Do app",
    image:
      "https://lh3.googleusercontent.com/pw/AJFCJaWcoPCh8FfliMRxguyIXLV_qjDCQY-dhToC3xB1O3zy9VninMwGyJ1fmAydd0fIowIpwcVuRcwSOe4CzxWsjdXJHurCszBCLmblCCJ-Ditw7bJDK79AidxQonm-1zGTcT-jcgHxbIaPo2kwBO0rq_8=w1238-h639-s-no",
    description:
      "Permite al usuario crear y administrar una lista de tareas pendientes,permitiendo al usuario ingresar la fecha en la que tiene que realizar dichas tareas,borrarlas o marcar como hechas.",
    repository: "https://github.com/zyperr/todoApp.github.io",
    demo: "https://zyperr.github.io/todoApp.github.io/",
    technologies: [
      <SiJavascript title="Javascript" />,
      <FaHtml5 title="Html" />,
      <SiCss3 title="css" style={{ color: "#1369A0" }} />,
    ],
  },
  {
    name: "Encriptador",
    image:
      "https://lh3.googleusercontent.com/pw/AJFCJaVxXrc2akWoYVReGQSwYu0smJYaEJGkWu6d1zc1dyHFgc2-8JgOnCxd142YIdy5K9GpbDxay5wK0fD18xKtfQpWACiosrnQEMlUKbGHfok0MKIIAdFkTa1NF__LhF7FXFxyvOBsnV2qgrec8rYQ1Pc=w1286-h668-s-no",
    description:
      "Este encriptador se realizo durante el challenge 1 del programa One de Alura Latam. El usuario puede ingresar una palabra o texto y se encripta cambiando algunas letras por otras",
    repository: "https://zyperr.github.io/zyperr.github.io./",
    demo: "https://zyperr.github.io/zyperr.github.io./",
    technologies: [
      <SiJavascript title="Javascript" />,
      <FaHtml5 title="Html" />,
      <SiCss3 title="css" style={{ color: "#1369A0" }} />,
    ],
  },
  {
    name: "Rick and Morty web",
    image:
      "https://lh3.googleusercontent.com/pw/AJFCJaWFmHNYQRE2dBwgd6ESyUFY11jwyBoMF6g-4TYjIQQoZaeUzrJNA__TaxhxcmE0EkOf1WlYdWD2fWqTqfDzMVLxxsGnkmSfxcmnfh8lqzAGXTehfO1lYs9FZLjEt0-F5wakJ3gfb1fJ56FQyrjvlyM=w1316-h668-s-no",
    description:
      "Pagina web de Rick and Morty utilizando su API, el usuario puede buscar personajes de la serie utilizando 2 filtros de búsqueda o simplemente por su nombre",
    repository: "https://github.com/zyperr/rick-and-morty-web",
    demo: "https://rick-and-morty-web-by-zyperr.netlify.app",
    technologies: [
      <SiJavascript title="Javascript" />,
      <FaHtml5 title="Html" />,
      <SiCss3 title="css" style={{ color: "#1369A0" }} />,
    ],
  },
  {
    name: "Simple Editor",
    image:
      "https://lh3.googleusercontent.com/pw/AJFCJaWBL9vxc_Le4Tc4Hyk7VOhsF8y_ieSGKRbqI5e11oPZPAZjLlvJ1qe4nvEwZCNdcSSvH8sz_CKerLRapoHGEnQ7q9lPYa6XBX45ETa-rJ0cMyChtTpwaZQ39AhooL725vo3dbpnU_TF137-PUgS6xQ=w1289-h668-s-no",
    description:
      "Pagina web para editar imágenes .El usuario puede agregar mas brillo,saturación,invertir colores y demás opciones en este editor de imágenes.",
    repository: "https://github.com/zyperr/image-editor",
    demo: "https://zyperr.github.io/image-editor/",
    technologies: [
      <SiJavascript title="Javascript" />,
      <FaHtml5 title="Html" />,
      <SiCss3 title="css" style={{ color: "#1369A0" }} />,
    ],
  },
];

function Card() {
  useEffect(() => {
    Aos.init({duration:1000})
  },[])
  return (
    <>
      {projects.map((project, index) => (
        <div className="card" key={`project-card-${index}`} data-aos="fade-right">
          <div className="card-content" data-aos="flip-right">
            <figure>
              <img src={project.image} alt="Proyecto" className="card__image" loading="eager"/>
            </figure>
            <h2>
              {project.name}
              <span className="links">
                <a href={project.repository} target="_blank">
                  <AiFillGithub />
                </a>
                <a href={project.demo} target="_blank">
                  <BiLink />
                </a>
              </span>
            </h2>
            <p>{project.description}</p>
            <ul className="technologies">
              {project.technologies.map((tech, index) => (
                <li className="technologies-item" key={`tech-li-${index}`}>
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
}

export { Card };
