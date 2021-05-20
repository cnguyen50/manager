import _ from 'lodash'
import React, { Component } from 'react'
import { Card, CardSection, Button } from './common'
import EmployeeForm from './EmployeeForm'
import { connect } from 'react-redux'
import { employeeUpdate, employeeSave } from '../actions'

class EmployeeEdit extends Component {
  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value })
    })
  }

  onButtonPress() {
    const { name, phone, shift} = this.props
    
    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid })
  }

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
          </Button>
        </CardSection>

        <CardSection>
          <Button></Button>
        </CardSection>
      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.EmployeeForm

  return { name, phone, shift }
}

export default connect(mapStateToProps, { employeeUpdate, employeeSave })(EmployeeEdit)