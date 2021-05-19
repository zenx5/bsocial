import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const CreateEventStep3 = () => {
  const color = '#000'
  return (
    <View style={{ backgroundColor: { color } }}>
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

export default CreateEventStep3
