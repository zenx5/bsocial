import React from 'react'
import { TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

//  icons
import IconEmail from '../../components/Icons/IconEmail'

const InputLogin = () => {
  return (
    <TouchableOpacity style={styles.loginContainer}>
      <IconEmail style={styles.iconLogin} />
      <TextInput placeholder='Email' placeholderTextColor='#000' keyboardType='email-address' style={styles.input} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  loginContainer: {
    position: 'relative',
    width: wp('71%'),
    borderBottomWidth: 1,
    borderBottomColor: '#70707016',
    marginBottom: hp('3.5%')
  },

  iconLogin: {
    position: 'absolute',
    left: 0,
    bottom: 5
  },

  input: {
    width: wp('71%'),
    fontSize: hp('1.8%'),
    paddingBottom: hp('1.5%'),
    paddingLeft: wp('8.3%')
  }
})

export default InputLogin
