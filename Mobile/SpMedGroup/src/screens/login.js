import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  TextInput,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../services/api';
import jwtDecode from 'jwt-decode';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: '',
      Senha: '',
    };
  }
  //como vamos trabalhar com assync historage,
  //nossa funcao tem que ser async.
  realizarLogin = async () => {
    //nao temos mais  console log.
    //vamos utilizar console.warn.

    //apenas para teste.
    //console.warn(this.state.Email + ' ' + this.state.Senha);

    const resposta = await api.post('/Login', {
      Email: this.state.Email, //roberto.possarle@spmedicalgroup.com.br
      Senha: this.state.Senha, //1234
    });

    //mostrar no swagger para montar.
    const token = resposta.data.token;
    await AsyncStorage.setItem('userToken', token);

    const valorToken = await AsyncStorage.getItem('userToken');

    /* console.warn(jwtDecode(valorToken).role); */

    //agora sim podemos descomentar.
    if (resposta.status == 200 && jwtDecode(valorToken).role === "3") {
      this.props.navigation.navigate('ListaMed');
    }

    if (resposta.status == 200 && jwtDecode(valorToken).role === "2") {
      this.props.navigation.navigate('ListaPac');
    }
  };

  render() {
    return (
      <ImageBackground
        source={require('../../assets/img/img_login.png')}
        style={StyleSheet.absoluteFillObject}>
        <View style={styles.main}>
          <View style={styles.mainHeader}>
            <View style={styles.mainHeaderRow}>
              <Image source={require('../../assets/img/logo_comNome.png')} style={styles.mainHeaderImg} />

            </View>
            <View style={styles.mainHeaderLine} />
          </View>

          <View style={styles.mainBody}>
            <TextInput
              style={styles.inputLogin}
              placeholder="Username"
              placeholderTextColor="#FFF"
              keyboardType="email-address"
              // EVENTO PARA FAZERMOS ALGO ENQUANTO O TEXTO MUDA
              onChangeText={Email => this.setState({ Email })}
            />

            <TextInput
              style={styles.inputLogin}
              placeholder="Password"
              placeholderTextColor="#FFF"
              keyboardType="default" //para default nao obrigatorio.
              secureTextEntry={true} //proteje a senha.
              // EVENTO PARA FAZERMOS ALGO ENQUANTO O TEXTO MUDA
              onChangeText={Senha => this.setState({ Senha })}
            />

            <TouchableOpacity
              style={styles.btnLogin}
              onPress={this.realizarLogin}>
              <Text style={styles.btnLoginText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View >
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  // conteúdo da main
  main: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    marginBottom: '20%'
  },

  mainHeader: {
    /* flex: 5, */
    justifyContent: 'center',
    alignItems: 'center',
  },

  mainHeaderRow: {
    flexDirection: 'row',
  },

  mainHeaderText: {
    fontSize: 20,
    letterSpacing: 5,
    color: '#FFFFFF',
  },

  inputLogin: {
    fontFamily: 'Open Sans',
    width: 260, //largura mesma do botao
    marginBottom: 20, //espacamento pra baixo
    fontSize: 20,
    color: '#FFF',
    borderBottomColor: '#FFF', //linha separadora
    borderBottomWidth: 3, //espessura.
  },

  btnLoginText: {
    fontSize: 15, //aumentar um pouco
    fontFamily: 'Open Sans', //troca de fonte
    color: '#2C89E9', //mesma cor identidade
  },

  btnLogin: {
    marginTop: "10%",
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 260,
    backgroundColor: '#FFFFFF',
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 30,
    shadowOffset: { height: 5, width: 5 },
  },
});