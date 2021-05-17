import React, { useState, useEffect } from 'react'
import { Platform, Text, View, StyleSheet } from 'react-native'
import * as Location from 'expo-location'

export default function HomeTest () {
  const [location, setLocation] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)

  useEffect(() => {
    (async () => {
      if (Platform.OS === 'android') {
        setErrorMsg('error!!')
      } else {
        console.log('other platform -.> web')
      }

      const { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied')
        return
      }

      const location = await Location.getCurrentPositionAsync({})
      setLocation(location)
    })()
  }, [])

  let text = 'Waiting..'
  if (errorMsg) {
    text = errorMsg
  } else if (location) {
    text = JSON.stringify(location)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },

  text: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center'
  }
})
