import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Pressable } from 'react-native'
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins'  //  eslint-disable-line
import AppLoading from 'expo-app-loading'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

//  icon
import IconBack from '../components/Icons/IconBack'
import IconCamera from '../components/Icons/IconCamera'
import IconSwitch from '../components/Icons/IconsSwitching'
import IconCheck from '../components/Icons/IconCheck'

const Signup = (props) => {
  //  fonts
  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_700Bold })

  //  checkbox
  const [checked, setChecked] = useState(false)
  const onCheckmarkPress = () => {
    if (checked === false) {
      setChecked(!false)
    } else {
      setChecked(false)
    }
  }

  //  password input
  const [secureTextEntry, setSecureTextEntry] = useState(true)

  const [eye, setEye] = useState('EyeOffBlack')

  const showPassword = () => {
    if (secureTextEntry === true) {
      setSecureTextEntry(false)
      setEye('Eye')
    } else {
      setSecureTextEntry(true)
      setEye('EyeOffBlack')
    }
  }

  //  on waiting for the fonts
  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.goBack()} style={styles.header_icon}>
          <IconBack />
        </TouchableOpacity>
        <Text style={styles.header_text}>Registra tu usuario</Text>
      </View>

      <Text style={styles.text}>Ingresa los siguientes datos para crear tu usuario</Text>

      {/* image input */}
      <TouchableOpacity style={styles.imageInput}>
        <IconCamera style={styles.iconCamera} />
      </TouchableOpacity>

      <TextInput placeholder='Nombre' placeholderTextColor='#000' style={styles.textInput} />

      <TextInput placeholder='Apellido' placeholderTextColor='#000' style={styles.textInput} />

      <TextInput placeholder='correo' placeholderTextColor='#000' style={styles.textInput} />

      {/* Password Input */}
      <View style={styles.passwordInputContainer}>
        <TextInput secureTextEntry={secureTextEntry} placeholder='Contraseña' placeholderTextColor='#000' style={styles.textInput} />
        <TouchableOpacity onPress={showPassword} style={styles.iconEyeContainer}>
          <IconSwitch name={eye} />
        </TouchableOpacity>
      </View>

      {/* CheckBox */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 48 }}>
        <Pressable onPress={onCheckmarkPress} style={[styles.checkboxBase, checked && styles.checkboxChecked]}>
          {checked && <IconCheck style={styles.iconCheck} />}
        </Pressable>
        <Text style={styles.checkBoxText}>He leído las terminos y políticas de la empresa</Text>
      </View>

      {/* Button */}
      <TouchableOpacity disabled={!checked} style={[styles.buttonDisable, checked && styles.buttonBase]}>
        <Text style={[styles.buttonTextDisable, checked && styles.buttonTextBase]}>Entrar</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: hp('3%') // ~22.9
  },

  header: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center'
  },

  header_icon: {
    marginLeft: wp('6%')
  },

  header_text: {
    fontSize: hp('2.4%'), //  ~18
    fontFamily: 'Poppins_700Bold',
    marginLeft: 23.5
  },

  text: {
    marginTop: hp('5.1%'), //  ~38
    marginBottom: hp('3.6%'), //  ~27
    fontSize: hp('1.6%'), //  12
    fontFamily: 'Poppins_400Regular'
  },

  imageInput: {
    backgroundColor: '#EBEBEB',
    width: wp('26%'), //  102~
    height: wp('26%'), //  102~
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp('2.5%') // 18~
  },

  iconCamera: {
    width: wp('11%'), //  43~~
    height: hp('5%') //  37~~
  },

  textInput: {
    backgroundColor: '#EBEBEB',
    borderRadius: 20,
    width: wp('74.3%'), //  291~
    height: hp('5.2%'), //  39~
    paddingLeft: wp('10%'), // 39~
    marginBottom: hp('2.4%'), //  18~
    fontSize: hp('1.5%'), //  11~~
    fontFamily: 'Poppins_400Regular'
  },

  passwordInputContainer: {
    position: 'relative',
    marginBottom: hp('4%') // 30~~
  },

  iconEyeContainer: {
    position: 'absolute',
    top: 10,
    right: 15
  },

  checkboxBase: {
    backgroundColor: '#EBEBEB',
    borderWidth: 0,
    borderRadius: 5,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },

  checkboxChecked: {
    backgroundColor: '#E1B21C'
  },

  checkBoxText: {
    color: '#231F20',
    marginLeft: 10,
    fontSize: hp('1.36%'), //  10~~
    fontFamily: 'Poppins_400Regular'
  },

  iconCheck: {
    width: 15,
    height: 15
  },

  buttonDisable: {
    backgroundColor: '#EBEBEB',
    width: wp('74.3%'), //  291~
    height: hp('7.5%'), //  57
    borderWidth: 0,
    borderRadius: 29,
    justifyContent: 'center'
  },

  buttonBase: {
    backgroundColor: '#E1B21C'
  },

  buttonTextDisable: {
    color: '#58595B',
    textAlign: 'center',
    fontSize: hp('2.4%'), //  ~18
    fontFamily: 'Poppins_700Bold',
    textTransform: 'uppercase'
  },

  buttonTextBase: {
    color: '#fff'
  }
})

export default Signup
