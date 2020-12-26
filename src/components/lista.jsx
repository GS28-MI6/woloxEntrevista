import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { updateFavourites } from "../actions/postActions";
const ElementoLista = React.lazy (() => import("./elementoLista")) 


library.add(fas);

class Lista extends Component {
  constructor() {
    super();
    this.state = {
      technologias: [],
      filteredTech: [],
      sort: "asc",
      click: false,
    };
    this.setFavourite = this.setFavourite.bind(this);
  }

  //sorting function
  sortByProperty(property) {
    return function (a, b) {
      if (a[property] > b[property]) return 1;
      else if (a[property] < b[property]) return -1;
      return 0;
    };
  }

  componentDidMount() {
    //Fetch data, sort it and add favourite prop to each element
    axios
      .get("http://private-8e8921-woloxfrontendinverview.apiary-mock.com/techs")
      .then((res) => {
        res.data.sort(this.sortByProperty("tech"));
        let auxStorage = JSON.parse(localStorage.getItem("favourites") || null);
        //If favourites exists and is populated
        if(auxStorage){
          let auxiliar = res.data.map((tecnologia) => {
            if (auxStorage.includes(tecnologia.tech))
              tecnologia["favourite"] = true;
            else tecnologia["favourite"] = false;
            return tecnologia;
          });
          //store it 2 times to keep the original and have 1 left to tinker 
          this.setState({ technologias: auxiliar, filteredTech: auxiliar });
        } else {
          this.setState({ technologias: res.data, filteredTech: res.data });
        }
      });
  }

  setFavourite(nombre) {
    //change favourites in both jsons
    let auxiliar = this.state.filteredTech.map((tecnologia) => {
      if (tecnologia.tech === nombre){
          tecnologia.favourite = !tecnologia.favourite;
      }
      return tecnologia;
    });
    this.setState({ technologias: auxiliar, filteredTech: auxiliar });
    //get all favourites from localstorage
    let auxStorage = JSON.parse(localStorage.getItem("favourites") || null);
    //Update favourites in localstorage
    if (auxStorage) {
      if (auxStorage.includes(nombre)) {
        //favourite already existed so remove
        const index = auxStorage.indexOf(nombre);
        if (index > -1) {
          auxStorage.splice(index, 1);
        }
        localStorage.setItem("favourites", JSON.stringify(auxStorage));
        this.props.updateFavourites();
      } else {
        //favourite didn't exist so add
        auxStorage.push(nombre);
        localStorage.setItem("favourites", JSON.stringify(auxStorage));
        this.props.updateFavourites();
      }
    } else {
      //favourites didn´t exist in localstorage so create it
      const name = [nombre];
      localStorage.setItem("favourites", JSON.stringify(name));
      this.props.updateFavourites();
    }
  }

  //filter whenever anything is typed in searchbar
  inputChange(e) {
    let aux = this.state.technologias;
    aux = aux.filter((tecnologia) => {
      return (
        tecnologia.tech.toLowerCase().indexOf(e.target.value.toLowerCase()) >
          -1 ||
        tecnologia.type.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1
      );
    });
    this.setState({ filteredTech: aux });
  }

  //Switch between ascending or descending sort
  sort(e) {
    let aux = this.state.filteredTech;
    if (e === "asc") {
      aux.sort(this.sortByProperty("tech"));
      this.setState({ sort: "asc" });
    } else {
      aux.reverse(this.sortByProperty("tech"));
      this.setState({ sort: "desc" });
    }
    this.setState({ filteredTech: aux });
  }
 

  render() {
    return (
      <body>
        <div className="lista">
            <form className="searchInputs" data-testid="search" aria-label="Barra de busqueda">
              <label className="inputLabel">Filtrar</label>
              <input
                type="text"
                className="inputSearch"
                onChange={(e) => this.inputChange(e)}
                title="search"
                placeholder="Buscar..."
              />
            </form>

          <div className="filteredTable" aria-label="Tabla de tecnologias">
            <div>
              <div className="row">
                <div className="titles" data-testid="titles">
                  <div className="tableElem">
                    <p>Tecnologia</p>{" "}
                    {this.state.sort === "asc" ? (
                      <FontAwesomeIcon
                        icon="arrow-down"
                        color="grey"
                        style={{ marginLeft: "5px" }}
                        onClick={() => this.sort("desc")}
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon="arrow-up"
                        color="grey"
                        style={{ marginLeft: "5px" }}
                        onClick={() => this.sort("asc")}
                      />
                    )}
                  </div>
                  <div className="hider">
                    <div className="tableElem">Año</div>
                    <div className="tableElem">Autor</div>
                    <div className="tableElem">Licensia</div>
                    <div className="tableElem">Lenguaje</div>
                  </div>
                  <div className="tableElem">Favoritos</div>
                  <div className="tableElem">Tipo</div>
                  <div className="tableElem">Logo</div>
                </div>
              </div>
              {this.state.filteredTech.map((tecnologia, index) => {
                return (
                  <div className="row" data-testid="techData">
                    <ElementoLista
                      key={index}
                      index={index}
                      tech={tecnologia}
                      setFavourite={this.setFavourite}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <p>{this.state.filteredTech.length} Resultados cumplen los criterios de busqueda</p>
          </div>
        </div>
      </body>
    );
  }
}

Lista.propTypes = {
    updateFavourites: PropTypes.func,
}

export default connect(null, { updateFavourites })(Lista);
