import React, { useEffect } from "react";
import Images from "../imageIndex";
import { Trans } from "react-i18next";
import { withNamespaces } from "react-i18next";

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

const Landing = ({ t, i18n }) => {
  useEffect(() => {
    //Scroll to id by url
    let currentLocation = window.location.href;
    const hasCommentAnchor = currentLocation.includes("/#");
    if (hasCommentAnchor) {
      const anchorId = currentLocation.split("#")[1];
      const anchor = document.getElementById(anchorId);
      if (anchor) {
        anchor.scrollIntoView({ behavior: "smooth" });
      }
    }
  });

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  return (
    <body>
      <div className="bienvenido" id="bienvenidos" aria-label="Bienvenidos">
        <div className="text-container">
          <p>
            <Trans i18nKey="bienvenidosText">
              {" "}
              Bienvenido a tu
              <br />
              <b>Entrevista Técnica</b> en
              <br />
              <b className="green">Wolox</b>{" "}
            </Trans>
          </p>
        </div>
        <div className="img-container">
          <img src={Hero1} alt="Wolox twitter" />
        </div>
      </div>
      <div className="communication" aria-label="Redes Sociales">
        <div className="buttonHalf">
          <div className="twitter">
            <div className="textoPrincipal">
              <Trans i18nKey="woloxers">
                {" "}
                <b className="green">350 +</b>
                <b className="blue">Woloxers</b>{" "}
              </Trans>
            </div>
            <div className="texto">
              <img src={Twitter} alt="Twitter" />
              <p>@Wolox</p>
            </div>
            <div>
              <a href="https://twitter.com/Wolox" className="link">
                {t("Siguenos")}
              </a>
            </div>
          </div>
        </div>
        <div className="textHalf">
          <p>
            <Trans i18nKey="comunicacionText">
              Trabajamos para
              <br />
              <b className="blue">
                convertir
              </b> <b className="green">ideas</b> en
              <br />
              productos.
            </Trans>
          </p>
        </div>
      </div>
      <div className="beneficios" id="beneficios" aria-label="beneficios">
        <div className="titulo">
          <Trans i18nKey="beneficiosText">
            Entre los beneficios que ofrecemos se encuentran{" "}
            <b className="blue">;)</b>
          </Trans>
        </div>
        <div className="imagenes">
          <div className="divider">
            <div className="image">
              <img src={Hour} alt="reloj" />
              <p className="texto">
                <Trans i18nKey="beneficio1">
                  Flexibilidad
                  <br />
                  Horaria
                </Trans>
              </p>
            </div>
            <div className="image">
              <img src={HomeOffice} alt="Oficina" />
              <p className="texto">{t("beneficio2")}</p>
            </div>
            <div className="image">
              <img src={Workshop} alt="Conversacion" />
              <p className="texto">
                <Trans i18nKey="beneficio3">
                  Capacitaciones
                  <br />y Workshops
                </Trans>
              </p>
            </div>
          </div>
          <div className="divider">
            <div className="image">
              <img src={DrinkSnacks} alt="Bebidas y snaks" />
              <p className="texto">
                <Trans i18nKey="beneficio4">
                  Snacks, Frutas y
                  <br />
                  Bebidas Gratis
                </Trans>
              </p>
            </div>
            <div className="image">
              <img src={Laptop} alt="Laptop" />
              <p className="texto">
                <Trans i18nKey="beneficio5">
                  Semana
                  <br />
                  Remota
                </Trans>
              </p>
            </div>
            <div className="image">
              <img src={Brain} alt="Cerebro" />
              <p className="texto">
                <Trans i18nKey="beneficio6">
                  Trabajar
                  <br />
                  en Ultimas
                  <br />
                  Tecnologias
                </Trans>
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="gracias" aria-label="Conocer más">
        <b className="title">
          <Trans i18nKey="graciasTitle">
            Gracias por
            {" "}
            <b className="blue">completar el ejercicio</b>
          </Trans>
        </b>
        <p className="texto">{t("graciasText")}</p>
        <a href="https://www.wolox.com.ar/" className="button">
        {t("graciasButton")}
        </a>
      </div>
      <div style={{display:"flex", justifyContent:"flex-end", backgroundColor:"black", color:"white"}}>
        <p style={{paddingRight:"1rem"}}>{t("lenguaje")}</p>
        <form style={{paddingRight:"1rem"}}>
          <select onChange={(e) => changeLanguage(e.target.value)} >
            <option value="es">{t("Español")}</option>
            <option value="en">{t("Ingles")}</option>
          </select>
        </form>
      </div>
    </body>
  );
};

export default withNamespaces()(Landing);
