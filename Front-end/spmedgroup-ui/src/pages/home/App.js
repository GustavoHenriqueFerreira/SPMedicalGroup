import { Component } from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
/* import { parseJwt, usuarioAutenticado } from '../../services/auth'; */
import { Link } from 'react-router-dom';

import '../../Assets/css/Home.css';

import Cabecalho from "../../components/cabecalho/cabecalho";
import Rodape from "../../components/rodape/rodape";

import logo from '../../Assets/img/logo_spmedgroup_v1 3.png';

function App() {
    return (
        <body>

            <Cabecalho />

            <main>
                <div className="banner">
                    <div className="nome_slogan">
                        <h1>SP Medical Group</h1>
                        <p className="slogan">Venha agendar sua consulta na melhor clínica do Brasil!!!</p>
                    </div>

                    <div className="botoes">
                        <div className="btn_banner">
                            <a href="">Ver Consultas</a>
                        </div>

                        <div className="btn_banner">
                            <a href="">Agendar Consulta</a>
                        </div>

                        <div className="btn_banner">
                            <a href="">Fazer Cadastro</a>
                        </div>

                        <div className="btn_banner">
                            <a href="">Ver Clínicas</a>
                        </div>
                    </div>
                </div>

                <div className="quem_somos">
                    <div className="container posicionamento">
                        <h2>QUEM SOMOS?</h2>
                        <p className="descricao_qmsomos">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                            and
                            scrambled it to make a type specimen book.</p>
                    </div>
                </div>
            </main>

            <Rodape />
        </body>
    );
}

export default App;
