/*import { Component } from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { parseJwt, usuarioAutenticado } from '../../services/auth'; 
import { Link } from 'react-router-dom';*/

import '../../Assets/css/ConsultaAdm.css';
import Cabecalho from "../../components/cabecalho/cabecalho";
import Rodape from "../../components/rodape/rodape";

import logo from '../../Assets/img/logo_spmedgroup_v1 3.png';
import { render } from '@testing-library/react';

export default function ConsultasAdm() {
    return (
        <div>
            <Cabecalho />
            <main>
                <section>
                    <div className="banner-ConAdm">
                        <h1 className="h1-ConAdm">Lista de Consultas</h1>

                        <div className="container box_pesquisa-ConAdm">
                            <div className="espacamento_box-ConAdm">
                                <div>
                                    <label className="label-ConAdm">Clínica:</label>
                                    <input className="input_pesquisa-ConAdm" type="text" />
                                </div>
                                <div>
                                    <label className="label-ConAdm">Médico:</label>
                                    <input className="input_pesquisa-ConAdm" type="text" />
                                </div>
                            </div>

                            <div className="espacamento_box-ConAdm">
                                <div>
                                    <label className="label-ConAdm">Paciente:</label>
                                    <input className="input_pesquisa-ConAdm" type="text" />
                                </div>
                                <div>
                                    <label className="label-ConAdm">Data da Consulta:</label>
                                    <input className="input_pesquisa-ConAdm" type="text" />
                                </div>
                            </div>

                            <div className="espacamento_btn-ConAdm">
                                <button className="btn_listar-ConAdm">Listar</button>
                            </div>
                        </div>

                        <div>
                            <button className="btn_cadastrar-ConAdm">Cadastrar Consulta</button>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container posicionamento_titulo-ConAdm">
                        <h2 className="titulo-ConAdm">Consultas</h2>
                    </div>
                    <div className="container lista_consultas-ConAdm">
                        <div className="consulta-ConAdm">
                            <h2>Primeira Consulta</h2>
                            <li className="topicos-ConAdm">Clínica Possarle</li>
                            <li className="topicos-ConAdm">Médico: Helena Strada</li>
                            <li className="topicos-ConAdm">Situação: Agendada</li>
                            <li className="topicos-ConAdm">Data: 11/12/2021 15:00</li>
                            <p className="topicos-ConAdm">Breve descrição sobre o evento. Lorem ipsum lorem ipsum lorem ipsum.</p>
                        </div>

                        <div className="consulta-ConAdm">
                            <h2>Segunda Consulta</h2>
                            <li className="topicos-ConAdm">Clínica Possarle</li>
                            <li className="topicos-ConAdm">Médico: Helena Strada</li>
                            <li className="topicos-ConAdm">Situação: Agendada</li>
                            <li className="topicos-ConAdm">Data: 11/12/2021 15:00</li>
                            <p className="topicos-ConAdm">Breve descrição sobre o evento. Lorem ipsum lorem ipsum lorem ipsum.</p>
                        </div>

                        <div className="consulta-ConAdm">
                            <h2>Terceira Consulta</h2>
                            <li className="topicos-ConAdm">Clínica Possarle</li>
                            <li className="topicos-ConAdm">Médico: Helena Strada</li>
                            <li className="topicos-ConAdm">Situação: Agendada</li>
                            <li className="topicos-ConAdm">Data: 11/12/2021 15:00</li>
                            <p className="topicos-ConAdm">Breve descrição sobre o evento. Lorem ipsum lorem ipsum lorem ipsum.</p>
                        </div>
                    </div>
                </section>
            </main>
            <Rodape />
        </div>
    );
}