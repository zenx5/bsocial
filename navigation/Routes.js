import React, { useEffect, useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthContext from '../context/Auth/AuthContext'

//  screens
import AuthStack from './AuthStack'
import MainTabs from './MainTabs'

const Routes = () => {
  const { userToken, isAlreadyAuthenticatedUser } = useContext(AuthContext)

  useEffect(() => {
    (async () => {
      isAlreadyAuthenticatedUser()
    })()
  }, [userToken])

  return (
    <NavigationContainer>
      {userToken !== null ? <MainTabs /> : <AuthStack />}
    </NavigationContainer>
  )
}

export default Routes
