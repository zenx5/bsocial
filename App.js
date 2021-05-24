import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AsyncStorage from '@react-native-async-storage/async-storage'

//  views
import OnboardingScreen from './screens/OnboardingScreen'
import Login from './screens/Login'
import Signup from './screens/Signup'
import Home from './screens/Home'
import Contacts from './screens/Contacts'
import ListEvents from './screens/ListEvents'
import Settings from './screens/Settings'
import CreateEventStep1 from './screens/CreateEventStep1'
import CreateEventStep2 from './screens/CreateEventStep2'
import CreateEventStep3 from './screens/CreateEventStep3'

//  icons
import IconsSwitching from './components/Icons/IconsSwitching'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => (
        {
          tabBarIcon: ({ focused }) => {
            let iconName
            if (route.name === 'Home') {
              iconName = focused ? 'HomeOn' : 'HomeOff'
            } else if (route.name === 'Contacts') {
              iconName = focused ? 'ContactOn' : 'ContactOff'
            } else if (route.name === 'List') {
              iconName = focused ? 'ListOn' : 'ListOff'
            } else if (route.name === 'Settings') {
              iconName = focused ? 'SettingOn' : 'SettingOff'
            }

            return <IconsSwitching name={iconName} />
          }
        }
      )}
    >
      <Tab.Screen name='Home' component={Home} options={{ tabBarLabel: () => null }} />
      <Tab.Screen name='Contacts' component={Contacts} options={{ tabBarLabel: () => null }} />
      <Tab.Screen name='List' component={ListEvents} options={{ tabBarLabel: () => null }} />
      <Tab.Screen name='Settings' component={Settings} options={{ tabBarLabel: () => null }} />
    </Tab.Navigator>
  )
}

const Step1 = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Create Event Step 1' component={CreateEventStep1} />
    </Stack.Navigator>
  )
}

const Step2 = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Create Event Step 2' component={CreateEventStep2} />
    </Stack.Navigator>
  )
}

export default function App () {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null)

  const getDataLaunch = async () => {
    const value = await AsyncStorage.getItem('alreadyLaunched')
    console.log(value)

    if (value === null) {
      await AsyncStorage.setItem('alreadyLaunched', 'true')
      setIsFirstLaunch(true)
    } else {
      setIsFirstLaunch(false)
    }
  }

  useEffect(() => {
    getDataLaunch()
  }, [])

  console.log(isFirstLaunch)

  if (isFirstLaunch === null) {
    return null
  } else if (isFirstLaunch === true) {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode='none'>
          <Stack.Screen name='Onboarding' component={OnboardingScreen} />
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Signup' component={Signup} />
          <Stack.Screen name='MainTabs' component={MainTabs} />
          <Stack.Screen name='Create Event Step 1' component={Step1} />
          <Stack.Screen name='Create Event Step 2' component={Step2} />
          <Stack.Screen name='Create Event Step 3' component={CreateEventStep3} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode='none'>
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Signup' component={Signup} />
          <Stack.Screen name='MainTabs' component={MainTabs} />
          <Stack.Screen name='Create Event Step 1' component={Step1} />
          <Stack.Screen name='Create Event Step 2' component={Step2} />
          <Stack.Screen name='Create Event Step 3' component={CreateEventStep3} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
