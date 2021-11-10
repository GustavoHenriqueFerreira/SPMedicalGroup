import { Component } from 'react';
import axios from 'axios';
import { parseJwt, usuarioAutenticado } from '../../services/auth';
import { Link } from 'react-router-dom';

import '../../Assets/css/InserirDescricao.css';
import Cabecalho from "../../components/cabecalho/cabecalho";
import Rodape from "../../components/rodape/rodape";

import logo from '../../Assets/img/logo_spmedgroup_v1 3.png';

render(
    <body>
        <Cabecalho />

        <main>
            <section>
                <div className="banner">
                    <h1>Inserir Descrição</h1>

                    <div className="container box_pesquisa">
                        <div className="espacamento_box">
                            <div>
                                <label>Paciente:</label>
                                <input className="input_pesquisa" type="text" />
                            </div>
                            <div>
                                <label>Data:</label>
                                <input className="input_pesquisa" type="text" />
                            </div>
                            <div>
                                <label>Nova descrição:</label>
                                <input className="input_descricao" type="text" />
                            </div>

                            <div className="espacamento_btn">
                                <button className="btn_inserir">Inserir</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <Rodape />
    </body>
);