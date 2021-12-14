import 'react-native-gesture-handler';

import React, {Component} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {StatusBar, StyleSheet} from 'react-native';

import MainMed from './src/screens/mainMed';
import Login from './src/screens/login';
import MainPac from './src/screens/mainPac';
/* import CameraPerfil from './src/screens/camera'; */

const AuthStack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <StatusBar
          hidden={true}
        />
        <AuthStack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <AuthStack.Screen name="Login" component={Login} />
          <AuthStack.Screen name="MainMed" component={MainMed} />
          <AuthStack.Screen name="MainPac" component={MainPac} />
          {/* <AuthStack.Screen name="Camera" component={CameraPerfil} /> */}
          {/* <AuthStack.Screen name="ListaPac" component={ListaPac} />
          <AuthStack.Screen name="ListaMed" component={ListaMed} />
          <AuthStack.Screen name="Perfil" component={Perfil} /> */}
        </AuthStack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  // conteúdo da main
  main: {
    flex: 1,
    backgroundColor: '#3912A9',
  },

  // estilo dos ícones da tabBar
  tabBarIcon: {
    width: 22,
    height: 22,
  },
});

export default App;
