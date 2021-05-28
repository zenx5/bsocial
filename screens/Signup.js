import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Pressable, Alert, ActivityIndicator } from 'react-native'
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins'  //  eslint-disable-line
import AppLoading from 'expo-app-loading'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import * as ImagePicker from 'expo-image-picker'
import AuthContext from '../context/Auth/AuthContext'

//  icon
import IconBack from '../components/Icons/IconBack'
import IconCamera from '../components/Icons/IconCamera'
import IconSwitch from '../components/Icons/IconsSwitching'
import IconCheck from '../components/Icons/IconCheck'

const Signup = (props) => {
  //  context
  const { signUp, isEmailInUse, createdUser, onVerifying } = useContext(AuthContext)

  //  fonts
  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_700Bold })

  const initialState = {
    name: '',
    lastName: '',
    email: '',
    password: '',
    checked: false,
    secureTextEntry: true,
    iconEye: 'EyeOffBlack',
    activateButton: false,
    isValidName: true,
    nameEmpty: false,
    isValidLastName: true,
    lastNameEmpty: false,
    isValidEmail: true,
    emailEmpty: false,
    isValidPassword: true,
    passwordEmpty: false
  }

  //  state
  const [data, setData] = useState(initialState)

  //  show password
  const showPassword = () => {
    if (data.secureTextEntry === true) {
      setData({ ...data, secureTextEntry: false, iconEye: 'Eye' })
    } else {
      setData({ ...data, secureTextEntry: true, iconEye: 'EyeOffBlack' })
    }
  }

  //  checkbox
  const onCheckmarkPress = () => {
    if (data.checked === false) {
      setData({ ...data, checked: true })
    } else {
      setData({ ...data, checked: false })
    }
  }

  //  input handler name
  const handleNameInput = (value) => {
    if (value.length >= 3) {
      setData({
        ...data,
        name: value,
        isValidName: true,
        nameEmpty: false
      })
    }

    if (value.length === 0) {
      setData({
        ...data,
        name: value,
        nameEmpty: true
      })
    }

    if (value.length < 3 && value.length > 0) {
      setData({
        ...data,
        name: value,
        isValidName: false,
        nameEmpty: false
      })
    }
  }

  //  input handler lastName
  const handleLastNameInput = (value) => {
    if (value.length >= 3) {
      setData({
        ...data,
        lastName: value,
        isValidLastName: true,
        lastNameEmpty: false
      })
    }

    if (value.length === 0) {
      setData({
        ...data,
        lastName: value,
        lastNameEmpty: true
      })
    }

    if (value.length < 3 && value.length > 0) {
      setData({
        ...data,
        lastName: value,
        isValidLastName: false,
        lastNameEmpty: false
      })
    }
  }

  //   input handler Email
  const handleEmailInput = (value) => {
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i

    if (emailRegex.test(value)) {
      setData({
        ...data,
        email: value.trim(),
        isValidEmail: true,
        emailEmpty: false
      })
    } else if (value.length === 0) {
      setData({
        ...data,
        email: value,
        emailEmpty: true
      })
    } else {
      setData({
        ...data,
        email: value,
        isValidEmail: false,
        emailEmpty: false
      })
    }
  }

  //   input handler Password
  const handlePasswordInput = (value) => {
    if (value.length >= 6) {
      setData({
        ...data,
        password: value,
        isValidPassword: true,
        passwordEmpty: false
      })
    } else if (value.length === 0) {
      setData({
        ...data,
        password: value,
        passwordEmpty: true
      })
    } else {
      setData({
        ...data,
        password: value,
        isValidPassword: false,
        passwordEmpty: false
      })
    }
  }

  //  activation of the button
  useEffect(() => {
    if (
      data.name &&
      data.lastName &&
      data.email &&
      data.password &&
      data.checked &&
      data.isValidName &&
      data.isValidLastName &&
      data.isValidEmail &&
      data.isValidPassword &&
      !data.nameEmpty &&
      !data.lastNameEmpty &&
      !data.emailEmpty &&
      !data.passwordEmpty
    ) {
      if (data.activateButton === false) {
        setData({ ...data, activateButton: true })
      }
    } else {
      if (data.activateButton === true) {
        setData({ ...data, activateButton: false })
      }
    }
  }, [data.name, data.lastName, data.email, data.password, data.checked])

  //  submit
  const onSignUp = () => {
    signUp({
      name: data.name,
      lastName: data.lastName,
      email: data.email,
      password: data.password
    })

    setData(initialState)
  }

  useEffect(() => {
    if (isEmailInUse) {
      Alert.alert(
        'Error',
        'Este email ya esta en uso!',
        [
          { text: 'Ok' }
        ],
        { cancelable: false }
      )
    }

    if (createdUser) {
      Alert.alert(
        '',
        '¡Usuario creado satisfactoriamente!',
        [
          { text: 'OK' }
        ],
        { cancelable: false }
      )
    }
  }, [isEmailInUse, createdUser])

  //  on waiting for the fonts
  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={[styles.container]}>
      {
        onVerifying
          ? <ActivityIndicator size='large' color='#00000050' style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, zIndex: 100 }} />
          : null
      }

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

      {/* name input */}
      <TextInput
        placeholder='Nombre'
        placeholderTextColor='#000'
        style={styles.textInput}
        value={data.name}
        onChangeText={handleNameInput}
      />
      {data.isValidName ? null : (data.nameEmpty ? <Text style={styles.errorMessage}>El Nombre es Requerido!</Text> : <Text style={styles.errorMessage}>El Nombre debe tener al menos 3 caracteres</Text>)}

      {/* lastName input */}
      <TextInput
        placeholder='Apellido'
        placeholderTextColor='#000'
        style={styles.textInput}
        value={data.lastName}
        onChangeText={handleLastNameInput}
      />
      {data.isValidLastName ? null : (data.lastNameEmpty ? <Text style={styles.errorMessage}>El Apellido es Requerido!</Text> : <Text style={styles.errorMessage}>El Apellido debe tener al menos 3 caracteres</Text>)}

      {/* email input */}
      <TextInput
        placeholder='correo'
        keyboardType='email-address'
        autoCapitalize='none'
        placeholderTextColor='#000'
        style={styles.textInput}
        value={data.email}
        onChangeText={handleEmailInput}
      />
      {data.isValidEmail ? null : (data.emailEmpty ? <Text style={styles.errorMessage}>El Email es Requerido!</Text> : <Text style={styles.errorMessage}>Ingrese un Email Valido</Text>)}

      {/* Password Input */}
      <View style={styles.passwordInputContainer}>
        <TextInput
          placeholder='Contraseña'
          secureTextEntry={data.secureTextEntry}
          autoCompleteType='off'
          placeholderTextColor='#000'
          style={styles.textInput}
          value={data.password}
          onChangeText={handlePasswordInput}
        />
        <TouchableOpacity onPress={showPassword} style={styles.iconEyeContainer}>
          <IconSwitch name={data.iconEye} style={styles.iconEye} />
        </TouchableOpacity>
        {data.isValidPassword ? null : (data.passwordEmpty ? <Text style={styles.errorMessage}>La Contraseña es Requerida!</Text> : <Text style={styles.errorMessage}>Debe tener al menos 6 caracteres</Text>)}
      </View>

      {/* CheckBox */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 48 }}>
        <Pressable onPress={onCheckmarkPress} style={[styles.checkboxBase, data.checked && styles.checkboxChecked]}>
          {data.checked && <IconCheck style={styles.iconCheck} />}
        </Pressable>
        <Text style={styles.checkBoxText}>He leído las terminos y políticas de la empresa</Text>
      </View>

      {/* Button */}
      <TouchableOpacity
        disabled={!data.activateButton}
        style={[styles.buttonDisable, data.activateButton && styles.buttonBase]}
        onPress={onSignUp}
      >
        <Text style={[styles.buttonTextDisable, data.activateButton && styles.buttonTextBase]}>Entrar</Text>
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

  iconEye: {
    width: hp('3.2%'), // 21~~
    height: hp('2.7%') //  18~~
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
  },

  errorMessage: {
    textAlign: 'center',
    fontSize: hp('1.7%'), //  11~~
    color: '#DD4C4C',
    marginTop: hp('-2%'), //  -13~~
    marginBottom: hp('1.2%') // 8~~
  }
})

export default Signup
