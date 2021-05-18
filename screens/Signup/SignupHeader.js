import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { useFonts, Poppins_700Bold } from '@expo-google-fonts/poppins'  //  eslint-disable-line
import AppLoading from 'expo-app-loading'

//  icons
import IconBack from '../../components/Icons/IconBack'

const SignupHeader = ({ navigation }) => {
  const [fontsLoaded] = useFonts({ Poppins_700Bold })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={{ backgroundColor: '#fff', paddingTop: 30, flexDirection: 'row' }}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 32 }}>
        <IconBack />
      </TouchableOpacity>
      <Text style={{ fontSize: 18, fontFamily: 'Poppins_700Bold', marginLeft: 23.5 }}>Registra tu usuario</Text>
    </View>
  )
}

export default SignupHeader
