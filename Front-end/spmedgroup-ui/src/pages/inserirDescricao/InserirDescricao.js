/*import { Component } from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { parseJwt, usuarioAutenticado } from '../../services/auth'; */
import { Link } from 'react-router-dom';

import '../../Assets/css/InserirDescricao.css';
import Cabecalho from "../../components/cabecalho/cabecalho";
import Rodape from "../../components/rodape/rodape";

import logo from '../../Assets/img/logo_spmedgroup_v1 3.png';

export default function InserirDescricao() {
    return (
        <div>
            <Cabecalho />

            <main>
                <section>
                    <div className="banner-InserirDec">
                        <h1 className="h1-InserirDec">Inserir Descrição</h1>

                        <div className="container box_pesquisa-InserirDec">
                            <div className="espacamento_box-InserirDec">
                                <div>
                                    <label className="label-InserirDec">Paciente:</label>
                                    <input className="input_pesquisa-InserirDec" type="text" />
                                </div>
                                <div>
                                    <label className="label-InserirDec">Data:</label>
                                    <input className="input_pesquisa-InserirDec" type="text" />
                                </div>
                                <div>
                                    <label className="label-InserirDec">Nova descrição:</label>
                                    <input className="input_descricao-InserirDec" type="text" />
                                </div>

                                <div className="espacamento_btn-InserirDec">
                                    <button className="btn_inserir-InserirDec">Inserir</button>
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