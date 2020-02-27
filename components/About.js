// Homescreen.js
import React, { Component } from 'react';
import { Button, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default class About extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.appname}>About</Text>
        <Text style={styles.about}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas laoreet sed leo quis dictum. Suspendisse potenti. Mauris aliquet elit condimentum, tristique sem vel, rhoncus nunc. Morbi accumsan commodo massa sed scelerisque. Ut quis efficitur erat. Nam consequat semper risus, euismod ultricies libero consectetur at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla rhoncus sapien eu nisl tempor rhoncus. Donec ut sollicitudin nisl. Phasellus tortor orci, condimentum eget scelerisque sit amet, pretium sed mauris. Maecenas feugiat ipsum vitae nibh auctor, ut accumsan diam viverra. Pellentesque nec est ut nisl auctor auctor vel a arcu.
        </Text>
        <Text style={styles.about}>
          Donec aliquet commodo dolor sit amet sagittis. Aenean elit enim, dapibus a iaculis sit amet, convallis eget ligula. Nullam cursus, nunc a ultricies porta, nisl lorem auctor nisl, et eleifend augue dolor vitae lorem. Quisque at lacus nisi. Pellentesque arcu libero, interdum sed velit et, dapibus maximus metus. Sed rutrum imperdiet risus sed volutpat. Pellentesque turpis est, bibendum ut libero in, vulputate condimentum augue. Sed nulla ante, congue non lorem ac, tempor tempus ligula. 
        </Text>
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
  about: {
    padding: 30
  }
});