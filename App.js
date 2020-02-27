import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import MySchedule from './components/MySchedule'
import Profile from './components/Profile'
import AddUser from './components/AddUser'
import ViewUser from './components/ViewUser'

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
  About: {
    screen: About
  },
  Login: {
    screen: Login
  },
  Profile: {
    screen: Profile
  },
  MySchedule: {
    screen: MySchedule
  },
  AddUser: {
    screen: AddUser
  },
  ViewUser: {
    screen: ViewUser
  }
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
