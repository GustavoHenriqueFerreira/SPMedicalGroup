import { Component } from 'react';
/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { parseJwt, usuarioAutenticado } from '../../services/auth'; */
import { Link } from 'react-router-dom';

import '../../Assets/css/ConsultaPac.css';
import Cabecalho from "../../components/cabecalho/cabecalho";
import Rodape from "../../components/rodape/rodape";

import { useState, useEffect } from "react";
import axios from 'axios';

export default function ConsultaPac() {
    const [listaConsultasPac, setListaConsultasPac] = useState([]);

    function buscarConsultasPac() {
        axios('http://localhost:5000/api/consultas/listaPac', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })
            .then(resposta => {
                if (resposta.status === 200) {
                     console.log(resposta.data)
                    setListaConsultasPac(resposta.data)
                };
            })
            .catch(erro => console.log(erro));
    };

    useEffect(buscarConsultasPac, []);

    return (
        <div>
            <Cabecalho />
            <main>
                <section>
                    <div className="banner-ConPac">
                        <h1 className="h1-ConPac">Lista de Consultas</h1>

                        <div className="container-ConPac box_pesquisa-ConPac">
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
                    </div>
                </section>

                <section>
                    <div className="container-ConPac posicionamento_titulo-ConPac">
                        <h2 className="titulo-ConPac">Consultas</h2>
                    </div>
                    <div className="container-ConPac lista_consultas-ConPac">
                        {
                            listaConsultasPac.map((minhasConsultas) => {
                                return (
                                    <div className="consulta-ConPac">
                                        <h2>{minhasConsultas.idConsulta}° Consulta</h2>
                                        {/* <li className="topicos-ConPac">Clínica:  {minhasConsultas.idMedicoNavigation.idClinicaNavigation.nomeClinica} </li> */}
                                        <li className="topicos-ConPac">Nome Médico: {minhasConsultas.idMedicoNavigation.nomeMedico}</li>
                                        <li className="topicos-ConPac">Data: {Intl.DateTimeFormat("pt-BR", {
                                            year: 'numeric', month: 'short', day: 'numeric',
                                            hour: 'numeric', minute: 'numeric',
                                            hour12: true
                                        }).format(new Date(minhasConsultas.dataHoraConsulta))}</li>
                                        <li className="topicos-ConPac">Situação: {minhasConsultas.idSituacaoNavigation.descricaoSituacao}</li>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>
            </main>
            <Rodape />
        </div>
    );
}