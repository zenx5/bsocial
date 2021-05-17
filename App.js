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
import CreateEvent from './screens/CreateEvent'
import HomeTest from './screens/Home/HomeTest'
import Settings from './screens/Settings'

//  Headers
import SignupHeader from './screens/Signup/SignupHeader'
import CreateEventHeader from './components/CreateEventHeader'

//  icons
import IconsSwitching from './components/Icons/IconsSwitching'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => (
        {
          tabBarIcon: ({ focused }) => {
            let iconName

            if (route.name === 'Home') {
              iconName = focused
                ? 'HomeOn'
                : 'HomeOff'
            } else if (route.name === 'Settings') {
              iconName = focused ? 'SettingOn' : 'SettingOff'
            }

            return <IconsSwitching name={iconName} />
          }
        }
      )}
    >
      <Tab.Screen name='Home' component={Home} options={{ tabBarLabel: () => null }} />
      <Tab.Screen name='Settings' component={Settings} options={{ tabBarLabel: () => null }} />
    </Tab.Navigator>
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
        <Stack.Screen name='Home' component={HomeTabs} options={{ header: () => null }} />
        <Stack.Screen name='Create Event' component={CreateEvent} options={{ header: props => <CreateEventHeader {...props} /> }} />
        <Stack.Screen name='test localizacion' component={HomeTest} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
