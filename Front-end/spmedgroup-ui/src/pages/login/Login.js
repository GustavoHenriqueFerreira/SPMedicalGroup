import { Component } from 'react';
import axios from 'axios';
import { parseJwt, usuarioAutenticado } from '../../services/auth';
import { Link } from 'react-router-dom';

import '../../Assets/css/Login.css';

import img_login from '../../Assets/img/imagem login 1.png';
import google from '../../Assets/img/Com Google.png';

render(
    <body>
        <main>
            <section>
                <div className="container login">
                    <div>
                        <img src={img_login} alt="imagem de uma médica"/>
                    </div>
                    <div className="bloco_login">
                        <h1>Login</h1>
                        <div className="posicionamento">
                            <img className="google" src={google} alt="Login com o Google" />
                        </div>
                        <div className="login_senha">
                            <div className="botoes">
                                <div className="btn_login">
                                    <input className="input_login" type="text" placeholder="Email"></input>
                                </div>
                                <div className="btn_login">
                                    <input className="input_login" type="text" placeholder="Senha"></input>
                                </div>
                            </div>
                            <a className="mudar_senha" href="">Esqueceu a senha?</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </body>
);