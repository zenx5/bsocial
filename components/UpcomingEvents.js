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
      <View style={styles.containerHeader}>
        <Text style={styles.text}>Proximos Eventos</Text>
        <IconSettings style={styles.icon} />
      </View>
      <View style={styles.containerMap} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 11,
    paddingHorizontal: 20,
    marginVertical: 9
  },

  containerHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 11
  },

  text: {
    fontSize: 16,
    fontFamily: 'Poppins_700Bold',
    textTransform: 'uppercase'
  },

  icon: {
    paddingRight: 15
  },

  containerMap: {
    width: 356,
    height: 243,
    borderRadius: 5,
    backgroundColor: '#00000020'
  }
})

export default UpcomingEvents
