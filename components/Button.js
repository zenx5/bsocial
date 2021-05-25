import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const Button = ({ text, styleButton, styleText, ...props }) => {
  return (
    <TouchableOpacity style={[styles.button, styleButton]} {...props}>
      <Text style={[styles.text, styleText]}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 29,
    width: wp('71%'),
    height: hp('8%'),
    justifyContent: 'center',
    alignItems: 'center'
  },

  text: {
    color: '#000',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: 'Poppins_700Bold'
  }
})

export default Button
