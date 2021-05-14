import React from 'react'
import { Text, View, Button } from 'react-native'

const RegisterUser = ({ navigation }) => {
  return (
    <View>
      <Button onPress={() => navigation.navigate('Login')} title='lol' />
      <Text>Registrate</Text>
    </View>
  )
}

export default RegisterUser
