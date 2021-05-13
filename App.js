import React from 'react'
import { StyleSheet, View } from 'react-native'

//  views
import Login from './components/Login' // eslint-disable-line

export default function App () {
  return (
    <View style={styles.container}>
      <Login />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
