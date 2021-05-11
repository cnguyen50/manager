import _ from 'lodash'
import React, { Component } from 'react'
import { Card, CardSection, Button } from './common'
import EmployeeForm from './EmployeeForm'
import { connect } from 'react-redux'
import { employeeUpdate } from '../actions'

class EmployeeEdit extends Component {
  componentWillMount() {

  }

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button>
            Save Changes
          </Button>
        </CardSection>
      </Card>
    )
  }
}

export default connect(null, { employeeUpdate })(EmployeeEdit)