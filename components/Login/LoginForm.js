import React, { useState } from 'react'
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

//  icons
import IconEmail from '../Icons/IconEmail'
import IconPassword from '../Icons/IconPassword'
import IconsSwitching from '../Icons/IconsSwitching'

const LoginForm = () => {
  const [state, setState] = useState({
    secureTextEntry: true,
    iconEye: 'EyeOff',
    isValidEmail: false
  })

  //  input handler email
  const inputHandlerEmail = (value) => {
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i

    if (emailRegex.test(value)) {
      setState({ ...state, email: value.trim(), isValidEmail: true })
    } else {
      setState({ ...state, email: value.trim(), isValidEmail: false })
    }
  }

  //  input handler password
  const inputHandlerPassword = (value) => {
    setState({ ...state, password: value })
  }

  //  show password
  const showPassword = () => {
    if (state.secureTextEntry === true) {
      setState({ ...state, secureTextEntry: false, iconEye: 'Eye' })
    } else {
      setState({ ...state, secureTextEntry: true, iconEye: 'EyeOff' })
    }
  }

  return (
    <View>
      <View style={styles.inputContainer}>
        <View style={styles.inputIcon}>
          <IconEmail />
        </View>

        {/* email */}
        <TextInput
          placeholder='Email'
          placeholderTextColor='#000'
          keyboardType='email-address'
          autoCapitalize='none'
          style={styles.input}
          onChangeText={inputHandlerEmail}
        />
      </View>

      {/* password */}
      <View style={styles.inputContainer}>
        <View style={styles.inputIcon}>
          <IconPassword />
        </View>
        <TextInput
          secureTextEntry={state.secureTextEntry}
          placeholder='Contraseña'
          placeholderTextColor='#000'
          style={styles.input}
          onChangeText={inputHandlerPassword}
        />
        <TouchableOpacity
          onPress={showPassword}
          style={styles.iconEyeContainer}
        >
          <IconsSwitching name={state.iconEye} style={styles.iconEye} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default LoginForm

const styles = StyleSheet.create({
  inputContainer: {
    position: 'relative',
    width: wp('71%'),
    borderBottomWidth: 1,
    borderBottomColor: '#70707016',
    marginBottom: hp('4.5%')
  },

  inputIcon: {
    position: 'absolute',
    left: 0,
    bottom: 5
  },

  input: {
    width: wp('71%'),
    fontSize: hp('1.8%'),
    paddingBottom: hp('1%'),
    paddingLeft: wp('10%'),
    fontFamily: 'Poppins_300Light'
  },

  iconEyeContainer: {
    position: 'absolute',
    top: 0,
    right: 0
  },

  iconEye: {
    width: hp('3.2%'), // 21~~
    height: hp('2.7%') //  18~~
  }
})
