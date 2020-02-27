// Homescreen.js
import React, { Component } from 'react';
import { Button, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default class About extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.appname}>Login</Text>

        <TextInput style = {styles.input} 
               autoCapitalize="none" 
               onSubmitEditing={() => this.passwordInput.focus()} 
               autoCorrect={false} 
               keyboardType='email-address' 
               returnKeyType="next" 
               placeholder='Enter username or email' 
               placeholderTextColor='rgba(0,0,0,0.7)'/>

        <TextInput style = {styles.input}   
              returnKeyType="go" 
              ref={(input)=> this.passwordInput = input} 
              placeholder='Enter your password' 
              placeholderTextColor='rgba(0,0,0,0.7)' 
              secureTextEntry/>

        <TouchableOpacity style={styles.buttonContainer} 
                     onPress={() => this.props.navigation.navigate('Profile')}>
             <Text  style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity> 

          <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
/>
      </View>
    )
  }
};

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
       backgroundColor: 'rgba(225,225,225,0.9)',
       marginVertical: 5,
       padding: 10,
       color: '#000',
       width: 300
   },
   buttonContainer:{
       backgroundColor: '#2980b6',
       paddingVertical: 10,
       paddingHorizontal: 40
   },
   buttonText:{
       color: '#fff',
       textAlign: 'center',
       fontWeight: '700',
       width: 50
   }, 
   loginButton:{
      backgroundColor:  '#2980b6',
      color: '#fff'
   }
});