import React, { Component } from 'react'
import { Card, CardSection, Input, Button } from './common'
import { connect } from 'react-redux'
import { emailChanged } from '../actions'

class LoginForm extends Component {
  onEmailChange(text) {

  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input 
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection>

        <CardSection>
          <Input 
            secureTextEntry
            label="password"
          />
        </CardSection>

        <CardSection>
          <Button>
            Login
          </Button>          
        </CardSection>
      </Card>
    )
  }
}

export default connect(null, {emailChanged})(LoginForm)