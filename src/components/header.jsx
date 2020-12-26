import React, { useState, useEffect, createRef } from "react";
import Logo from "../assets/logo_full_color.svg";
import { Link, useLocation } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { updateFavourites } from "../actions/postActions";

library.add(fas);

const Header = ({ favourites }) => {
  const Links = createRef();

  const [click, setClick] = useState(false);
  const [reload, setReload] = useState();
  const [loggedIn, setLoggedIn] = useState(false)

  
  const dispatch = useDispatch();
  useEffect(() => {
    //Decide if is logged In
   const token = localStorage.getItem("token");
   //Normally would check if token is valid here
    if(token) {setLoggedIn(true)}
    //Update redux favourites prop
    dispatch(updateFavourites());
  }, [dispatch]);

  //Update the component on url change
  const location = useLocation();
  useEffect(() => {
    setReload(location.pathname);
  }, [location]);

  //hido or show nav on mobile sizes with animation
  const handleClick = () => {
    if (click) {
      Links.current.style.transform = "scaleY(0)";
      setClick(!click);
    } else {
      Links.current.style.transform = "scaleY(1)";
      setClick(!click);
    }
  };
  const closeMobileMenu = () => {
    if(click){
      setClick(false);
      Links.current.style.transform = "scaleY(0)";
    }
  };

  //different headears depending or url
  switch (reload) {
    case "/":
      return (
        <header>
          <img src={Logo} className="headerLogo" alt="Logo Wolox" onClick={() => window.location.href = "/"} />
          <ul className={click ? "links active" : "links"} ref={Links}>
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
              {!loggedIn && <Link
                to="/registro"
                className="link buttonLink"
                onClick={() => closeMobileMenu()}
              >
                Registro
              </Link>}
            </li>
          </ul>
          <div className="open-menu" onClick={() => handleClick()}>
            <FontAwesomeIcon icon="bars" color="black" />
          </div>
        </header>
      );
    case "/listas":
      return (
        <header>
          <img src={Logo} className="headerLogo" alt="Logo Wolox" onClick={() => window.location.href = "/"} />
          <div className="favCounter">
            {favourites ? <b>Favoritos: {favourites}</b> : null}
          </div>
        </header>
      );
    case "/registro":
      return (
        <header>
          <img src={Logo} className="headerLogo" alt="Logo Wolox" onClick={() => window.location.href = "/"} />
        </header>
      );
    default:
      return null;
  }
};

Header.propTypes = {
  favourites: PropTypes.number,
  updateFavourites: PropTypes.func,
};

const mapStateToProps = (state) => ({
  favourites: state.posts.favourites,
});

export default connect(mapStateToProps, null)(Header);
