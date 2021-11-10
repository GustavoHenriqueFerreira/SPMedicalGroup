import { Component } from 'react';
import axios from 'axios';
import { parseJwt, usuarioAutenticado } from '../../services/auth';
import { Link } from 'react-router-dom';

import '../../Assets/css/ConsultaAdm.css';
import Cabecalho from "../../components/cabecalho/cabecalho";
import Rodape from "../../components/rodape/rodape";

import logo from '../../Assets/img/logo_spmedgroup_v1 3.png';

render(
    <body>
        <Cabecalho />

        <main>
            <section>
                <div className="container banner">
                    <h1>Cadastrar Consulta</h1>

                    <div className="box_pesquisa">
                        <div className="container espacamento_box">
                            <div>
                                <label>Clínica:</label>
                                <input className="input_pesquisa" type="text" />
                            </div>

                            <div>
                                <label>Médico:</label>
                                <input className="input_pesquisa" type="text" />
                            </div>

                            <div>
                                <label>Paciente:</label>
                                <input className="input_pesquisa" type="text" />
                            </div>

                            <div>
                                <label>Situação</label>
                                <input className="input_pesquisa" type="text" />
                            </div>

                            <div>
                                <label>Data:</label>
                                <input className="input_pesquisa" type="text" />
                            </div>

                            <div className="espacamento_btn">
                                <button className="btn_cadastrar">Cadastrar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <Rodape />
    </body>
);