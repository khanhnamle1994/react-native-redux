import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
