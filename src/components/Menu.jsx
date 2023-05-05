//reacts
import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
//icons
import { GiHamburgerMenu } from "react-icons/gi";
//styles
import "../scss/components/Menu.scss";

//routes
import { routes } from "../RoutesPage";
function Menu() {
  const hamburgerMenuRef = useRef(null);

  const [toggleMenu, setToggleMenu] = useState(false);
  const handleMenu = () => {
    setToggleMenu(!toggleMenu);
  };
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        hamburgerMenuRef.current &&
        !hamburgerMenuRef.current.contains(event.target)
      ) {
        setToggleMenu(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [hamburgerMenuRef]);

  return (
    <header>
      <nav className="nav" ref={hamburgerMenuRef}>
        <GiHamburgerMenu
          className={`nav__hamburger ${toggleMenu ? "active" : ""}`}
          onClick={handleMenu}
        />
        <h1 className="logo">{"</ Maxi >"}</h1>
        <ul className={`nav__container-list ${toggleMenu ? "active" : ""}`}>
          {routes.map((rut, index) => (
            <li key={`link-item-${index}`} className="nav__link-item">
              <NavLink to={rut.to}>{rut.Text}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export { Menu };
