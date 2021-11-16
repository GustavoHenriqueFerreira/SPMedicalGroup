import { Component } from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { parseJwt, usuarioAutenticado } from '../../services/auth';
import { Link } from 'react-router-dom';

import '../../Assets/css/CadastroConsulta.css';
import Cabecalho from "../../components/cabecalho/cabecalho";
import Rodape from "../../components/rodape/rodape";

export default function CadastroConsulta() {
    const [listaConsultas, setListaConsultas] = useState([]);
    const [idPaciente, setIdPaciente] = useState('');
    const [idMedico, setIdMedico] = useState('');
    const [idSituacao, setIdSituacao] = useState('');
    const [DescricaoConsulta, setDescricaoConsulta] = useState('');
    const [DataHoraConsulta, setDataHoraConsulta] = useState(new Date());
    const [isLoading, setIsLoading] = useState(false);

    function buscarConsultas() {
        console.log('vamos fazer a chamada para a API');

        axios('http://localhost:5000/api/consultas', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })
            .then(resposta => {
                if (resposta.status === 200) {
                    setListaConsultas(resposta.data)
                }
            })

            .catch(erro => console.log(erro));
    };

    useEffect(buscarConsultas, []);

    function CadastroConsulta(evento) {
        evento.preventDefault();

        setIsLoading(true);

        if (listaConsultas) {
        }

        axios.post('http://localhost:5000/api/consultas', {
            idPaciente: idPaciente,
            idMedico: idMedico,
            idSituacao: idSituacao,
            DescricaoConsulta: '',
            DataHoraConsulta: DataHoraConsulta,
        }, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })
            .then(resposta => {
                if (resposta.status === 201) {

                    console.log('Cadastrado');

                    buscarConsultas();

                    setIdMedico('');
                    setIdPaciente('');
                    setIdSituacao('');
                    setDataHoraConsulta('');

                    setIsLoading(false);
                }
            })

            .catch(erro => console.log(erro), setInterval(() => {
                setIsLoading(false)
            }, 5000));
    };
    return (
        <div>
            <Cabecalho />
            <main>
                <section>
                    <div className="container-CadCon banner-CadCon">
                        <h1 className="h1-CadCon">Cadastrar Consulta</h1>
                        <div className="box_pesquisa-CadCon">
                            <form onSubmit={CadastroConsulta} className="container_cadastro">
                                <div className="container espacamento_box-CadCon">

                                    {/* <div>
                                            <label className="label-CadCon">Clínica:</label>
                                            <input type="text" 
                                            value={titulo}
                                            onChange={(campo) => setTitulo(campo.target.value)} 
                                            className="input_pesquisa-CadCon" />
                                    </div> */}

                                    <div>
                                        <label className="label-CadCon">Médico:</label>
                                        <input type="text"
                                            value={idMedico}
                                            onChange={(campo) => setIdMedico(campo.target.value)}
                                            className="input_pesquisa-CadCon" />
                                    </div>

                                    <div>
                                        <label className="label-CadCon">Paciente:</label>
                                        <input type="text"
                                            value={idPaciente}
                                            onChange={(campo) => setIdPaciente(campo.target.value)}
                                            className="input_pesquisa-CadCon" />
                                    </div>

                                    <div>
                                        <label className="label-CadCon">Situação</label>
                                        <input type="text"
                                            value={idSituacao}
                                            onChange={(campo) => setIdSituacao(campo.target.value)}
                                            className="input_pesquisa-CadCon" />
                                    </div>

                                    <div>
                                        <label className="label-CadCon">Data:</label>
                                        <input type="datetime-local"
                                            value={DataHoraConsulta}
                                            onChange={(campo) => setDataHoraConsulta(campo.target.value)}
                                            className="input_pesquisa-CadCon" />
                                    </div>

                                    <div className="espacamento_btn-CadCon">
                                        {
                                            isLoading === false &&
                                            <button value={DataHoraConsulta} type="submit" className="btn_cadastrar-CadCon">Cadastrar</button>
                                        }

                                        {
                                            isLoading === true &&
                                            <button type="submit" className="btn_cadastrar-CadCon" disabled>Carregando...</button>
                                        }
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
            <Rodape />
        </div>
    );
}