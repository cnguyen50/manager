import React from 'react'
import { Scene, Router } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import EmployeeList from './components/EmployeeList'

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 75 }}>
      <Scene key ="root">
        <Scene key="login" component={LoginForm} title="Please Login"/>
      </Scene>
    </Router>
  )
}

export default RouterComponent