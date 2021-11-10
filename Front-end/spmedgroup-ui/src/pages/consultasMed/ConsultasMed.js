import { Component } from 'react';
import axios from 'axios';
import { parseJwt, usuarioAutenticado } from '../../services/auth';
import { Link } from 'react-router-dom';

import '../../Assets/css/ConsultaMed.css';
import Cabecalho from "../../components/cabecalho/cabecalho";
import Rodape from "../../components/rodape/rodape";

import logo from '../../Assets/img/logo_spmedgroup_v1 3.png';

render(
    <body>
        <Cabecalho />

        <main>
            <section>
                <div className="banner">
                    <h1>Lista de Consultas</h1>

                    <div className="container box_pesquisa">
                        <div className="espacamento_box">
                            <div>
                                <label>Clínica:</label>
                                <input className="input_pesquisa" type="text" />
                            </div>
                            <div>
                                <label>Médico:</label>
                                <input className="input_pesquisa" type="text" />
                            </div>
                        </div>

                        <div className="espacamento_box">
                            <div>
                                <label>Paciente:</label>
                                <input className="input_pesquisa" type="text" />
                            </div>
                            <div>
                                <label>Data da Consulta:</label>
                                <input className="input_pesquisa" type="text" />
                            </div>
                        </div>

                        <div className="espacamento_btn">
                            <button className="btn_listar">Listar</button>
                        </div>
                    </div>

                    <div>
                        <button className="btn_descricao">Adicionar Descrição</button>
                    </div>
                </div>
            </section>

            <section>
                <div className="container posicionamento_titulo">
                    <h2 className="titulo">Consultas</h2>
                </div>
                <div className="container lista_consultas">
                    <div className="consulta">
                        <h2>Primeira Consulta</h2>
                        <li className="topicos">Clínica Possarle</li>
                        <li className="topicos">Médico: Helena Strada</li>
                        <li className="topicos">Situação: Agendada</li>
                        <li className="topicos">Data: 11/12/2021 15:00</li>
                        <p className="topicos">Breve descrição sobre o evento. Lorem ipsum lorem ipsum lorem ipsum.</p>
                    </div>

                    <div className="consulta">
                        <h2>Segunda Consulta</h2>
                        <li className="topicos">Clínica Possarle</li>
                        <li className="topicos">Médico: Helena Strada</li>
                        <li className="topicos">Situação: Agendada</li>
                        <li className="topicos">Data: 11/12/2021 15:00</li>
                        <p className="topicos">Breve descrição sobre o evento. Lorem ipsum lorem ipsum lorem ipsum.</p>
                    </div>

                    <div className="consulta">
                        <h2>Terceira Consulta</h2>
                        <li className="topicos">Clínica Possarle</li>
                        <li className="topicos">Médico: Helena Strada</li>
                        <li className="topicos">Situação: Agendada</li>
                        <li className="topicos">Data: 11/12/2021 15:00</li>
                        <p className="topicos">Breve descrição sobre o evento. Lorem ipsum lorem ipsum lorem ipsum.</p>
                    </div>
                </div>
            </section>
        </main>

        <Rodape />
    </body>
);