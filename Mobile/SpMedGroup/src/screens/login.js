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
    //console.warn(resposta.data)

    //agora sim podemos descomentar.
    if (resposta.status == 200) {
      this.props.navigation.navigate('ListaMed');
    }

    //console.warn(token);

    //
  };

  render() {
    return (
      <View style={styles.main}>
        <View style={styles.mainHeader}>
          <View style={styles.mainHeaderRow}>
            <Image source={require('../../assets/img/img_login.png')} style={styles.mainHeaderImg} resizeMode="cover"/>

            <Text style={styles.mainHeaderText}>{'Sp Medical Group'.toUpperCase()}</Text>
          </View>
          <View style={styles.mainHeaderLine} />
        </View>

        <View style={styles.mainBody}>
          <TextInput
            style={styles.inputLogin}
            placeholder="username"
            placeholderTextColor="#FFF"
            keyboardType="email-address"
            // EVENTO PARA FAZERMOS ALGO ENQUANTO O TEXTO MUDA
            onChangeText={Email => this.setState({ Email })}
          />

          <TextInput
            style={styles.inputLogin}
            placeholder="password"
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
    );
  }
}

const styles = StyleSheet.create({
  // conteúdo da main
  main: {
    flex: 2,
    ImageBackground: '../../assets/img/img_login.png',

    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },

  mainHeader: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainHeaderRow: {
    flexDirection: 'row',
  },
  // imagem do cabeçalho
  /*   mainHeaderImg: {
      width: 22,
      height: 22,
    
      marginRight: -5,
      marginTop: -12,
    }, */
  // texto do cabeçalho
  mainHeaderText: {
    fontSize: 20,
    letterSpacing: 5,
    color: '#FFFFFF',
  },

  mainBody: {
    flex: 4,
  },

  inputLogin: {
    width: 240, //largura mesma do botao
    marginBottom: 40, //espacamento pra baixo
    fontSize: 20,
    color: '#FFF',
    borderBottomColor: '#FFF', //linha separadora
    borderBottomWidth: 2, //espessura.
  },

  btnLoginText: {
    fontSize: 15, //aumentar um pouco
    fontFamily: 'Open Sans', //troca de fonte
    color: '#90C7FF', //mesma cor identidade
    letterSpacing: 6, //espacamento entre as letras
    textTransform: 'uppercase', //estilo maiusculo
  },

  btnLogin: {
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