import React, { Component } from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const bottomTab = createBottomTabNavigator();
//import jwtDecode from 'jwt-decode';

import Perfil from './perfil';
import ListaMed from './listagemMed';
//import ListaPac from './listaPac';

class MainMed extends Component {

  render(){
    return (
      <View style={styles.main}>
        <StatusBar 
          hidden={false}
        />

          <bottomTab.Navigator
            initialRouteName='ListaMed'
            
            screenOptions={ ({ route }) => ({
              tabBarIcon: () => {
                if (route.name === 'ListaMed') {
                  return(
                    <Image
                      //style={styles.tabBarIcon}
                      source={require('../../assets/img/img_consulta.png')}
                    />
                  )
                }
                if (route.name === 'Perfil') {
                  return(
                    <Image
                      //style={styles.tabBarIcon}
                      source={require('../../assets/img/profile_bar.png')}
                    />
                  )
                }
              },
              /*const valorToken = await AsyncStorage.getItem('userToken');
              screenOptions={ ({ route }) => ({
                tabBarIcon: () => {
                  if (route.name === 'ListaMed' && jwtDecode(valorToken).role === "3") {
                    return(
                      <Image
                        source={require('../../assets/img/img_consulta.png')}
                      />
                    )
                  }
                  if (route.name === 'ListaPac' && jwtDecode(valorToken).role === "2") {
                    return(
                      <Image
                        source={require('../../assets/img/img_consulta.png')}
                      />
                    )
                  }
                  if (route.name === 'Perfil') {
                    return(
                      <Image
                        source={require('../../assets/img/profile_bar.png')}
                      />
                    )
                  }
                }, */

              // React Navigation 6.x
              headerShown: false,
              tabBarShowLabel: false,
              tabBarActiveBackgroundColor: '#B727FF',
              tabBarInactiveBackgroundColor: '#DD99FF',
              // tabBarActiveTintColor: 'blue',
              // tabBarInactiveTintColor: 'red',
              tabBarStyle: { height: 50 }              
            }) }
          >
            <bottomTab.Screen name="ListaMed" component={ListaMed} />
            <bottomTab.Screen name="Perfil" component={Perfil} />
          </bottomTab.Navigator>        

      </View>
    );
  }
  
};

const styles = StyleSheet.create({

  // conteúdo da main
  main: {
    flex: 1,
    //backgroundColor: '#3912A9',
  },

  // estilo dos ícones da tabBar
  tabBarIcon: {
    width: 22,
    height: 22
  }

});

export default MainMed;