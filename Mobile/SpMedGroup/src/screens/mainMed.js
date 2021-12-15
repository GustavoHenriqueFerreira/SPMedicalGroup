import React, { Component } from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const bottomTab = createBottomTabNavigator();

import ListaMed from './listagemMed';
import PerfilMed from './perfilMed';
//import CameraPerfil from './camera';

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
                if (route.name === 'PerfilMed') {
                  return(
                    <Image
                      //style={styles.tabBarIcon}
                      source={require('../../assets/img/profile_bar.png')}
                    />
                  )
                }
                /* if (route.name === 'CameraPerfil') {
                  return(
                    <Image
                      //style={styles.tabBarIcon}
                      source={require('../../assets/img/profile_bar.png')}
                    />
                  )
                } */
              },

              // React Navigation 6.x
              headerShown: false,
              tabBarShowLabel: false,
              tabBarActiveBackgroundColor: '#2DDF5E',
              tabBarInactiveBackgroundColor: '#63E387',
              // tabBarActiveTintColor: 'blue',
              // tabBarInactiveTintColor: 'red',
              tabBarStyle: { height: 60 }              
            }) }
          >
            <bottomTab.Screen name="ListaMed" component={ListaMed} />
            <bottomTab.Screen name="PerfilMed" component={PerfilMed} />
            {/* <bottomTab.Screen name="Camera" component={CameraPerfil} /> */}
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