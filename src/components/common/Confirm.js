import React from 'react'
import { Text, View, Modal } from 'react-native'
import { CardSection } from './CardSection'
import { Button } from './Button'

const Confirm = () => {
  return (
    <Modal>
      <View>
        <CardSection>
          <Text></Text>
        </CardSection>

        <CardSection>
          <Button></Button>
        </CardSection>
      </View>
    </Modal>
  )
}

export default { Confirm }