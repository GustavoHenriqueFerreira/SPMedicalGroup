import React, { Component } from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const bottomTab = createBottomTabNavigator();

import PerfilPac from './perfilPac';
import ListaPac from './listagemPac';

class MainPac extends Component {

  render(){
    return (
      <View style={styles.main}>
        <StatusBar 
          hidden={false}
        />

          <bottomTab.Navigator
            initialRouteName='ListaPac'
            
            screenOptions={ ({ route }) => ({
              tabBarIcon: () => {
                if (route.name === 'ListaPac') {
                  return(
                    <Image
                      //style={styles.tabBarIcon}
                      source={require('../../assets/img/img_consulta.png')}
                    />
                  )
                }
                if (route.name === 'PerfilPac') {
                  return(
                    <Image
                      //style={styles.tabBarIcon}
                      source={require('../../assets/img/profile_bar.png')}
                    />
                  )
                }
              },

              // React Navigation 6.x
              headerShown: false,
              tabBarShowLabel: false,
              tabBarActiveBackgroundColor: '#214CE4',
              tabBarInactiveBackgroundColor: '#667BFF',
              // tabBarActiveTintColor: 'blue',
              // tabBarInactiveTintColor: 'red',
               tabBarStyle: { 
                height: 60, 
                borderTopWidth: 0,}         
            }) }
          >
            <bottomTab.Screen name="ListaPac" component={ListaPac} />
            <bottomTab.Screen name="PerfilPac" component={PerfilPac} />
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

export default MainPac;
