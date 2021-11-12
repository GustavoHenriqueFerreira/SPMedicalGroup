/* import { Component } from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { parseJwt, usuarioAutenticado } from '../../services/auth';
import { Link } from 'react-router-dom';*/

import '../../Assets/css/CadastroConsulta.css';
import Cabecalho from "../../components/cabecalho/cabecalho";
import Rodape from "../../components/rodape/rodape";

/* import logo from '../../Assets/img/logo_spmedgroup_v1 3.png'; */

export default function CadastroConsulta() {
    return (
        <div>
            <Cabecalho />
            <main>
                <section>
                    <div className="container-CadCon banner-CadCon">
                        <h1 className="h1-CadCon">Cadastrar Consulta</h1>

                        <div className="box_pesquisa-CadCon">
                            <div className="container espacamento_box-CadCon">
                                <div>
                                    <label className="label-CadCon">Clínica:</label>
                                    <input className="input_pesquisa-CadCon" type="text" />
                                </div>

                                <div>
                                    <label className="label-CadCon">Médico:</label>
                                    <input className="input_pesquisa-CadCon" type="text" />
                                </div>

                                <div>
                                    <label className="label-CadCon">Paciente:</label>
                                    <input className="input_pesquisa-CadCon" type="text" />
                                </div>

                                <div>
                                    <label className="label-CadCon">Situação</label>
                                    <input className="input_pesquisa-CadCon" type="text" />
                                </div>

                                <div>
                                    <label className="label-CadCon">Data:</label>
                                    <input className="input_pesquisa-CadCon" type="text" />
                                </div>

                                <div className="espacamento_btn-CadCon">
                                    <button className="btn_cadastrar-CadCon">Cadastrar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Rodape />
        </div>
    );
}