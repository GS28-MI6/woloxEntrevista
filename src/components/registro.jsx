import axios from "axios";
import React, { Component } from "react";
import Joi from "joi-browser";
import {
  countries,
  argentina,
  chile,
  colombia,
  mexico,
  peru,
} from "../assets/jsons/countries";
//this schema contains all our validation params
import schema from "../assets/jsons/schema"
const Input = React.lazy (() => import("./input")) 


class Registro extends Component {
  constructor() {
    super();
    this.state = {
      registro: {
        name: "",
        last_name: "",
        country: "",
        province: "",
        mail: "",
        phone: "",
        password: "",
        confirmPassword: "",
        terminos: false
      },
      provincias: false,
      errors: {},
      fixed: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //handleChange for all inputs
  handleChange(e) {
    //This bit is for text fields
    const registro = { ...this.state.registro };
    if (this.state.fixed) this.setState({ fixed: false });
    registro[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ registro });
    //This bit is bor country selectbox
    if (e.currentTarget.name === "country") {
      switch (e.currentTarget.value) {
        case "Argentina":
          this.setState({ provincias: argentina });
          break;
        case "Chile":
          this.setState({ provincias: chile });
          break;
        case "Colombia":
          this.setState({ provincias: colombia });
          break;
        case "México":
          this.setState({ provincias: mexico });
          break;
        case "Perú":
          this.setState({ provincias: peru });
          break;
        default:
          return null;
      }
    } else if (e.currentTarget.name === "terminos") {
      //Checkbox input
      if (registro.terminos === "true") registro.terminos = false
      else registro.terminos = true;
      console.log(registro[e.currentTarget.name]);
      this.setState({ registro });
    }
  }

  validate() {
    //Joi errors validation
    const results = Joi.validate(this.state.registro, schema, {
      abortEarly: false,
    });
    if (!results.error) return null;
    console.log(results.error.details);
    let errors = {};
    results.error.details.map((err) => {
      return errors[err.path] = err.message;
    });
    console.log(errors);
    return errors;
  }

  handleSubmit(e) {
    e.preventDefault();
    const {
      name,
      last_name,
      country,
      province,
      mail,
      phone,
      password,
    } = this.state.registro;

    const errors = this.validate();
    //If errors populated, the return aborts the submit.
    this.setState({ errors: errors || {} });
    if (errors) return this.setState({ fixed: true });

    axios
      .post(
        "http://private-8e8921-woloxfrontendinverview.apiary-mock.com/signup",
        { name, last_name, country, province, mail, phone, password }
      )
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        window.open("/listas");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { registro, errors } = this.state;
    return (
      <body>
        <div className="registro">
          <h2>Registro</h2>
          <p>Todos los siguientes campos son obligatorios</p>
          <form className="form" onSubmit={() => this.handleSubmit()}>
            <Input
              name="name"
              value={registro.name}
              label="Nombre"
              type="text"
              error={errors.name}
              onChange={this.handleChange}
            />
            <Input
              name="last_name"
              value={registro.last_name}
              label="Apellido"
              type="text"
              error={errors.last_name}
              onChange={this.handleChange}
            />
            <div className="divInput">
              <label htmlFor="country" className="label">
                País:
              </label>
              <select
                name="country"
                className="input"
                onChange={(e) => this.handleChange(e)}
              >
                <option hidden selected>
                  Selecciona una opción
                </option>
                {countries.map((country, idx) => {
                  return <option key={idx}>{country.value}</option>;
                })}
              </select>
              {errors.country && (
                <div className="errorInput">{errors.country}</div>
              )}
            </div>
            {this.state.provincias ? (
              <div className="divInput">
                <label htmlFor="province" className="label">
                  Provincia:
                </label>
                <select
                  name="province"
                  className="input"
                  onChange={(e) => this.handleChange(e)}
                >
                  <option hidden selected>
                    Selecciona una opción
                  </option>
                  {this.state.provincias.map((provincia, idx) => {
                    return <option key={idx}>{provincia.value}</option>;
                  })}
                </select>
                {errors.province && (
                  <div className="errorInput">{errors.province}</div>
                )}
              </div>
            ) : null}
            <Input
              name="mail"
              value={registro.mail}
              label="Email"
              type="email"
              error={errors.mail}
              onChange={this.handleChange}
            />
            <Input
              name="phone"
              value={registro.phone}
              label="Telefono"
              type="tel"
              error={errors.phone}
              onChange={this.handleChange}
            />
            <Input
              name="password"
              value={registro.password}
              label="Contraseña"
              type="password"
              error={errors.password}
              onChange={this.handleChange}
            />
            <Input
              name="confirmPassword"
              value={registro.confirmPassword}
              label="Confirmar Contraseña"
              type="password"
              error={errors.confirmPassword}
              onChange={this.handleChange}
            />
            <div className="divInput">
              <div className="checkboxInput"> 
              <input
                type="checkbox"
                value={registro.terminos}
                className="checkbox"
                name="terminos"
                onChange={(e) => this.handleChange(e)}
              />
              <p>Acepto los <a href="/registro">Terminos y Condiciones</a></p>
              </div>
              <div className="errorInput">{errors.terminos}</div>
            </div>
            {this.state.fixed ? (
              <button
                disabled
                className="button"
                onClick={(e) => this.handleSubmit(e)}
              >
                Registrarse
              </button>
            ) : (
              <button className="button" onClick={(e) => this.handleSubmit(e)}>
                Registrarse
              </button>
            )}
          </form>
        </div>
      </body>
    );
  }
}

export default Registro;
