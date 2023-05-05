//react  y react-router
import React from "react";
import { NavLink } from "react-router-dom";
//styles
import "../scss/components/footer.scss";
//routes 
import { routes } from "../RoutesPage";
//react icons
import {FaGithubSquare,FaLinkedin} from "react-icons/fa"
function Footer() {
  return (
    <footer className="footer">
      <ul className="menu">
        {routes.map((rut, index) => (
          <li key={`link-footer-${index}`} className="menu__link ">
            <NavLink to={rut.to}>{rut.Text}</NavLink>
          </li>
        ))}
      </ul>
      <ul className="social-medias">
          <li><a href="https://github.com/zyperr"target="_blank"><FaGithubSquare title="github"/></a></li>
          <li><a href="https://www.linkedin.com/in/maximiliano-vera-85571a248/" target="_blank"><FaLinkedin title="linkedin"/></a></li>
      </ul>
      <p>&copy;2023 Maximiliano Vera | All Rights Reserved</p>
    </footer>
  );
}

export { Footer };
