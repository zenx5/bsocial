import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins'  //  eslint-disable-line
import AppLoading from 'expo-app-loading'

//  views
import Login from './screens/Login'
import Signup from './screens/Signup'
import Home from './screens/Home'
import Contacts from './screens/Contacts'
import List from './screens/List'
import Settings from './screens/Settings'
import CreateEventStep1 from './screens/CreateEventStep1'
import CreateEventStep2 from './screens/CreateEventStep2'
import CreateEventStep3 from './screens/CreateEventStep3'
import HomeTest from './screens/Home/HomeTest'

//  Headers
import SignupHeader from './screens/Signup/SignupHeader'
import CreateEventStep1Header from './components/CreateEventStep1Header'
import CreateEventStep2Header from './components/CreateEventStep2Header'

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
      <Tab.Screen name='List' component={List} options={{ tabBarLabel: () => null }} />
      <Tab.Screen name='Settings' component={Settings} options={{ tabBarLabel: () => null }} />
    </Tab.Navigator>
  )
}

const Step1 = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Create Event Step 1' component={CreateEventStep1} options={{ header: () => null }} />
    </Stack.Navigator>
  )
}

const Step2 = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Create Event Step 2' component={CreateEventStep2} options={{ header: () => null }} />
    </Stack.Navigator>
  )
}

export default function App () {
  //  fonts
  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins700Bold: Poppins_700Bold })
  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} options={{ header: () => null }} />
        <Stack.Screen name='Signup' component={Signup} options={{ header: props => <SignupHeader {...props} /> }} />
        <Stack.Screen name='MainTabs' component={MainTabs} options={{ header: () => null }} />
        <Stack.Screen name='Create Event Step 1' component={Step1} options={{ header: props => <CreateEventStep1Header {...props} /> }} />
        <Stack.Screen name='Create Event Step 2' component={Step2} options={{ header: props => <CreateEventStep2Header {...props} /> }} />
        <Stack.Screen name='Create Event Step 3' component={CreateEventStep3} options={{ header: () => null }} />
        <Stack.Screen name='test localizacion' component={HomeTest} options={{ header: () => null }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
