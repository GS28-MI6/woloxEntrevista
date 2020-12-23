import React, { Component } from "react";
import Images from "../imageIndex";

const {
  Laptop,
  Brain,
  DrinkSnacks,
  HomeOffice,
  Hour,
  Workshop,
  Hero1,
  Twitter,
} = Images;

class landing extends Component {

  componentDidMount(){
    let currentLocation = window.location.href;
    const hasCommentAnchor = currentLocation.includes("/#")
    console.log(currentLocation)
    if (hasCommentAnchor) {
      const anchorId = currentLocation.split('#')[1];
      const anchor = document.getElementById(anchorId);
      if(anchor){
          anchor.scrollIntoView({ behavior: "smooth" });
      }
    }
  }
  componentDidUpdate(){
    let currentLocation = window.location.href;
    const hasCommentAnchor = currentLocation.includes("/#")
    console.log(currentLocation)
    if (hasCommentAnchor) {
      const anchorId = currentLocation.split('#')[1];
      const anchor = document.getElementById(anchorId);
      if(anchor){
          anchor.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  render() {
    return (
      <body>
        <div className="bienvenido" id="bienvenidos">
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
                <a href="https://twitter.com/Wolox" className="link">Siguenos</a>
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
        <div className="beneficios" id="beneficios">
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
          <a href="https://www.wolox.com.ar/" className="button"> Conocer más</a>
        </div>
      </body>
    );
  }
}

export default landing;
