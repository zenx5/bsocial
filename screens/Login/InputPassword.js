import React, { useState } from 'react'
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

//  icons / logos
import IconPassword from '../../components/Icons/IconPassword'
import IconsSwitching from '../../components/Icons/IconsSwitching'

const InputPassword = () => {
  const [secureTextEntry, setSecureTextEntry] = useState(true)
  const [eye, setEye] = useState('EyeOff')
  const showPassword = () => {
    if (secureTextEntry === true) {
      setSecureTextEntry(false)
      setEye('Eye')
    } else {
      setSecureTextEntry(true)
      setEye('EyeOff')
    }
  }

  return (
    <View style={styles.passwordContainer}>
      <IconPassword style={styles.iconPassword} />
      <TextInput secureTextEntry={secureTextEntry} placeholder='Contraseña' placeholderTextColor='#000' style={styles.input} />
      <TouchableOpacity onPress={showPassword} style={styles.iconEye}>
        <IconsSwitching name={eye} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  passwordContainer: {
    position: 'relative',
    width: wp('71%'),
    borderBottomWidth: 1,
    borderBottomColor: '#70707016',
    marginBottom: hp('4.5%')
  },

  iconPassword: {
    position: 'absolute',
    left: 0,
    bottom: 5
  },

  input: {
    width: wp('71%'),
    fontSize: hp('1.8%'),
    paddingBottom: hp('1.5%'),
    paddingLeft: wp('8.3%')
  },

  iconEye: {
    position: 'absolute',
    top: 0,
    right: 0
  }
})

export default InputPassword
