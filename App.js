/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 *  createStackNavigator = crea un conjunto de pantallas y cuales son las que se quieren relacionar entre ellas 
 *  createSwitchNavigator = Enlaza los stack navigator , comunica todos los stack navigator
 */

import React, {Component} from 'react';
import 'react-native-gesture-handler';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './js/screens/HomeScreen';
import LoginScreen from './js/screens/LoginScreen';
import AuthLoadingScreen from './js/screens/AuthLoadingScreen';

//STACK DE AUHTENTICACION
const AuthStack = createStackNavigator({
  Login: LoginScreen,
});

const AppStack = createStackNavigator({
  Home: HomeScreen,
});

//CREAR EL CONJUNTO DE LOS STACKS
const SwitchNavigator = createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Auth: AuthStack,
  App: AppStack,
},{
  initialRouteName: 'AuthLoading',
});

const AppContainer = createAppContainer(SwitchNavigator);

export default class App extends Component{
  render(){
    return(
      <AppContainer/>
    );
  }
}