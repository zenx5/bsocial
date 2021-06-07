import React, { useContext, useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import AuthContext from '../context/Auth/AuthContext'

// screens
import Home from '../screens/Home'
import Contacts from '../screens/Contacts'
import ListEvents from '../screens/ListEvents'
import Settings from '../screens/Settings'
import CreateEventStep1 from '../screens/CreateEventStep1'

//  icons
import IconsSwitching from '../components/Icons/IconsSwitching'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

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

const HomeTabs = () => {
  const { getAuthenticatedUserData } = useContext(AuthContext)

  useEffect(() => {
    getAuthenticatedUserData()
  }, [])

  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name='Home' component={MainTabs} />
      <Stack.Screen name='Create Event Screens' component={CreateEventStep1} />
    </Stack.Navigator>
  )
}
export default HomeTabs
