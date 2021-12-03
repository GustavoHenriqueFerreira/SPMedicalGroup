import React, { Component } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

import api from '../services/api';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AsyncStorage from '@react-native-async-storage/async-storage';

const bottomTab = createBottomTabNavigator();

export default class ListaMed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaConsultas: [],
    };
  }

  buscarConsultasMed = async () => {
    const token = await AsyncStorage.getItem('userToken');
    // define uma constante pra receber a resposta da requisição
    const resposta = await api.get('/consultas/listaMed',
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
    this.buscarConsultasMed();
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
        <View style={styles.backGround}>
          <View style={styles.titulo}>
            <Text style={styles.flatItemTitle}>{item.idConsulta}° Consulta</Text>
          </View>
          {/* <Text style={styles.flatItemInfo}>Clínica:  {item.idMedicoNavigation.idClinicaNavigation.nomeClinica} </li> */}

          <Text style={styles.flatItemInfo}>Nome do Paciente: {item.idPacienteNavigation.nomePaciente}</Text>
          <Text style={styles.flatItemInfo}>Telefone: {item.idPacienteNavigation.telefone}</Text>

          <Text style={styles.flatItemInfo}>Data de Nascimento: {Intl.DateTimeFormat("pt-BR", {
            year: 'numeric', month: 'short', day: 'numeric',
          }).format(new Date(item.idPacienteNavigation.nascimento))}</Text>

          <Text style={styles.flatItemInfo}>Data: {Intl.DateTimeFormat("pt-BR", {
            year: 'numeric', month: 'short', day: 'numeric',
            hour: 'numeric', minute: 'numeric',
            hour12: true
          }).format(new Date(item.dataHoraConsulta))}</Text>

          <Text style={styles.flatItemInfo}>Situação: {item.idSituacaoNavigation.descricaoSituacao}</Text>
          <Text style={styles.flatItemInfo}>{item.descricaoConsulta}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // unidades de medida

  // porcentagem
  // ex: height: '50%'

  // px
  // ex: height: 50 (não é necessário colocar a unidade de medida px)

  // proporção
  // ex: flex: 1

  // conteúdo da main
  main: {
    flex: 1,
    backgroundColor: '#FAF7F7',
  },
  // cabeçalho
  mainHeader: {
    flex: 1,
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
    fontSize: 12,
    letterSpacing: 5,
    color: '#999',
  },
  // linha de separação do cabeçalho
  mainHeaderLine: {
    width: 220,
    paddingTop: 10,
    borderBottomColor: '#999',
    borderBottomWidth: 1,
  },

  // conteúdo do body
  mainBody: {
    flex: 4,
    color: ''
  },
  // conteúdo da lista
  mainBodyContent: {
    paddingRight: 50,
    paddingLeft: 50,
    backgroundColor: '',
  },

  titulo: {
    alignItems: 'center',
  },

  backGround: {
    backgroundColor: 'rgba(144, 199, 255, 0.9)',
    height: 230,
    borderRadius: 20,
    justifyContent: 'space-evenly',
    //alignItems: 'center',
  },
  // dados do evento de cada item da lista (ou seja, cada linha da lista)
  flatItemRow: {
    flexDirection: 'row',
    marginTop: 40,
  },
  flatItemContainer: {
    flex: 1,
    color: '#A4B0FA',
  },
  flatItemTitle: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  flatItemInfo: {
    fontSize: 14,
    color: '#fff',
    lineHeight: 28,
    marginLeft: '10%'
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