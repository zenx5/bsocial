import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const CreateEventStep2 = () => {
  return (
    <View style={styles.container}>
      <Text>Create event step 2</Text>
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
    paddingTop: 24
  }
})

export default CreateEventStep2
