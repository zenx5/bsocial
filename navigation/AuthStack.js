import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AsyncStorage from '@react-native-async-storage/async-storage'

//  screens
import Login from '../screens/Login'
import Signup from '../screens/Signup'
import OnboardingScreen from '../screens/OnboardingScreen'

const Stack = createStackNavigator()

const AuthStack = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null)
  let routeName

  const getDataLaunch = async () => {
    const value = await AsyncStorage.getItem('alreadyLaunched')

    if (value === null) {
      await AsyncStorage.setItem('alreadyLaunched', 'true')
      setIsFirstLaunch(true)
    } else {
      setIsFirstLaunch(false)
    }
  }

  useEffect(() => {
    let start = true
    if (start === true) {
      getDataLaunch()
    }
    console.log('auth stack')

    return () => { start = false }
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
      <Stack.Screen name='Onboarding' component={OnboardingScreen} />
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Signup' component={Signup} />
    </Stack.Navigator>
  )
}

export default AuthStack
