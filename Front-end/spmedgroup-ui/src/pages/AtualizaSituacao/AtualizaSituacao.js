import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../../Assets/css/InserirDescricao.css';
import Cabecalho from "../../components/cabecalho/cabecalho";
import Rodape from "../../components/rodape/rodape";
import SituacaoConsulta from "../../components/situacaoConsulta/SituacaoConsulta";

export default function AtualizaSituacao() {
    /* const [idConsultaAlterada, setIdConsultaAlterada] = useState(0)
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
    } */
    const [listaConsultas, setListaConsultas] = useState([]);
    const [idPaciente, setIdPaciente] = useState(0);
    const [idSituacao, setIdSituacao] = useState(0);

    function buscarConsultas() {
        axios("http://localhost:5000/api/consultas", {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })
            .then(resposta => {
                if (resposta.status === 200) {
                    setListaConsultas(resposta.data);
                    // console.log(resposta.data)
                    // console.log(listaConsultas)
                }
            }).catch(erro => console.log(erro));
    }

    useEffect(buscarConsultas, []);

    function permitirSelect(idConsulta) {
        // console.log("Você está editando a situação da consulta " + idConsulta + "e a situação é " + idSituacao)        
        document.getElementById(idConsulta).removeAttribute("disabled");
        var btn = document.getElementById("btn" + idConsulta);

        if (btn.style.display === "none") {
            btn.style.display = "";
        } else {
            btn.style.display = "none";
        }


    }

    function alteraSituacao(idConsulta) {

        axios.patch("http://localhost:5000/api/consultas/situacao" + idConsulta, {
            idSituacao: idSituacao
        }, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })
            .then(resposta => {
                if (resposta.status === 204) {
                    console.log("consulta" + idConsulta + "atualizada");
                    document.getElementById(idConsulta).setAttribute("disabled", "disabled");
                    var btn = document.getElementById("btn" + idConsulta)

                    btn.style.display = "none";
                    buscarConsultas();
                }
            }).catch(erro => console.log(erro))
    }

    return (
        <div>
            <Cabecalho />

            <main>
                {/* <section>
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
                </section> */}

                <section>
                    <div className="banner-InserirDec">
                        <h1 className="h1-InserirDec">Atualizar Situação</h1>
                        <div className="container-InserirDec box_pesquisa-InserirDec">
                            <form className="espacamento_box-InserirDec" onSubmit={alteraSituacao}>
                                {/* <div>
                                    <label className="label-InserirDec">Número da Consulta:</label>
                                    <input onChange={(evt) => setIdConsultaAlterada(evt.target.value)} className="input_pesquisa-InserirDec" type="number" />
                                </div>
                                <div>
                                    <label className="label-InserirDec">Nova Situação:</label>
                                    <input onChange={(evt) => setNovoIdSituacao(evt.target.value)} className="input_descricao-InserirDec" type="text" />
                                </div>
                                <div className="espacamento_btn-InserirDec">
                                    <button type="submit" className="btn_inserir-InserirDec">Atualizar</button>
                                </div> */}

                                {/* <div className="descricao">
                                    <textarea name="texto_desc" id={"texto_desc" + consulta.idConsulta} className="valor vazio" style={{ resize: "none", display: "none" }}
                                        cols="86" rows="10" readOnly="" value={consulta.descricaoConsulta}></textarea>
                                    <button onClick={() => atualizarSituacao(consulta.idConsulta)} id={"btn" + consulta.idConsulta} className="botao" style={{ display: "none" }}>Atualizar</button>
                                </div> */}

                                <div>
                                    <div>
                                        {
                                            listaConsultas.map((consulta) => {
                                                <SituacaoConsulta alterar={(campo) => setIdSituacao(campo.target.value)} idConsulta={consulta.idConsulta} situacao={consulta.idSituacaoNavigation.descricaoConsulta}/>
                                                // console.log(consulta.idSituacaoNavigation.situacao1)
                                                return (
                                                    <button onClick={() => permitirSelect(consulta.idConsulta)} type="button" className="vazio">Editar</button>
                                                )

                                            })
                                        }
                                    </div>

                                </div>

                                <div>
                                    <label>Situacao:</label><br />
                                    <select name="situacao" id="situacao" value={idSituacao} defaultValue="0" onChange={(campo) =>
                                        setIdSituacao(campo.target.value)}>
                                        <option value="0" disabled>Selecione a situacao</option>
                                        <option value="1">Realizada</option>
                                        <option value="2">Cancelada</option>
                                        <option value="3">Agendada</option>
                                    </select>
                                    <button type="submit">Alterar Situação</button>
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