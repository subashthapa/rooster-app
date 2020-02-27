// Homescreen.js
import React, { Component } from 'react';
import { Button, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default class MySchedule extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.appname}>My schedules</Text>
         
        <View style={styles.container}>
          <View style={styles.heading}>
            <Text>Date and time</Text>
          </View>
          <View style={styles.heading}>
            <Text>Venue</Text>
          </View>
          <View style={styles.heading}>
            <Text>Options</Text>
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.content}>
            <Text>Sunday, 10:00 AM</Text>
          </View>
          <View style={styles.content}>
            <Text>Malvern Hotel</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.options}>...</Text>
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.content}>
            <Text>Monday, 10:00 AM</Text>
          </View>
          <View style={styles.content}>
            <Text>Malvern Hotel</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.options}>...</Text>
          </View>
        </View>
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
    padding: 2,
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