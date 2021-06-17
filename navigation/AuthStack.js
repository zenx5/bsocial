import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AsyncStorage from '@react-native-async-storage/async-storage'

//  screens
import Login from '../screens/Login'
import Register from '../screens/Register'
import OnboardingScreen from '../screens/OnboardingScreen'

const Stack = createStackNavigator()

const AuthStack = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null)
  let routeName

  useEffect(() => {
    (async () => {
      const value = await AsyncStorage.getItem('alreadyLaunched')

      if (value === null) {
        await AsyncStorage.setItem('alreadyLaunched', 'true')
        setIsFirstLaunch(true)
      } else {
        setIsFirstLaunch(false)
      }
    })()
  }, [])

  if (isFirstLaunch === null) {
    return null
  } else if (isFirstLaunch === true) {
    routeName = 'Onboarding'
  } else {
    routeName = 'Login'
  }

  return (
    <Stack.Navigator initialRouteName={routeName} headerMode='none'>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Register' component={Register} />
      <Stack.Screen name='Onboarding' component={OnboardingScreen} />
    </Stack.Navigator>
  )
}

export default AuthStack
