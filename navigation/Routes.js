import React, { useEffect, useContext, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthContext from '../context/Auth/AuthContext'
import AsyncStorage from '@react-native-async-storage/async-storage'

//  screens
import AuthStack from './AuthStack'
import MainTabs from './MainTabs'

const Routes = () => {
  const { userToken, isAlreadyAuthenticatedUser } = useContext(AuthContext)
  const [isFirstLaunch, setIsFirstLaunch] = useState(null)
  let routeName

  useEffect(() => {
    (async () => {
      await isAlreadyAuthenticatedUser()

      const value = await AsyncStorage.getItem('alreadyLaunched')

      if (value === null) {
        await AsyncStorage.setItem('alreadyLaunched', 'true')
        setIsFirstLaunch(true)
      } else {
        setIsFirstLaunch(false)
      }
    })()
  }, [userToken, isFirstLaunch])

  return (
    <NavigationContainer>
      {userToken !== null ? <MainTabs /> : <AuthStack isFirstLaunch={isFirstLaunch} routeName={routeName} />}
    </NavigationContainer>
  )
}

export default Routes
