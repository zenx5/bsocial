import React, { useState, useEffect, useContext } from 'react'
import { ActivityIndicator, ImageBackground, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import AuthContext from '../context/Auth/AuthContext'

//  screens
import AuthStack from './AuthStack'
import HomeTabs from './HomeTabs'


const Routes = () => {
  const { userToken, isAlreadyAuthenticatedUser } = useContext(AuthContext)

  useEffect(() => {
    isAlreadyAuthenticatedUser()
    console.log('router use effect')
  }, [])

  return (
    <NavigationContainer>
      { userToken !== null ? <HomeTabs /> : <AuthStack /> }
    </NavigationContainer>
  )
}

export default Routes
