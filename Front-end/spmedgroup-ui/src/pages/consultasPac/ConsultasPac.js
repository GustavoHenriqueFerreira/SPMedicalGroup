/*import { Component } from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { parseJwt, usuarioAutenticado } from '../../services/auth'; 
import { Link } from 'react-router-dom';*/

import '../../Assets/css/ConsultaPac.css';
import Cabecalho from "../../components/cabecalho/cabecalho";
import Rodape from "../../components/rodape/rodape";

import logo from '../../Assets/img/logo_spmedgroup_v1 3.png';

export default function ConsultaPac() {
    return (
        <div>
            <Cabecalho />
            <main>
                <section>
                    <div className="banner-ConPac">
                        <h1 className="h1-ConPac">Lista de Consultas</h1>

                        <div className="container box_pesquisa-ConPac">
                            <div className="espacamento_box-ConPac">
                                <div>
                                    <label className="label-ConPac">Clínica:</label>
                                    <input className="input_pesquisa-ConPac" type="text" />
                                </div>
                                <div>
                                    <label className="label-ConPac">Médico:</label>
                                    <input className="input_pesquisa-ConPac" type="text" />
                                </div>
                            </div>

                            <div className="espacamento_box-ConPac">
                                <div>
                                    <label className="label-ConPac">Paciente:</label>
                                    <input className="input_pesquisa-ConPac" type="text" />
                                </div>
                                <div>
                                    <label className="label-ConPac">Data da Consulta:</label>
                                    <input className="input_pesquisa-ConPac" type="text" />
                                </div>
                            </div>

                            <div className="espacamento_btn-ConPac">
                                <button className="btn_listar-ConPac">Listar</button>
                            </div>
                        </div>

                        <div>
                            <button className="btn_cadastrar-ConPac">Cadastrar Consulta</button>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container posicionamento_titulo-ConPac">
                        <h2 className="titulo-ConPac">Consultas</h2>
                    </div>
                    <div className="container lista_consultas-ConPac">
                        <div className="consulta-ConPac">
                            <h2>Primeira Consulta</h2>
                            <li className="topicos-ConPac">Clínica Possarle</li>
                            <li className="topicos-ConPac">Médico: Helena Strada</li>
                            <li className="topicos-ConPac">Situação: Agendada</li>
                            <li className="topicos-ConPac">Data: 11/12/2021 15:00</li>
                            <p className="topicos-ConPac">Breve descrição sobre o evento. Lorem ipsum lorem ipsum lorem ipsum.</p>
                        </div>

                        <div className="consulta-ConPac">
                            <h2>Segunda Consulta</h2>
                            <li className="topicos-ConPac">Clínica Possarle</li>
                            <li className="topicos-ConPac">Médico: Helena Strada</li>
                            <li className="topicos-ConPac">Situação: Agendada</li>
                            <li className="topicos-ConPac">Data: 11/12/2021 15:00</li>
                            <p className="topicos-ConPac">Breve descrição sobre o evento. Lorem ipsum lorem ipsum lorem ipsum.</p>
                        </div>

                        <div className="consulta-ConPac">
                            <h2>Terceira Consulta</h2>
                            <li className="topicos-ConPac">Clínica Possarle</li>
                            <li className="topicos-ConPac">Médico: Helena Strada</li>
                            <li className="topicos-ConPac">Situação: Agendada</li>
                            <li className="topicos-ConPac">Data: 11/12/2021 15:00</li>
                            <p className="topicos-ConPac">Breve descrição sobre o evento. Lorem ipsum lorem ipsum lorem ipsum.</p>
                        </div>
                    </div>
                </section>
            </main>
            <Rodape />
        </div>
    );
}