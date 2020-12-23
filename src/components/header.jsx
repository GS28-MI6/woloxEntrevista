import React, { useState } from "react";
import Logo from "../assets/logo_full_color.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

const Header = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    let menuOptions = document.getElementById("links");
    if (click) {
      menuOptions.style.transform = "scaleY(0)";
      setClick(!click);
    } else {
      menuOptions.style.transform = "scaleY(1)";
      setClick(!click);
    }
  };
  const closeMobileMenu = () => {
    let menuOptions = document.getElementById("links");
    setClick(false);
    menuOptions.style.transform = "scaleY(0)";
  };

  return (
    <header>
      <img src={Logo} className="headerLogo"  />
      <ul className={click ? "links active" : "links" } id="links">
        <li>
          <Link
            to="/#bienvenidos"
            className="link normalLink"
            onClick={() => closeMobileMenu()}
          >
            Inicio
          </Link>
        </li>
        <li>
          <Link
            to="/#beneficios"
            className="link normalLink"
            onClick={() => closeMobileMenu()}
          >
            Beneficios
          </Link>
        </li>
        <li>
          <Link
            to="/register"
            className="link buttonLink"
            onClick={() => closeMobileMenu()}
          >
            Registro
          </Link>
        </li>
      </ul>
      <div className="open-menu" onClick={() => handleClick()}>
        <FontAwesomeIcon icon="bars" color="black" />
      </div>
    </header>
  );
};

export default Header;
