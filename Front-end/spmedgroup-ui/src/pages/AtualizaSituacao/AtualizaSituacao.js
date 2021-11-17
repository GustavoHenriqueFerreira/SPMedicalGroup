import { Component } from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { parseJwt, usuarioAutenticado } from '../../services/auth';
import { Link } from 'react-router-dom';

import '../../Assets/css/InserirDescricao.css';
import Cabecalho from "../../components/cabecalho/cabecalho";
import Rodape from "../../components/rodape/rodape";

export default function AtualizaSituacao() {
    const [idConsultaAlterada, setIdConsultaAlterada] = useState(0)
    const [novoidSituacao, setNovoIdSituacao] = useState(0)

    function alteraSituacao(event) {

        event.preventDefault();

        axios.patch('http://localhost:5000/api/consultas/situacao/' + idConsultaAlterada, {
            idSituacao: novoidSituacao
        }, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })
            .then(response => {
                if (response.status === 200) {
                    console.log('Situação alterada com sucesso')
                }
            })
            .catch(erro => console.log(erro))
    }

    return (
        <div>
            <Cabecalho />

            <main>
                <section>
                    <div className="banner-InserirDec">
                        <h1 className="h1-InserirDec">Atualizar Situação</h1>
                        <div className="container box_pesquisa-InserirDec">
                            <form onSubmit={alteraSituacao}>
                                <div>
                                    <div>
                                        <label className="label-InserirDec">Número da Consulta:</label>
                                        <input onChange={(evt) => setIdConsultaAlterada(evt.target.value)} className="input_pesquisa-InserirDec" type="number" />
                                    </div>
                                    <div>
                                        <label className="label-InserirDec">Nova Situação:</label>
                                        <input onChange={(evt) => setNovoIdSituacao(evt.target.value)} className="input_descricao-InserirDec" type="number" />
                                    </div>
                                    <div className="espacamento_btn-InserirDec">
                                        <button type="submit" className="btn_inserir-InserirDec">Atualizar</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
            <Rodape />
        </div >
    )
}

/* import { Component } from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { parseJwt, usuarioAutenticado } from '../../services/auth';
import { Link } from 'react-router-dom';

import '../../Assets/css/ConsultaAdm.css';
import Cabecalho from "../../components/cabecalho/cabecalho";
import Rodape from "../../components/rodape/rodape";
import iconeSituacao from '../../Assets/img/editar_situacao.png';

export default function ConsultasAdm() {
    const [listaConsultas, setListaConsultas] = useState([]);
    const [idConsultaAlterada, setIdConsultaAlterada] = useState(0)
    const [novoidSituacao, setNovoIdSituacao] = useState("")
    const [titulo, setTitulo] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // função responsável por fazer a requisição e trazer a lista de tipos usuários
    function buscarConsultas() {
        console.log('vamos fazer a chamada para a API');

        // faz a chamada para a API usando axios
        axios('http://localhost:5000/api/consultas', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })
            .then(resposta => {
                // caso a resposta da requisição tenha um status code igual a 200
                if (resposta.status === 200) {
                    console.log(resposta.data)
                    // atualiza o state listaTiposUsuarios com os dados do corpo da resposta
                    setListaConsultas(resposta.data)
                }
            })

            // caso ocorra algum erro, exibe no console do navegador este erro
            .catch(erro => console.log(erro));
    };

    function alteraSituacao(event) {

        event.preventDefault();

        axios.patch('http://localhost:5000/api/consultas/situacao/' + idConsultaAlterada, {
            idSituacao: novoidSituacao
        }, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })
            .then(response => {
                if (response.status === 200) {
                    console.log('situação alterada com sucesso')
                }
            })
            .catch(erro => console.log(erro))
        buscarConsultas();

    }

    useEffect(buscarConsultas, []);

    return (
        <div>
            <Cabecalho />
            <main>
                <section>
                    <div className="banner-ConAdm">
                        <h1 className="h1-ConAdm">Lista de Consultas</h1>

                        <div className="container-ConAdm box_pesquisa-ConAdm">
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

                        <div className="btn_cadastrar">
                            <Link to="/cadastroConsulta"><button className="btn_cadastrar-ConAdm">Cadastrar Consulta</button></Link>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container-ConAdm posicionamento_titulo-ConAdm">
                        <h2 className="titulo-ConAdm">Consultas</h2>
                    </div>
                    <div className="container-ConAdm lista_consultas-ConAdm">
                        {
                            listaConsultas.map((consultas) => {
                                return (
                                    <form onSubmit={alteraSituacao}>
                                        <div className="consulta-ConAdm">
                                            <h2 onChange={(evt) => setIdConsultaAlterada(evt.target.value)}> {consultas.idConsulta}° Consulta</h2>
                                            <li className="topicos-ConAdm">Clínica: {/* {consultas.idMedicoNavigation.idClinicaNavigation.nomeClinica} </li>
                                            <li className="topicos-ConAdm">Paciente: {consultas.idPacienteNavigation.nomePaciente}</li>
                                            <li className="topicos-ConAdm">Data de Nascimento: {Intl.DateTimeFormat("pt-BR", {
                                                year: 'numeric', month: 'short', day: 'numeric',
                                            }).format(new Date(consultas.idPacienteNavigation.nascimento))}</li>
                                            <li className="topicos-ConAdm">Telefone: {consultas.idPacienteNavigation.telefone}</li>
                                            <li className="topicos-ConAdm">Médico: {consultas.idMedicoNavigation.nomeMedico}</li>
                                            <li className="topicos-ConAdm">Data: {Intl.DateTimeFormat("pt-BR", {
                                                year: 'numeric', month: 'short', day: 'numeric',
                                                hour: 'numeric', minute: 'numeric',
                                                hour12: true
                                            }).format(new Date(consultas.dataHoraConsulta))}</li>

                                            <div>
                                                <li className="topicos-ConAdm">Situação: {consultas.idSituacaoNavigation.descricaoSituacao}</li>
                                                <input onChange={(evt) => setNovoIdSituacao(evt.target.value)}></input>
                                                <button type="submit"></button>
                                            </div>
                                            <p className="topicos-ConAdm">{consultas.descricaoConsulta}</p>
                                        </div>
                                    </form>
                                )
                            })
                        }
                    </div>
                </section>
            </main>
            <Rodape />
        </div>
    );
} */