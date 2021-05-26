import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './AuthStack'
import HomeTabs from './HomeTabs'
import AuthContext from '../context/Auth/AuthContext'
import AppLoading from 'expo-app-loading'

const Routes = () => {
  const { isLoading, userToken } = useContext(AuthContext)

  if (isLoading) {
    return <AppLoading />
  }
  console.log(userToken)
  return (
    <NavigationContainer>
      {userToken === null ? <AuthStack /> : <HomeTabs />}
    </NavigationContainer>
  )
}

export default Routes
