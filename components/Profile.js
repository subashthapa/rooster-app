// Homescreen.js
import React, { Component } from 'react';
import { Button, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default class Profile extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.appname}>HI SUBASH</Text>

        <Button
          title="Add new user"
          onPress={() => this.props.navigation.navigate('AddUser')}
        />
        <Button
          title="View users"
          onPress={() => this.props.navigation.navigate('ViewUser')}
        />        
        <Button
          title="My Schedules"
          onPress={() => this.props.navigation.navigate('MySchedule')}
        />
        <Button
          title="Go to Home"
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
});