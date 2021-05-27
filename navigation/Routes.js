import React, { useContext } from 'react'
import { ActivityIndicator, ImageBackground, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './AuthStack'
import HomeTabs from './HomeTabs'
import AuthContext from '../context/Auth/AuthContext'

const Routes = () => {
  const { isLoading, userToken } = useContext(AuthContext)

  if (isLoading) {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground source={require('../assets/splash.png')} style={{ flex: 1, resizeMode: 'cover', justifyContent: 'center' }}>
          <ActivityIndicator size='large' color='#ffffff50' />
        </ImageBackground>
      </View>
    )
  }
  console.log(userToken)
  return (
    <NavigationContainer>
      {userToken !== null ? <HomeTabs /> : <AuthStack />}
    </NavigationContainer>
  )
}

export default Routes
