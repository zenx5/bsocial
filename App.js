import React from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

//  views
import Login from './views/Login.view'
import RegisterUser from './components/registerUser'

import Icons from './components/Icons/Icons'

//  Header Logo
const LogoBsocialBienvenida = () => {
  return (
    <View style={{ alignItems: 'center', backgroundColor: '#fff', paddingTop: 37 }}>
      <Icons name='BSocialBienvenida' />
    </View>
  )
}

const Stack = createStackNavigator()

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Register' component={RegisterUser} />
        <Stack.Screen name='Login' options={{ header: props => <LogoBsocialBienvenida {...props} /> }} component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
