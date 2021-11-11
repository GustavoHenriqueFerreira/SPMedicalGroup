/*import { Component } from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { parseJwt, usuarioAutenticado } from '../../services/auth'; 
import { Link } from 'react-router-dom';*/

import '../../Assets/css/ConsultaMed.css';
import Cabecalho from "../../components/cabecalho/cabecalho";
import Rodape from "../../components/rodape/rodape";

import logo from '../../Assets/img/logo_spmedgroup_v1 3.png';

export default function ConsultasMed() {
    return (
        <div>
            <Cabecalho />
            <main>
                <section>
                    <div className="banner-ConMed">
                        <h1 className="h1-ConMed">Lista de Consultas</h1>

                        <div className="container box_pesquisa-ConMed">
                            <div className="espacamento_box-ConMed">
                                <div>
                                    <label className="label-ConMed">Clínica:</label>
                                    <input className="input_pesquisa-ConMed" type="text" />
                                </div>
                                <div>
                                    <label className="label-ConMed">Médico:</label>
                                    <input className="input_pesquisa-ConMed" type="text" />
                                </div>
                            </div>

                            <div className="espacamento_box-ConMed">
                                <div>
                                    <label className="label-ConMed">Paciente:</label>
                                    <input className="input_pesquisa-ConMed" type="text" />
                                </div>
                                <div>
                                    <label className="label-ConMed">Data da Consulta:</label>
                                    <input className="input_pesquisa-ConMed" type="text" />
                                </div>
                            </div>

                            <div className="espacamento_btn-ConMed">
                                <button className="btn_listar-ConMed">Listar</button>
                            </div>
                        </div>

                        <div>
                            <button className="btn_cadastrar-ConMed">Cadastrar Consulta</button>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container posicionamento_titulo-ConMed">
                        <h2 className="titulo-ConMed">Consultas</h2>
                    </div>
                    <div className="container lista_consultas-ConMed">
                        <div className="consulta-ConMed">
                            <h2>Primeira Consulta</h2>
                            <li className="topicos-ConMed">Clínica Possarle</li>
                            <li className="topicos-ConMed">Médico: Helena Strada</li>
                            <li className="topicos-ConMed">Situação: Agendada</li>
                            <li className="topicos-ConMed">Data: 11/12/2021 15:00</li>
                            <p className="topicos-ConMed">Breve descrição sobre o evento. Lorem ipsum lorem ipsum lorem ipsum.</p>
                        </div>

                        <div className="consulta-ConMed">
                            <h2>Segunda Consulta</h2>
                            <li className="topicos-ConMed">Clínica Possarle</li>
                            <li className="topicos-ConMed">Médico: Helena Strada</li>
                            <li className="topicos-ConMed">Situação: Agendada</li>
                            <li className="topicos-ConMed">Data: 11/12/2021 15:00</li>
                            <p className="topicos-ConMed">Breve descrição sobre o evento. Lorem ipsum lorem ipsum lorem ipsum.</p>
                        </div>

                        <div className="consulta-ConMed">
                            <h2>Terceira Consulta</h2>
                            <li className="topicos-ConMed">Clínica Possarle</li>
                            <li className="topicos-ConMed">Médico: Helena Strada</li>
                            <li className="topicos-ConMed">Situação: Agendada</li>
                            <li className="topicos-ConMed">Data: 11/12/2021 15:00</li>
                            <p className="topicos-ConMed">Breve descrição sobre o evento. Lorem ipsum lorem ipsum lorem ipsum.</p>
                        </div>
                    </div>
                </section>
            </main>
            <Rodape />
        </div>
    );
}