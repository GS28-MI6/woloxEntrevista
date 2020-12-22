import React, { Component } from 'react'
import Logo from "../assets/logo_full_color.svg";
import { Link } from "react-router-dom"

export default class header extends Component {
    render() {
        return (
            <header>
                <img src={Logo} className="headerLogo" />
                <div className="links">
                    <Link to="/#bienvenidos" className="link normalLink">Inicio</Link>
                    <Link to="/#beneficios" className="link normalLink">Beneficios</Link>
                    <Link to="/register" className="link buttonLink">Registro</Link>
                </div>
            </header>
        )
    }
}
