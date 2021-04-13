import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'
import firebase from 'firebase'
import LoginForm from './components/LoginForm'

class App extends Component {
  componentWillMount () {
    const firebaseConfig = {
      apiKey: 'AIzaSyC3auvPSYOZOFZd5fR63--X7yV6ewsDDT8',
      authDomain: 'manager-caa99.firebaseapp.com',
      projectId: 'manager-caa99',
      storageBucket: 'manager-caa99.appspot.com',
      messagingSenderId: '768408312701',
      appId: '1:768408312701:web:1ccb89b1e0c29b5ac38a14',
      measurementId: 'G-7D9ELZTZLK'
    };
    firebase.initializeApp(firebaseConfig);
  }
  render() {
    return (
      <Provider store={createStore()}>
        <LoginForm />
      </Provider>
    )
  }
}

export default App