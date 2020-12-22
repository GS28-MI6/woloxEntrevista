import React, { Component } from "react";
import Images from "../imageIndex";
import { Link } from "react-router-dom";
const {
  Laptop,
  Brain,
  Bullet1,
  Bullet2,
  Bullet3,
  DrinkSnacks,
  HomeOffice,
  Hour,
  Technologys,
  WoloxFooter,
  Workshop,
  Woloxer,
  Woloxer2,
  Woloxer3,
  Logo,
  Hero1,
  Hero2,
  Hero3,
  Twitter,
} = Images;

class landing extends Component {
  render() {
    return (
      <body>
        <div className="bienvenido">
          <div className="text-container">
            <p>
              {" "}
              Bienvenido a tu <br /> <b>Entrevista Técnica</b> en <br />
              <b className="green">Wolox</b>{" "}
            </p>
          </div>
          <div className="img-container">
            <img src={Hero1} />
          </div>
        </div>
        <div className="communication">
          <div className="buttonHalf">
            <div className="twitter">
              <div className="textoPrincipal">
                {" "}
                <b className="green">
                  350 +
                </b> <b className="blue">Woloxers</b>{" "}
              </div>
              <div className="texto">
                <img src={Twitter} />
                <p>@Wolox</p>
              </div>
              <div>
                <Link className="link">Siguenos</Link>
              </div>
            </div>
          </div>
          <div className="textHalf">
            <p>
              Trabajamos para <br /> <b className="blue">convertir</b>{" "}
              <b className="green">ideas</b> en <br /> productos.
            </p>
          </div>
        </div>
        <div className="beneficios">
          <div className="titulo">
            Entre los beneficios que ofrecemos se encuentran{" "}
            <b className="blue">;)</b>
          </div>
          <div className="imagenes">
            <div className="divider">
              <div className="image">
                <img src={Hour} />
                <p className="texto">
                  Flexibilidad <br /> Horaria
                </p>
              </div>
              <div className="image">
                <img src={HomeOffice} />
                <p className="texto">Home Office</p>
              </div>
              <div className="image">
                <img src={Workshop} />
                <p className="texto">
                  Capacitaciones <br /> y Workshops
                </p>
              </div>
            </div>
            <div className="divider">
              <div className="image">
                <img src={DrinkSnacks} />
                <p className="texto">
                  {" "}
                  Snacks, Frutas <br /> y Bebidas Gratis
                </p>
              </div>
              <div className="image">
                <img src={Laptop} />
                <p className="texto">
                  Semana <br /> Remota
                </p>
              </div>
              <div className="image">
                <img src={Brain} />
                <p className="texto">
                  Trabajar <br /> en Ultimas <br /> Teconologias
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="gracias">
          <b className="title">
            Gracias por <b className="blue">completar el ejercicio</b>
          </b>
          <p className="texto">Te invitamos a ver mas información</p>
          <Link className="button"> Conocer más</Link>
        </div>
      </body>
    );
  }
}

export default landing;
