import React from 'react'
import { View, Text } from 'react-native'
import { useFonts, Poppins_700Bold } from '@expo-google-fonts/poppins'  //  eslint-disable-line
import AppLoading from 'expo-app-loading'

//  icons
import IconSettings from './Icons/IconSettings'

const UpcomingEvents = () => {
  const [fontsLoaded] = useFonts({ Poppins_700Bold })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 7, marginBottom: 11, backgroundColor: '#fff' }}>
        <Text style={{ fontSize: 16, fontFamily: 'Poppins_700Bold', textTransform: 'uppercase', paddingTop: 13, paddingLeft: 13 }}>Proximos Eventos</Text>
        <IconSettings style={{ paddingTop: 13, marginRight: 35 }} />
      </View>

      <Text>Maps</Text>
    </View>
  )
}

export default UpcomingEvents
