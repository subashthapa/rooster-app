// Homescreen.js
import React, { Component } from 'react';
import { Button, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default class Profile extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.appname}>Add new user</Text>
        <TextInput style = {styles.input} 
               autoCapitalize="none" 
               onSubmitEditing={() => this.passwordInput.focus()} 
               autoCorrect={false} 
               keyboardType='email-address' 
               returnKeyType="next" 
               placeholder='Enter name' 
               placeholderTextColor='rgba(0,0,0,0.7)'/>

        <TextInput style = {styles.input} 
               autoCapitalize="none" 
               onSubmitEditing={() => this.passwordInput.focus()} 
               autoCorrect={false} 
               keyboardType='email-address' 
               returnKeyType="next" 
               placeholder='Enter address' 
               placeholderTextColor='rgba(0,0,0,0.7)'/>

        <TextInput style = {styles.input} 
               autoCapitalize="none" 
               onSubmitEditing={() => this.passwordInput.focus()} 
               autoCorrect={false} 
               keyboardType='email-address' 
               returnKeyType="next" 
               placeholder='Enter phone number' 
               placeholderTextColor='rgba(0,0,0,0.7)'/>
        <TextInput style = {styles.input} 
               autoCapitalize="none" 
               onSubmitEditing={() => this.passwordInput.focus()} 
               autoCorrect={false} 
               keyboardType='email-address' 
               returnKeyType="next" 
               placeholder='Enter position' 
               placeholderTextColor='rgba(0,0,0,0.7)'/>

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
             <Text  style={styles.buttonText}>Save</Text>
        </TouchableOpacity> 

        <Button
          title="Cancel"
          onPress={() => this.props.navigation.navigate('Home')}
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
});