import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { useFonts, Poppins_700Bold } from '@expo-google-fonts/poppins'  //  eslint-disable-line
import AppLoading from 'expo-app-loading'

//  icons
import IconClose from './Icons/IconClose'

const CreateEventHeader = ({ navigation }) => {
  const [fontsLoaded] = useFonts({ Poppins_700Bold })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={{ backgroundColor: '#fff', paddingTop: 27, paddingHorizontal: 30, flexDirection: 'row', justifyContent: 'space-between' }}>
      <Text style={{ fontSize: 18, fontFamily: 'Poppins_700Bold' }}>Crear evento</Text>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <IconClose />
      </TouchableOpacity>
    </View>
  )
}

export default CreateEventHeader
