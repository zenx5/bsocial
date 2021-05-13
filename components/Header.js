import React from 'react'
import { View, StyleSheet } from 'react-native'

//  components
import Button from './Button'

const Header = () => {
  return (
    <View style={styles.container}>
      <Button bgColor='#E1B21C' borderRadius='27px' text='Crear Evento' textColor='#fff' />
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
