import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  PendingView,
} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const bottomTab = createBottomTabNavigator();

import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';
import api from '../services/api';
import ListaMed from './listagemMed';

export default class Perfil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      email: '',
      base64: '',
    };
  }

  /* consultaImgPerfil = async () => {
    const valorToken = await AsyncStorage.getItem('userToken');

    api
      .get('/perfil/imagem/bd', {
        headers: {
          Authorization: 'Bearer ' + valorToken,
        },
      })
      .then(resposta => {
        if (resposta.status == 200) {
          console.warn(resposta.data);
          this.setState({ base64: resposta.data });
        }
      })
      .catch(erro => console.warn(erro));
  };

  buscarDadosStorage = async () => {
    try {
      const valorToken = await AsyncStorage.getItem('userToken');

      console.warn(jwtDecode(valorToken));

      if (valorToken != null) {
        this.setState({ nome: jwtDecode(valorToken).name });
        this.setState({ email: jwtDecode(valorToken).email });
      }
    } catch (error) {
      console.warn(error);
    }
  };

  componentDidMount() {
    this.buscarDadosStorage();
    this.consultaImgPerfil();
  } */

  realizarLogout = async () => {
    //vamos remover o armazenamento local.
    try {
      await AsyncStorage.removeItem('userToken');
      this.props.navigation.navigate('Login'); //tem que ser mesmo nome.
    } catch (error) {
      console.warn(error);
    }
  };

  render() {
    return (
      <View style={styles.main}>
        <View style={styles.mainHeader}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={this.takePicture}
              style={styles.capture}></TouchableOpacity>
          </View>
          <View style={styles.mainHeaderRow}>
            {/* <Image
              source={require('../../assets/img/profile.png')}
              style={styles.mainHeaderImg}
            /> */}
            <Text style={styles.mainHeaderText}>{'Perfil'.toUpperCase()}</Text>
          </View>
          <View style={styles.mainHeaderLine} />
        </View>

        <View style={styles.mainBody}>
          <View style={styles.mainBodyInfo}>
            <Image source={require('../../assets/img/profile.png')} style={styles.mainBodyImg} />
            {/* <View style={styles.mainBodyImg} />
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Camera')}>
            </TouchableOpacity>
            <Image
              source={{ uri: `data:image/png;base64,${this.state.base64}` }}
              style={styles.mainBodyImg}
            /> */}

            <Text style={styles.mainBodyText}>Nome</Text>
            <Text style={styles.mainBodyText}>E-mail</Text>

            <TouchableOpacity style={styles.btnLogout}>
              <Text style={styles.btnLogoutText}>Sair</Text>
            </TouchableOpacity>
          </View>

          <bottomTab.Navigator
          initialRouteName='Perfil'

          screenOptions={({ route }) => ({
            tabBarIcon: () => {
              if (route.name === 'Perfil') {
                return (
                  <Image
                    source={require('../../assets/img/profile_bar.png')}
                    //style={styles.tabBarIconL}
                  />
                )
              }
              if (route.name === 'ListaMed') {
                return (
                  <Image
                    source={require('../../assets/img/img_consulta.png')}
                    //style={styles.tabBarIconS}
                  />
                )
              }
            },

            // React Navigation 6.x
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveBackgroundColor: '#68c2e8',
            tabBarInactiveBackgroundColor: '#009df5',
            // tabBarActiveTintColor: 'blue',
            // tabBarInactiveTintColor: 'red',
            tabBarStyle: { height: 80 },
          })}
        >
          <bottomTab.Screen name="ListaMed" component={ListaMed} />
          <bottomTab.Screen name="Perfil" component={Perfil} />
        </bottomTab.Navigator>

          {/* <TouchableOpacity
            style={styles.btnLogout}
            onPress={this.realizarLogout}>
          </TouchableOpacity> */}
        </View>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  // conteúdo da main
  main: {
    flex: 1,
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
  // imagem do cabeçalho
  mainHeaderImg: {
    width: 22,
    height: 22,
    tintColor: '#fff',
    marginRight: -5,
    marginTop: -12,
  },
  // texto do cabeçalho
  mainHeaderText: {
    fontSize: 16,
    letterSpacing: 5,
    color: '#fff',
    fontFamily: 'Open Sans',
  },
  // linha de separação do cabeçalho
  mainHeaderLine: {
    width: 200,
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
    backgroundColor: '#fff',
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 50,
  },
  mainBodyText: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 20,
  },
  // botão de logout
  btnLogout: {
    marginTop: "5%",
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 200,
    backgroundColor: '#FFFFFF',
    borderColor: '#FFFFFF',
    borderWidth: 1,
    marginBottom: 50,
    borderRadius: 20,
  },
  // texto do botão
  btnLogoutText: {
    fontSize: 20,
    fontFamily: 'Open Sans',
    color: '#6476E1',
  },
  tabBarIcon: {
    width: 22,
    height: 22
  }
});