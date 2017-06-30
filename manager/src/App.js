import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyBwI7yo8WCMct59vfXzeRWGerKIKgYB-uc",
      authDomain: "manager-7bc43.firebaseapp.com",
      databaseURL: "https://manager-7bc43.firebaseio.com",
      projectId: "manager-7bc43",
      storageBucket: "",
      messagingSenderId: "1025362567096"
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
