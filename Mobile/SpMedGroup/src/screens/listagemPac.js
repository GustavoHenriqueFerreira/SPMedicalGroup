import React, { Component } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

import api from '../services/api';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AsyncStorage from '@react-native-async-storage/async-storage';

const bottomTab = createBottomTabNavigator();

export default class ListaPac extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaConsultas: [],
    };
  }

  buscarConsultasPac = async () => {
    const token = await AsyncStorage.getItem('userToken');
    // define uma constante pra receber a resposta da requisição
    const resposta = await api.get('/consultas/listaPac',
      {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      },
    );
    // com a função console.warn() é possível mostrar alertas na tela do dispositivo mobile

    console.warn(resposta.data[0])
    // recebe o corpo da resposta
    const dadosDaApi = resposta.data;
    // atualiza o state listaEventos com este corpo da requisição
    this.setState({ listaConsultas: dadosDaApi });

    console.warn(dadosDaApi)
  };

  // quando o componente é renderizado
  componentDidMount() {
    // invoca a função abaixo
    this.buscarConsultasPac();
  }

  render() {
    return (
      <View style={styles.main}>
        {/* Cabeçalho - Header */}
        <View style={styles.mainHeader}>
          <View style={styles.mainHeaderRow}>
            {/* <Image
              source={require('../../assets/img/calendar.png')}
              style={styles.mainHeaderImg}
            /> */}
            <Text style={styles.mainHeaderText}>{'Consultas'.toUpperCase()}</Text>
          </View>
          <View style={styles.mainHeaderLine} />
        </View>

        {/* Corpo - Body */}
        <View style={styles.mainBody}>
          <FlatList
            contentContainerStyle={styles.mainBodyContent}
            data={this.state.listaConsultas}
            keyExtractor={item => item.idConsulta}
            renderItem={this.renderItem}
          />
        </View>

        {/* <bottomTab.Navigator
          initialRouteName='ListaPac'

          screenOptions={({ route }) => ({
            tabBarIcon: () => {
              if (route.name === 'ListaPac') {
                return (
                  <Image
                    source={require('../assets/clipboard-list-solid.png')}
                    style={styles.tabBarIconL}
                  />
                )
              }
              if (route.name === 'Perfil') {
                return (
                  <Image
                    source={require('../assets/sign-out-alt-solid.png')}
                    style={styles.tabBarIconS}
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
          <bottomTab.Screen name="ListaPac" component={ListaPac} />
          <bottomTab.Screen name="Perfil" component={Perfil} />
        </bottomTab.Navigator> */}

        {/*  <StatusBar
          hidden={false}
        />
        <bottomTab.Navigator
          // versão 5.x do React Navigation
          // tabBarOptions={{
          //   showLabel: false,
          //   showIcon: true,
          //   activeBackgroundColor: '#B727FF',
          //   inactiveBackgroundColor: '#DD99FF',
          //   activeTintColor: 'red',
          //   inactiveTintColor: 'blue',
          //   style: { height: 50 }
          // }}
          screenOptions={({ route }) => ({
            tabBarIcon: () => {
              if (route.name === 'Cadastro') {
                return (
                  <Text>A</Text>
                )
              }
            },
            // React Navigation 6.x
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveBackgroundColor: '#FFFFFF',
            tabBarInactiveBackgroundColor: '#FFFFFF',
            // tabBarActiveTintColor: 'blue',
            // tabBarInactiveTintColor: 'red',
            tabBarStyle: { height: 50 }
          })}
        >
          <bottomTab.Screen name="Cadastro" component={Cadastro} />
        </bottomTab.Navigator> */}
      </View>
    );
  }

  renderItem = ({ item }) => (
    // <Text style={{ fontSize: 20, color: 'red' }}>{item.nomeEvento}</Text>

    <View style={styles.flatItemRow}>
      <View style={styles.flatItemContainer}>
        <Text style={styles.flatItemTitle}>{item.idConsulta}° Consulta</Text>
        <Text style={styles.flatItemInfo}>Nome Médico: {item.idMedicoNavigation.nomeMedico}</Text>
        <Text style={styles.flatItemInfo}>Data: {Intl.DateTimeFormat("pt-BR", {
          year: 'numeric', month: 'short', day: 'numeric',
          hour: 'numeric', minute: 'numeric',
          hour12: true
        }).format(new Date(item.dataHoraConsulta))}</Text>

        <Text style={styles.flatItemInfo}>Situação: {item.idSituacaoNavigation.descricaoSituacao}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 2,
    backgroundColor: 'rgba(39, 126, 217, 0.4)',
  },
  // cabeçalho
  mainHeader: {
    flex: 5,
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
    tintColor: '#ccc',
    marginRight: -5,
    marginTop: -12,
  },
  // texto do cabeçalho
  mainHeaderText: {
    fontFamily: 'Open Sans',
    textTransform: 'uppercase',
    fontSize: 20,
    lineHeight: 27,
    color: '#FFFFFF',
  },
  // linha de separação do cabeçalho
  mainHeaderLine: {
    width: 210,
    paddingTop: 10,
    borderBottomColor: '#FFF',
    borderBottomWidth: 1,
  },

  // conteúdo do body
  mainBody: {
    flex: 15,
    color: ''
  },
  // conteúdo da lista
  mainBodyContent: {
    /* paddingRight: 50,
    paddingLeft: 74, */
    backgroundColor: '',
    justifyContent: 'center',
    alignItems: 'center'
  },

  titulo: {
    alignItems: 'center',
  },

  backGround: {
    backgroundColor: 'rgba(39, 126, 217, 0.5)',
    borderColor: '#FFF',
    borderWidth: 1,
    width: 250,
    borderRadius: 20,
    
    //alignItems: 'center',
  },
  // dados do evento de cada item da lista (ou seja, cada linha da lista)
  flatItemRow: {
    borderRadius: 20,
    width: 220,
    height: 120,
    backgroundColor: 'rgba(39, 126, 217, 0.5)',
    flexDirection: 'row',
    marginTop: '10%',
    marginBottom: '15%'
  },
  flatItemContainer: {
    flex: 1,
    color: '#A4B0FA',
    marginTop: '2%',
    justifyContent: 'space-evenly',
  },
  flatItemTitle: {
    fontFamily: 'Open Sans',
    fontSize: 16,
    color: '#000',
    marginLeft: '30%'
  },
  flatItemInfo: {
    fontFamily: 'Open Sans',
    fontSize: 14,
    color: '#000',
    marginLeft: '5%'
  },
  /*
  flatItemImg: {
        justifyContent: 'center',
  },
      flatItemImgIcon: {
        width: 26,
      height: 26,
      tintColor: '#ccc',
  },
      tabBarIcon: {
        width: 22,
      height: 22
  } */
});