import React, { useEffect, useContext, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthContext from '../context/Auth/AuthContext'
import AppLoading from 'expo-app-loading'

//  screens
import AuthStack from './AuthStack'
import MainTabs from './MainTabs'

const Routes = () => {
  const { userIsAuthenticated, clientAuth, userToken } = useContext(AuthContext)

  const [notReady, setNotReady] = useState(true)

  useEffect(() => {
    (async () => {
      try {
        await clientAuth()
        setNotReady(false)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [userToken])

  if (notReady) {
    return <AppLoading />
  }

  return (
    <NavigationContainer>
      {userIsAuthenticated === true ? <MainTabs /> : <AuthStack />}
    </NavigationContainer>
  )
}

export default Routes
