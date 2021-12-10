import React, { Component } from 'react';
import { FlatList, Image, StyleSheet, Text, View, StatusBar, ImageBackground } from 'react-native';

import api from '../services/api';
import ListaMed from './listagemMed';
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
    //console.warn(resposta.data[0])
    // recebe o corpo da resposta
    const dadosDaApi = resposta.data;
    // atualiza o state listaEventos com este corpo da requisição
    this.setState({ listaConsultas: dadosDaApi });
    //console.warn(dadosDaApi)
  };

  // quando o componente é renderizado
  componentDidMount() {
    // invoca a função abaixo
    this.buscarConsultasPac();
  }

  render() {
    return (
      <ImageBackground
        source={require('../../assets/img/background_ListaPac.png')}
        style={StyleSheet.absoluteFillObject}>
        <View style={styles.main}>
          {/* Cabeçalho - Header */}
          <View style={styles.mainHeader}>
            <View style={styles.mainHeaderRow}>
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
        </View>
      </ImageBackground>
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
  mainHeaderText: {
    fontSize: 16,
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

  backGround: {
    backgroundColor: 'rgba(35, 73, 207, 0.8)',
    borderColor: '#FFF',
    borderWidth: 1,
    width: 250,
    borderRadius: 20,
    //alignItems: 'center',
  },
  // dados do evento de cada item da lista (ou seja, cada linha da lista)
  flatItemRow: {
    borderRadius: 20,
    width: 250,
    height: 120,
    backgroundColor: '#277ED9',
    flexDirection: 'row',
    marginTop: '10%',
    marginBottom: '15%',
    borderWidth: 2,
    borderColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  flatItemContainer: {
    flex: 1,
    color: '#A4B0FA',
    //justifyContent: 'space-evenly',
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
    marginLeft: '10%'
  },
  mainStatusBar: {
    height: 70,
    backgroundColor: '#F1F1F1'
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