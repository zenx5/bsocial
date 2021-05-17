import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Pressable } from 'react-native'
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins'  //  eslint-disable-line
import AppLoading from 'expo-app-loading'

//  icon
import IconCamera from '../../components/Icons/IconCamera'
import IconSwitch from '../../components/Icons/IconsSwitching'
import IconCheck from '../../components/Icons/IconCheck'

const RegisterUser = () => {
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
      <Text style={styles.text}>Ingresa los siguientes datos para crear tu usuario</Text>

      <TouchableOpacity style={styles.imageInput}>
        <IconCamera style={{ with: 43.12, height: 37.73 }} />
      </TouchableOpacity>

      <TextInput placeholder='Nombre' placeholderTextColor='#000' style={styles.textInput} />

      <TextInput placeholder='Apellido' placeholderTextColor='#000' style={styles.textInput} />

      <TextInput placeholder='correo' placeholderTextColor='#000' style={styles.textInput} />

      {/* Password Input */}
      <View style={{ position: 'relative', marginBottom: 30 }}>
        <TextInput secureTextEntry={secureTextEntry} placeholder='Contraseña' placeholderTextColor='#000' style={styles.textInput} />
        <TouchableOpacity onPress={showPassword} style={{ position: 'absolute', top: 10, right: 15 }}>
          <IconSwitch name={eye} />
        </TouchableOpacity>
      </View>

      {/* CheckBox */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 48 }}>
        <Pressable onPress={onCheckmarkPress} style={[styles.checkboxBase, checked && styles.checkboxChecked]}>
          {checked && <IconCheck style={{ width: 15, height: 15 }} />}
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
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },

  text: {
    marginTop: 38,
    marginBottom: 27,
    fontSize: 12,
    fontFamily: 'Poppins_400Regular'
  },

  imageInput: {
    backgroundColor: '#EBEBEB',
    width: 102,
    height: 102,
    borderRadius: 20,
    justifyContent: 'center',
    marginBottom: 18
  },

  textInput: {
    backgroundColor: '#EBEBEB',
    borderRadius: 20,
    width: 291,
    height: 39,
    paddingLeft: 41,
    marginBottom: 18,
    fontSize: 11,
    fontFamily: 'Poppins_400Regular'
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
    fontSize: 10,
    fontFamily: 'Poppins_400Regular'
  },

  buttonDisable: {
    backgroundColor: '#EBEBEB',
    width: 291,
    height: 57,
    borderWidth: 0,
    borderRadius: 29
  },

  buttonBase: {
    backgroundColor: '#E1B21C'
  },

  buttonTextDisable: {
    color: '#58595B',
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Poppins_700Bold',
    textTransform: 'uppercase',
    paddingVertical: 16
  },

  buttonTextBase: {
    color: '#fff'
  }
})

export default RegisterUser
