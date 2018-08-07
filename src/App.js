import React, { Component } from 'react';
import { View, Text, } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyCm5mMV46JDZA2IzK8xZ7auqwQ8kBZOUGE",
      authDomain: "manager-f8aff.firebaseapp.com",
      databaseURL: "https://manager-f8aff.firebaseio.com",
      projectId: "manager-f8aff",
      storageBucket: "manager-f8aff.appspot.com",
      messagingSenderId: "181476142414"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)} >
        <View style={styles.container} >
         <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;

const styles= {
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  }
}