import React, { useState, createRef } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

library.add(fas);

const ElementoLista = (props) => {
  const {
    tech,
    year,
    author,
    license,
    favourite,
    language,
    type,
    logo,
  } = props.tech;

  const [click, setClick] = useState(false);

  const Data = createRef();
  //used to change the color of the row
  let pair;
  if (props.index % 2 === 0) pair = true;
  else pair = false;

  //On mobile display more or less info
  //Data is a ref to a hidden element
  const handleClick = () => {
    if (click) {
      Data.current.classList.remove("active");
      setClick(!click);
    } else {
      Data.current.classList.add("active");
      setClick(!click);
    }
  };

  return (
    <div>
      <div
        className={pair ? "tableElement" : "tableElement grey"}
        onClick={() => handleClick()}
      >
        <div className="tableElem">{tech}</div>
        <div className="hider">
          <div className="tableElem">{year}</div>
          <div className="tableElem">{author}</div>
          <div className="tableElem">{license}</div>
          <div className="tableElem">{language}</div>
        </div>
        <div className="tableElem">
          {favourite ? (
            <FontAwesomeIcon
              icon="heart"
              color="red"
              onClick={() => props.setFavourite(tech)}
            />
          ) : (
            <FontAwesomeIcon
              icon="heart"
              color="grey"
              onClick={() => props.setFavourite(tech)}
            />
          )}
        </div>
        <div className="tableElem">{type}</div>
        <div className="tableElem">
          <img src={logo} className="image" alt={"Logo" + tech} />
        </div>
      </div>
      <div className="hidedData" ref={Data} onClick={() => handleClick()}>
        <p>Año: {year}</p>
        <p>Autor: {author}</p>
        <p>Licensia: {license}</p>
        <p>Lenguaje: {language}</p>
      </div>
    </div>
  );
};

ElementoLista.propTypes = {
  tech: PropTypes.string,
  year: PropTypes.string,
  author: PropTypes.string,
  license: PropTypes.string,
  language: PropTypes.string,
  type: PropTypes.string,
  logo: PropTypes.string,
  index: PropTypes.number,
};

const mapStateToProps = (state) => ({
  favourites: state.posts.favourites,
});

export default connect(mapStateToProps, null)(ElementoLista);
