// Homescreen.js
import React, { Component } from 'react';
import { Button, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.appname}> The Rooster App</Text>
            <Button
            title="About" 
            onPress={() => this.props.navigation.navigate('About')}
            />
            <Button
            title="Login" 
            onPress={() => this.props.navigation.navigate('Login')}
            />
            <Button
            title="My Schedule" 
            onPress={() => this.props.navigation.navigate('MySchedule')}
            />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  appname: {
    fontSize: 40,
    fontWeight: 'bold',
    alignSelf: 'center',
    flexDirection: 'row',
    shadowOffset:{  width: 3,  height: 3,  },
    shadowColor: 'black',
    shadowOpacity: 1.0
  },
  container: {
    padding: 20
   },
   input:{
       height: 40,
       backgroundColor: 'rgba(225,225,225,0.2)',
       marginBottom: 10,
       padding: 10,
       color: '#fff'
   },
   buttonContainer:{
       backgroundColor: '#2980b6',
       paddingVertical: 15
   },
   buttonText:{
       color: '#fff',
       textAlign: 'center',
       fontWeight: '700'
   }, 
   loginButton:{
     backgroundColor:  '#2980b6',
      color: '#fff'
   }
});