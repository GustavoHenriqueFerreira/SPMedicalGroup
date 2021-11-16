import { Component } from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { parseJwt, usuarioAutenticado } from '../../services/auth';
import { Link } from 'react-router-dom';

import '../../Assets/css/InserirDescricao.css';
import Cabecalho from "../../components/cabecalho/cabecalho";
import Rodape from "../../components/rodape/rodape";

function DescricaoConsulta() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>404 - Página não encontrada</h1>
        </header>
      </div>
    );
  }
  
  export default DescricaoConsulta;

/* export default class Descricao extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaConsultas: [],
            DescricaoConsulta: '',
            idConsultaAlterado: 0,
        };
    }

    limparCampos = () => {
        this.setState({
            listaConsultas: [],
            DescricaoConsulta: '',
            idConsultaAlterado: 0,
        });
        console.log('Os states foram resetados!');
    };
    
    buscarConsultas = () => {
        console.log('agora vamos fazer a chamada para a api.');

        fetch('http://localhost:5000/api/consultas', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('usuario-login'),
            },
        })
            .then((resposta) => resposta.json())

            .then((dados) => this.setState({ listaConsultas: dados }))

            .catch((erro) => console.log(erro));
    };

    atualizaEstadoDescricaoConsulta = async (event) => {

        await this.setState({
            DescricaoConsulta: event.target.value,
        });
        console.log(this.state.DescricaoConsulta);
    };

    manipularConsultas = (submit_formulario) => {
        submit_formulario.preventDefault();

        console.log(JSON.stringify({ DescricaoConsulta: this.state.DescricaoConsulta }));

        if (this.state.idConsultaAlterado !== 0) {
            fetch(
                'http://localhost:5000/api/consultas/descricao/' +
                this.state.idConsultaAlterado,
                {
                    method: 'PATCH',

                    body: JSON.stringify({ DescricaoConsulta: this.state.DescricaoConsulta }),

                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'Bearer ' + localStorage.getItem('usuario-login'),
                    },
                },
            )
                .then((resposta) => {
                    if (resposta.status === 200) {
                        console.log(
                            'Consulta ' +
                            this.state.idConsultaAlterado +
                            ' foi atualizado!',
                           
                            'Descrição agora é: ' + this.state.DescricaoConsulta,
                        );
                    }
                })

                .catch((erro) => console.log(erro))

                .then(this.buscarConsultas)

                .then(this.limparCampos)

                .catch((erro) => console.log(erro))

                .then(this.buscarConsultas)

                .then(this.limparCampos);
        }
    };
}

render(){
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
} */