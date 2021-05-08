import React, { Component } from 'react'
import { Card, CardSection, Button } from './common'
import EmployeeForm from './EmployeeForm'

class EmployeeEdit extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Button>
            Save
          </Button>
        </CardSection>
      </Card>
    )
  }
}

export default EmployeeEdit