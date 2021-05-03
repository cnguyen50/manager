import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, ListView } from 'react-native'
import { employeeFetch } from '../actions'

class EmployeeList extends Component {
  componentDidMount() {
    this.props.employeeFetch()

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    this.dataSource = ds.cloneWithRows(this.props.employees)
  }

  componentWillReceiveProps(nextProps) {
    //nextProps
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