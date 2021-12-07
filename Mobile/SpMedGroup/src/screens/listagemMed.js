import React, { Component } from 'react';
import { FlatList, Image, StyleSheet, Text, View, StatusBar } from 'react-native';

import api from '../services/api';
import Perfil from './perfil'
import { TouchableOpacity } from 'react-native-gesture-handler';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const bottomTab = createBottomTabNavigator();

import AsyncStorage from '@react-native-async-storage/async-storage';

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

        <View style={styles.mainStatusBar}>
          <StatusBar
            hidden={false}
          />

          <bottomTab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: () => {
                if (route.name === 'Perfil') {
                  return (
                    <Image
                      source={require('../../assets/img/profile.png')}
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
            <bottomTab.Screen name="Perfil" component={Perfil} />
          </bottomTab.Navigator>

        </View>
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

          <View>
            <Text style={styles.flatItemInfo}>Nome do Paciente: {item.idPacienteNavigation.nomePaciente}</Text>
            <Text style={styles.flatItemInfo}>Data de Nascimento: {Intl.DateTimeFormat("pt-BR", {
              year: 'numeric', month: 'short', day: 'numeric',
            }).format(new Date(item.idPacienteNavigation.nascimento))}</Text>

            <Text style={styles.flatItemInfo}>Telefone: {item.idPacienteNavigation.telefone}</Text>
            <Text style={styles.flatItemInfo}>Data da Consulta: {Intl.DateTimeFormat("pt-BR", {
              year: 'numeric', month: 'short', day: 'numeric',
              hour: 'numeric', minute: 'numeric',
              hour12: true
            }).format(new Date(item.dataHoraConsulta))}</Text>

            <Text style={styles.flatItemInfo}>Situação: {item.idSituacaoNavigation.descricaoSituacao}</Text>
          </View>
          <Text style={styles.flatItemInfoDescricao}>{item.descricaoConsulta}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 2,
    backgroundColor: 'rgba(25, 240, 84, 0.4)',
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
    paddingRight: 50,
    paddingLeft: 50,
    backgroundColor: '',
  },

  titulo: {
    alignItems: 'center',
  },

  backGround: {
    backgroundColor: '#AEF7C2',
    borderColor: '#FFF',
    borderWidth: 1,
    height: 145,
    width: 310,
    borderRadius: 20,
    justifyContent: 'space-evenly',
    //alignItems: 'center',
  },
  // dados do evento de cada item da lista (ou seja, cada linha da lista)
  flatItemRow: {
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: '15%'
  },
  flatItemContainer: {
    flex: 1,
    color: '#A4B0FA',
  },
  flatItemTitle: {
    fontFamily: 'Open Sans',
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  flatItemInfo: {
    fontFamily: 'Open Sans',
    fontSize: 12,
    color: '#000',
    marginLeft: '10%'
  },
  flatItemInfoDescricao: {
    fontFamily: 'Open Sans',
    fontSize: 12,
    color: 'rgba(22, 20, 20, 0.8)',
    marginLeft: '10%'
  },
  tabBarIcon: {
    width: 22,
    height: 22
  },




  mainStatusBar: {
    flex: 1,
    backgroundColor: '#F1F1F1'
  },

  // estilo dos ícones da tabBar
  tabBarIconL: {
    width: 41,
    height: 54,   
  },

  tabBarIconP: {
    width: 45,
    height: 46   
  },

  tabBarIconS: {
    width: 55,
    height: 46   
  }

});