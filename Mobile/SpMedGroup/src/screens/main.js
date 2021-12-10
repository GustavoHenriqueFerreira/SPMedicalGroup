/* import React, { Component } from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const bottomTab = createBottomTabNavigator();

import Perfil from './perfil';
import ListaMed from './listagemMed';
//import Perfil from './listaPac';

class Main extends Component {

  render(){
    return (
      <View style={styles.main}>
        <StatusBar 
          hidden={false}
        />

          <bottomTab.Navigator
            initialRouteName='ListaMed'

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
            
            screenOptions={ ({ route }) => ({
              tabBarIcon: () => {
                if (route.name === 'ListaMed') {
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
              },

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
    backgroundColor: '#F1F1F1'
  },

  // estilo dos ícones da tabBar
  tabBarIcon: {
    width: 22,
    height: 22
  }

});

export default Main; */