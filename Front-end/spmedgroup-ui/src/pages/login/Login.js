import { Component } from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { parseJwt, usuarioAutenticado } from '../../services/auth'; 
import { Link } from 'react-router-dom';

import '../../Assets/css/Login.css';

import img_login from '../../Assets/img/imagem login 1.png';
import google from '../../Assets/img/Com Google.png';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: '',
            erroMensagem: '',
            isLoading: false
        };
    };

    // Função que faz a chamada para a API para realiza o login
    efetuaLogin = (event) => {
        // ignora o comportamento padrão do navegador (recarregar a página, por exemplo)
        event.preventDefault();

        this.setState({ erroMensagem: '', isLoading: true });

        axios.post('http://localhost:5000/api/Login', {
            email: this.state.email,
            senha: this.state.senha
        })

            // recebe todo o conteúdo da resposta da requisição na variável resposta
            .then(resposta => {
                // verifico se o status code dessa resposta é igual a 200
                if (resposta.status === 200) {
                    // se sim, exibe no console do navegador o token do usuário logado,
                    // console.log('Meu token é: ' + resposta.data.token);
                    // salva o valor do token no localStorage
                    localStorage.setItem('usuario-login', resposta.data.token);
                    // e define que a requisição terminou
                    this.setState({ isLoading: false });

                    // define a variável base64 que vai receber o payload do token
                    let base64 = localStorage.getItem('usuario-login').split('.')[1];
                    // exibe no console do navegador o valor em base64
                    console.log(base64);

                    // exibe no console o valor decodificado de base64 para string
                    // console.log(window.atob(base64));

                    // exibe no console do navegador o valor da chave role
                    // console.log( JSON.parse( window.atob(base64) ) );

                    // console.log( parseJwt().role );

                    // exibe as propriedades da página
                    console.log(this.props);

                    // verifica se o usuário logado é do tipo administrador
                    if (parseJwt().role === '1' ) {
                        this.props.history.push('/consultasAdm');
                        console.log('estou logado: ' + usuarioAutenticado())
                    }

                    else{
                        this.props.history.push('/home');
                    }
                }
            })

            // Caso haja um erro,
            .catch(() => {
                // define o valor do state erroMensagem com uma mensagem personalizada
                this.setState({ erroMensagem: 'E-mail e/ou senha inválidos!', isLoading: false })
            })
    };

    atualizaStateCampo = (campo) => {
        this.setState({ [campo.target.name]: campo.target.value })
    };

    render() {
        return (
            <div>
                <main>
                    <section>
                        <div className="container login-login">
                            <div>
                                <img src={img_login} alt="imagem de uma médica" />
                            </div>
                            <div className="bloco_login-login">
                                <h1 className="h1-login">Login</h1>
                                <div className="posicionamento-login">
                                    <img className="google-login" src={google} alt="Login com o Google" />
                                </div>
                                <div className="login_senha-login">
                                    <div className="botoes-login">
                                        <div className="btn_login-login">
                                            <input className="input_login-login" type="text" placeholder="Email"></input>
                                        </div>
                                        <div className="btn_login-login">
                                            <input className="input_login-login" type="text" placeholder="Senha"></input>
                                        </div>
                                    </div>
                                    <a className="mudar_senha-login" href="">Esqueceu a senha?</a>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        )
    }
};