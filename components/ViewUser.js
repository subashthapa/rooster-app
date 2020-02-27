// Homescreen.js
import React, { Component } from 'react';
import { Button, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default class ViewUser extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.appname}>List of employees</Text>
         
        <View style={styles.container}>
          <View style={styles.heading}>
            <Text>Name</Text>
          </View>
          <View style={styles.heading}>
            <Text>Starts</Text>
          </View>
          <View style={styles.heading}>
            <Text>Venue</Text>
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.content}>
            <Text>John Doe</Text>
          </View>
          <View style={styles.content}>
            <Text>10:00 AM</Text>
          </View>
          <View style={styles.content}>
            <Text>Malvern Hotel</Text>
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.content}>
            <Text>Michael Clark</Text>
          </View>
          <View style={styles.content}>
            <Text>12:30 PM</Text>
          </View>
          <View style={styles.content}>
            <Text>Malvern Hotel</Text>
          </View>
        </View>
        <Button
          title="Go to profile"
          onPress={() => this.props.navigation.navigate('Profile')}
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  },
  border: {
    borderRadius: 0,
    borderWidth: 0.5,
    borderColor: '#d6d7da'
  },
  heading: {
    padding: 10,
    fontSize: 28,
    fontWeight: 'bold',
    width: '33.3%',
    borderWidth: 0.5,
    borderColor: '#d6d7da'
  },
  content: {
    padding: 8,
    width: '33.3%',
    alignSelf: 'stretch',
    borderWidth: 0.5,
    borderColor: '#d6d7da'
  },
  options: {
    width: 20,
    height: 20,
    borderRadius: 20/2,
    borderColor: 'red',
    borderWidth: 0.5,
    alignSelf: 'center',
    alignItems: 'center',
    color: 'red',
    textAlign: 'center'
  }
});