import React, { useContext, useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import AuthContext from '../context/Auth/AuthContext'

// screens
import Home from '../screens/Home'
import ContactsList from '../screens/ContactsList'
import ListEvents from '../screens/ListEvents'
import Settings from '../screens/Settings'
import CreateEventStep1 from '../screens/CreateEventStep1'
import CreateEventStep2 from '../screens/CreateEventStep2'

//  headers
import CreateEventStep1Header from '../components/CreateEventStep1/Header'
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
            } else if (route.name === 'ContactsList') {
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
      <Tab.Screen name='ContactsList' component={ContactsList} options={{ tabBarLabel: () => null }} />
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
    <Stack.Navigator>
      <Stack.Screen name='Home' component={MainTabs} options={{ header: () => null }} />
      <Stack.Screen
        name='Create Event Step 1'
        component={CreateEventStep1}
        options={{ header: props => <CreateEventStep1Header {...props} /> }}
      />
      <Stack.Screen name='Create Event Step 2' component={CreateEventStep2} />
    </Stack.Navigator>
  )
}
export default HomeTabs
