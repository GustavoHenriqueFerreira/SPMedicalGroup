import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';
import api from '../services/api';

export default class PerfilPac extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //nome: '',
      Email: '',
      base64: '',
    };
  }

  consultaImgPerfil = async () => {
    const valorToken = await AsyncStorage.getItem('userToken');
    api
      .get('/perfil/imagem/bd', {
        headers: {
          Authorization: 'Bearer ' + valorToken,
        },
      })
      .then(resposta => {
        if (resposta.status == 200) {
          //console.warn(resposta.data);
          this.setState({ base64: resposta.data });
        }
      })
      //.catch(erro => console.warn(erro));
  };

  buscarDadosStorage = async () => {
    try {
      const valorToken = await AsyncStorage.getItem('userToken');

      //console.warn(jwtDecode(valorToken));

      if (valorToken != null) {
        //this.setState({ nome: jwtDecode(valorToken).name });
        this.setState({ Email: jwtDecode(valorToken).email });
      }
    } catch (error) {
      //console.warn(error);
    }
  };

  componentDidMount() {
    this.buscarDadosStorage();
    this.consultaImgPerfil();
  }

  realizarLogout = async () => {
    //vamos remover o armazenamento local.
    try {
      await AsyncStorage.removeItem('userToken');
      this.props.navigation.navigate('Login'); //tem que ser mesmo nome.
    } catch (error) {
      //console.warn(error);
    }
  };

  render() {
    return (
      <View style={styles.main}>
        <View style={styles.mainHeader}>
          {/* <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={this.takePicture}
              style={styles.capture}></TouchableOpacity>
          </View> */}
          <View style={styles.mainHeaderRow}>
            <Text style={styles.mainHeaderText}>{'Perfil'.toUpperCase()}</Text>
          </View>
          <View style={styles.mainHeaderLine} />
        </View>

        <View style={styles.mainBody}>
          <View style={styles.mainBodyInfo}>
            {/* <View style={styles.mainBodyImg} />
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Camera')}>
            </TouchableOpacity>*/}
            <Image
              source={{ uri: `data:image/png;base64,${this.state.base64}` }}
              style={styles.mainBodyImg}
            />

            <Text style={styles.mainBodyText}>{this.state.Email}</Text>

            <View style={styles.mainLine} />
            <TouchableOpacity style={styles.btnLogout} onPress={this.realizarLogout}>
              <Text style={styles.btnLogoutText}>Sair</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  // conteúdo da main
  main: {
    flex: 3,
    backgroundColor: 'rgba(39, 126, 217, 0.4)',
  },
  // cabeçalho
  mainHeader: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainHeaderRow: {
    flexDirection: 'row',
  },
  // texto do cabeçalho
  mainHeaderText: {
    fontSize: 18,
    letterSpacing: 5,
    color: '#fff',
    fontFamily: 'Open Sans',
  },
  // linha de separação do cabeçalho
  mainHeaderLine: {
    width: 250,
    paddingTop: 10,
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
  },
  // conteúdo do body
  mainBody: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  // informações do usuário
  mainBodyInfo: {
    alignItems: 'center',
  },
  mainBodyImg: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  mainBodyText: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 100,
    letterSpacing: 1,
  },
  mainLine: {
    width: 250,
    //paddingTop: 30,
    marginTop: '5%',
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
  },
  // botão de logout
  btnLogout: {
    marginTop: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 200,
    backgroundColor: '#FFFFFF',
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 20,
  },
  // texto do botão
  btnLogoutText: {
    fontSize: 20,
    fontFamily: 'Open Sans',
    color: '#6476E1',
    letterSpacing: 1,
  },
  mainStatusBar: {
    height: 70,
    backgroundColor: '#667BFF'
  },
  // estilo dos ícones da tabBar
  tabBarIconL: {
    width: 41,
    height: 54,
  },
  tabBarIconP: {
    width: 45,
    height: 46,
  },
});
