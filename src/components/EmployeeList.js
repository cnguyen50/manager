import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { View, Text, ListView } from 'react-native'
import { employeeFetch } from '../actions'

class EmployeeList extends Component {
  componentDidMount() {
    this.props.employeeFetch()

    this.createDataSource(this.props)
  }

  componentWillReceiveProps(nextProps) {
    //nextProps
    this.createDataSource(nextProps)
  }
  
  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    this.dataSource = ds.cloneWithRows(employees)
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

const mapStateToProps = state => {

}

export default connect(null, { employeeFetch })(EmployeeList)