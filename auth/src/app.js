import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAHCQpdUWRYyF_nQMFo8D3BTxndZUYS6nA',
      authDomain: 'authentication-b18bf.firebaseapp.com',
      databaseURL: 'https://authentication-b18bf.firebaseio.com',
      projectId: 'authentication-b18bf',
      storageBucket: 'authentication-b18bf.appspot.com',
      messagingSenderId: '453776208495'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>An App!</Text>
      </View>
    );
  }
}

export default App;
