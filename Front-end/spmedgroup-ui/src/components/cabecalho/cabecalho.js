import React from 'react'
import { Link } from 'react-router-dom';

import '../../Assets/css/Header-Cabecalho.css';

import logo from '../../Assets/img/logo_spmedgroup_v1 3.png';

export default function Cabecalho() {

    return (
        <header>
            <div className="container cabecalho_rodape">
                <div>
                    <Link to="/"> <img className="logo" src={logo} alt="logo" /> </Link>
                </div>
                <nav className="menu_header">
                    <a href="">Consultas</a>
                    <a href="">Clínicas</a>
                    <a href="">Especialidades</a>
                    <a href="">Médicos</a>
                    <a href="">Login</a>
                </nav>
            </div>
        </header>
    )
}