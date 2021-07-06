import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

// screens
import Home from '../screens/Home'
import ContactList from '../screens/ContactList'
import ListEvents from '../screens/ListEvents'
import Settings from '../screens/Settings'
import Event from '../screens/Event'
import CreateEventStepOne from '../screens/CreateEventStepOne'
import CreateEventStepTwo from '../screens/CreateEventStepTwo'
import CreateEventStepThree from '../screens/CreateEventStepThree'

//  icons
import IconsSwitching from '../components/Icons/IconsSwitching'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => (
        {
          tabBarIcon: ({ focused }) => {
            let iconName
            if (route.name === 'Home') {
              iconName = focused ? 'HomeOn' : 'HomeOff'
            } else if (route.name === 'ContactList') {
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
      <Tab.Screen name='ContactList' component={ContactList} options={{ tabBarLabel: () => null }} />
      <Tab.Screen name='List' component={ListEvents} options={{ tabBarLabel: () => null }} />
      <Tab.Screen name='Settings' component={Settings} options={{ tabBarLabel: () => null }} />
    </Tab.Navigator>
  )
}

const MainTabs = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={HomeTabs}
        options={{ header: () => null }}
      />

      <Stack.Screen
        name='Event'
        component={Event}
        options={{ header: () => null }}
      />

      <Stack.Screen
        name='Create Event Step One'
        component={CreateEventStepOne}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name='Create Event Step Two'
        component={CreateEventStepTwo}
        options={{ header: () => null }}
      />

      <Stack.Screen
        name='Create Event Step Three'
        component={CreateEventStepThree}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  )
}
export default MainTabs
