import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'

const Button = ({ bgColor, broderColor, borderRadius, textColor, fontSize, width }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.textButton}>Entrar</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#E1B21C',
    width: '100%',
    paddingVertical: '16px',
    borderRadius: '29px',
    marginBottom: '20'
  },

  textButton: {
    color: '#fff',
    fontSize: '18px',
    fontFamily: 'Poppins-Bold',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'capitalize'
  }
})

export default Button
