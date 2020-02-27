// Homescreen.js
import React, { Component } from 'react';
import { Button, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Schedule Screen</Text>
          <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
/>
      </View>
    )
  }
}