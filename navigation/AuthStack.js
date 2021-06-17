import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

//  screens
import Login from '../screens/Login'
import Register from '../screens/Register'
import OnboardingScreen from '../screens/OnboardingScreen'

const Stack = createStackNavigator()

const AuthStack = ({ isFirstLaunch, routeName }) => {
  // const [isFirstLaunch, setIsFirstLaunch] = useState(null)
  // let routeName
  // let value

  // useEffect(() => {
  //   (async () => {
  //     value = await AsyncStorage.getItem('alreadyLaunched')

  //     if (value === null) {
  //       await AsyncStorage.setItem('alreadyLaunched', 'true')
  //       setIsFirstLaunch(true)
  //     } else {
  //       setIsFirstLaunch(false)
  //     }
  //   })()
  // }, [])

  if (isFirstLaunch === null) {
    return null
  } else if (isFirstLaunch === true) {
    routeName = 'Onboarding'
  } else {
    routeName = 'Login'
  }

  return (
    <Stack.Navigator initialRouteName={routeName}>
      <Stack.Screen name='Onboarding' component={OnboardingScreen} options={{ header: () => null }} />
      <Stack.Screen name='Login' component={Login} options={{ header: () => null }} />
      <Stack.Screen name='Register' component={Register} options={{ header: () => null }} />
    </Stack.Navigator>
  )
}

export default AuthStack
