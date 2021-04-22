import React from 'react'
import { Scene, Router } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import EmployeeList from './components/EmployeeList'

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 75 }}>
      <Scene key ="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Please Login"/>
        </Scene>
        <Scene key="main">
          <Scene
            rightTitle="Add"
            onRight={() => {console.log("testing")}}
            key ="employeeList" 
            component={EmployeeList} 
            title="Employees" 
            initial 
          />
        </Scene> 
      </Scene>
    </Router>
  )
}

export default RouterComponent