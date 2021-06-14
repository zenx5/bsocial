import React, { useEffect, useContext, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthContext from '../context/Auth/AuthContext'
import AsyncStorage from '@react-native-async-storage/async-storage'

//  screens
import AuthStack from './AuthStack'
import MainTabs from './MainTabs'

const Routes = () => {
  const { userToken, isAlreadyAuthenticatedUser } = useContext(AuthContext)

  useEffect(() => {
    (async () => {
      await isAlreadyAuthenticatedUser()
    })()
    console.log('render: routes.js')
  }, [userToken])

  return (
    <NavigationContainer>
      {userToken !== null ? <MainTabs /> : <AuthStack />}
    </NavigationContainer>
  )
}

export default Routes
