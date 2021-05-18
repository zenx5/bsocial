import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
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
    <View style={styles.container}>
      <Text style={styles.text}>Proximos Eventos</Text>
      <IconSettings style={styles.icon} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginTop: 7
  },

  text: {
    fontSize: 16,
    fontFamily: 'Poppins_700Bold',
    textTransform: 'uppercase'
  },

  icon: {
    paddingRight: 15
  }
})

export default UpcomingEvents
