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
                    <div className="texto">350 + Woloxers </div>
                    <div className="texto">
                    <img src={Twitter} />
                    <p>@Wolox</p>
                    </div>
                    <div className="texto">
                    <Link className="Link"></Link>
                    </div>
                </div>
            </div>
            <div className="textHalf">

            </div>
        </div>
      </body>
    );
  }
}

export default landing;
