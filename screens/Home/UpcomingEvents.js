import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useFonts, Poppins_700Bold } from '@expo-google-fonts/poppins'  //  eslint-disable-line
import AppLoading from 'expo-app-loading'

//  icons
import IconSettings from '../../components/Icons/IconSettings'

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
    flexDirection: 'column',
    paddingTop: 13,
    paddingBottom: 15,
    paddingHorizontal: 20,
    marginBottom: 12
  },

  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 11
  },

  text: {
    fontSize: 16,
    fontFamily: 'Poppins_700Bold',
    textTransform: 'uppercase',
    paddingLeft: 3
  },

  icon: {
    paddingRight: 50
  },

  containerMap: {
    width: 356,
    height: 243,
    borderRadius: 5,
    backgroundColor: '#00000020'
  }
})

export default UpcomingEvents
