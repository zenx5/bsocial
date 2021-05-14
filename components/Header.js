import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const Header = () => {
  return (
    <View style={styles.container}>
      <Text>Hello!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: '10px'
  }
})

export default Header
