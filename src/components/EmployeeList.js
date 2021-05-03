import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, ListView } from 'react-native'
import { employeeFetch } from '../actions'

class EmployeeList extends Component {
  componentDidMount() {
    this.props.employeeFetch()
  }


  
  render() {
    return (
      <View>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
      </View>
    )
  }
}

export default connect(null, { employeeFetch })(EmployeeList)