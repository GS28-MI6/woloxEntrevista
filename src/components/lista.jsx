import React, { Component } from "react";
import axios from "axios";
import ElementoLista from "./elementoLista";

export default class lista extends Component {
  constructor() {
    super();
    this.state = {
      technologias: [],
      filteredTech: [],
    };
  }

  sortByProperty(property) {
    return function (a, b) {
      if (a[property] > b[property]) return 1;
      else if (a[property] < b[property]) return -1;

      return 0;
    };
  }
  componentDidMount() {
    axios
      .get("http://private-8e8921-woloxfrontendinverview.apiary-mock.com/techs")
      .then((res) => {
        res.data.sort(this.sortByProperty("tech"));
        this.setState({ technologias: res.data, filteredTech: res.data });
        console.log(this.state);
      });
  }

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

  sort(e) {
    let aux = this.state.filteredTech;
    if (e.target.value === "asc") {
      aux.sort(this.sortByProperty("tech"));
    } else {
      aux.reverse(this.sortByProperty("tech"));
    }
    this.setState({filteredTech:aux})
  }

  render() {
    let aux = this.state.filteredTech;
    console.log(aux);
    return (
      <body>
        <div className="lista">
          <div className="searchInputs">
            <form>
              <input
                type="text"
                onChange={(e) => this.inputChange(e)}
                title="search"
                placeholder="search"
              />
              <select name="sort" onChange={(e) => this.sort(e)}>
                <option value="asc">Ascendente</option>
                <option value="desc">Descendente</option>
              </select>
            </form>
          </div>
          <div className="filteredTable">
            <table>
              <tr>
                <div className="titles">
                  <th>
                    <p>Tecnologia</p>{" "}
                  </th>
                  <th>Año</th>
                  <th>Autor</th>
                  <th>Licensia</th>
                  <th>Lenguaje</th>
                  <th>Tipo</th>
                  <th>Logo</th>
                </div>
              </tr>
              {aux.map((tecnologia, index) => {
                return (
                  <ElementoLista key={index} index={index} tech={tecnologia} />
                );
              })}
            </table>
          </div>
          <div>
            <p>{aux.length} Resultados cumplen los criterios de busqueda</p>
          </div>
        </div>
      </body>
    );
  }
}
