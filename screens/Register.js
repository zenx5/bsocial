import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet, Text, View, Image, Platform, TouchableOpacity, TextInput, Pressable, Alert } from 'react-native'
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins'  //  eslint-disable-line
import AppLoading from 'expo-app-loading'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import * as ImagePicker from 'expo-image-picker'
import { StatusBar } from 'expo-status-bar'
import AuthContext from '../context/Auth/AuthContext'

//  components
import Loading from '../components/Loading'

//  icon
import IconBack from '../components/Icons/IconBack'
import IconCamera from '../components/Icons/IconCamera'
import IconSwitch from '../components/Icons/IconsSwitching'
import IconCheck from '../components/Icons/IconCheck'

const Register = (props) => {
  //  context
  const { register, isEmailInUse, createdUser, loading } = useContext(AuthContext)

  //  fonts
  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_700Bold })

  const initialState = {
    photo: null,
    name: '',
    lastName: '',
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    nameEmpty: false,
    usernameEmpty: false,
    lastNameEmpty: false,
    emailEmpty: false,
    phoneEmpty: false,
    passwordEmpty: false,
    checked: false,
    secureTextEntry: true,
    iconEye: 'EyeOffBlack',
    activateButton: false,
    isValidName: true,
    isValidUsername: true,
    isValidLastName: true,
    isValidEmail: true,
    isValidPhone: true,
    isValidPassword: true,
    isValidConfirmPassword: true
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

  //  checkbox[]
  const onCheckmarkPress = () => {
    if (data.checked === false) {
      setData({ ...data, checked: true })
    } else {
      setData({ ...data, checked: false })
    }
  }

  //  input handler image
  const inputHanlderImage = async () => {
    // permissions
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
      if (status !== 'granted') {
        Alert('Se requiere acceso a la galeria de imagenes!')
      } else {
        const result = await ImagePicker.launchImageLibraryAsync({
          quality: 0.5
        })
        if (!result.cancelled) {
          setData({ ...data, photo: result.uri })
        }
      }
    }
  }

  //  --> name, input handler
  const nameInputHandler = (value) => {
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

  //  --> lastname, input handler
  const lastNameInputHandler = (value) => {
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

  //  -->  username, input handler
  const usernameInputHandler = (value) => {
    if (value.length >= 5) {
      setData({
        ...data,
        username: value,
        isValidUsername: true,
        usernameEmpty: false
      })
    }

    if (value.length === 0) {
      setData({
        ...data,
        username: value,
        usernameEmpty: true
      })
    }

    if (value.length < 5 && value.length > 0) {
      setData({
        ...data,
        username: value,
        isValidUsername: false,
        usernameEmpty: false
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

  // -->    phone, input handler
  const phoneInputHandler = (value) => {
    const phoneRegex = /\+([0-9]*)?/i

    if (phoneRegex.test(value)) {
      setData({
        ...data,
        phone: value,
        isValidPhone: true,
        phoneEmpty: false
      })
    } else if (value.length === 0) {
      setData({
        ...data,
        phone: value,
        phoneEmpty: true
      })
    } else {
      setData({
        ...data,
        phone: value,
        isValidPhone: false,
        phoneEmpty: false
      })
    }
  }

  //  -->   password input  handler
  const passwordInputHandler = (value) => {
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

  //  -->   confirm password
  const confirmPasswordHanlder = (value) => {
    if (value === data.password) {
      setData({
        ...data,
        confirmPassword: value,
        isValidConfirmPassword: true
      })
    } else {
      setData({
        ...data,
        confirmPassword: value,
        isValidConfirmPassword: false
      })
    }
  }

  //  -->   activation of the button
  useEffect(() => {
    if (
      data.photo &&
      data.name &&
      data.lastName &&
      data.username &&
      data.email &&
      data.password &&
      data.checked &&
      data.isValidName &&
      data.isValidLastName &&
      data.isValidUsername &&
      data.isValidEmail &&
      data.isValidPhone &&
      data.isValidPassword &&
      data.isValidConfirmPassword
    ) {
      if (data.activateButton === false) {
        setData({ ...data, activateButton: true })
      }
    } else {
      if (data.activateButton === true) {
        setData({ ...data, activateButton: false })
      }
    }
  }, [
    data.photo,
    data.isValidName,
    data.isValidLastName,
    data.isValidUsername,
    data.isValidPassword,
    data.isValidConfirmPassword,
    data.checked
  ])

  //  -->   submit
  const onSignUp = () => {
    register({
      photo: data.photo,
      name: data.name,
      lastName: data.lastName,
      username: data.username,
      email: data.email,
      phone: data.phone,
      password: data.password,
      confirmPassword: data.confirmPassword
    })

    setData(initialState)
  }

  useEffect(() => {
    if (isEmailInUse) {
      Alert.alert(
        'Error',
        'El email o numero celular ya esta en uso!',
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
      {loading ? <Loading /> : null}

      {/* status bar */}
      <StatusBar backgroundColor='#fff' />

      {/* header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.goBack()} style={styles.header_icon}>
          <View style={styles.iconBack}>
            <IconBack />
          </View>
        </TouchableOpacity>
        <Text style={styles.header_text}>Registra tu usuario</Text>
      </View>

      <Text style={styles.text}>Ingresa los siguientes datos para crear tu usuario</Text>

      {/* image input */}
      <TouchableOpacity style={styles.imageInput} onPress={inputHanlderImage}>
        {data.photo ? <Image style={styles.image} source={{ uri: data.photo }} /> : <IconCamera style={styles.iconCamera} />}
      </TouchableOpacity>

      {/* name */}
      <TextInput
        placeholder='Nombre'
        placeholderTextColor='#000'
        style={[styles.emptyInput, data.name && styles.filledInput]}
        value={data.name}
        onChangeText={nameInputHandler}
      />
      {
        data.isValidName
          ? null
          : (
              data.name
                ? <Text style={styles.errorMessage}>El nombre es Requerido!</Text>
                : <Text style={styles.errorMessage}>El nombre debe tener al menos 3 caracteres</Text>
            )
      }

      {/* lastname */}
      <TextInput
        placeholder='Apellido'
        placeholderTextColor='#000'
        style={[styles.emptyInput, data.lastName && styles.filledInput]}
        value={data.lastName}
        onChangeText={lastNameInputHandler}
      />
      {
        data.isValidLastName
          ? null
          : (
              data.lastName
                ? <Text style={styles.errorMessage}>El apellido es Requerido!</Text>
                : <Text style={styles.errorMessage}>El apellido debe tener al menos 3 caracteres</Text>
            )
      }

      {/* username */}
      <TextInput
        placeholder='Nombre de Usuario'
        placeholderTextColor='#000'
        style={[styles.emptyInput, data.username && styles.filledInput]}
        value={data.username}
        onChangeText={usernameInputHandler}
      />
      {
        data.isValidUsername
          ? null
          : (
              data.username
                ? <Text style={styles.errorMessage}>El nombre de usuario es Requerido!</Text>
                : <Text style={styles.errorMessage}>El nombre de usuario debe tener al menos 5 caracteres</Text>
            )
      }

      {/* email */}
      <TextInput
        placeholder='correo'
        keyboardType='email-address'
        autoCapitalize='none'
        placeholderTextColor='#000'
        style={[styles.emptyInput, data.email && styles.filledInput]}
        value={data.email}
        onChangeText={handleEmailInput}
      />
      {
        data.isValidEmail
          ? null
          : (
              data.emailEmpty
                ? <Text style={styles.errorMessage}>El Email es Requerido!</Text>
                : <Text style={styles.errorMessage}>Ingrese un Email Valido</Text>
            )
      }

      {/* phone */}
      <TextInput
        placeholder='Numero de Telefono'
        keyboardType='phone-pad'
        autoCapitalize='none'
        placeholderTextColor='#000'
        style={[styles.emptyInput, data.phone && styles.filledInput]}
        value={data.phone}
        onChangeText={phoneInputHandler}
      />
      {
        data.isValidPhone
          ? null
          : (
              data.phoneEmpty
                ? <Text style={styles.errorMessage}>El Numero de telefono es Requerido!</Text>
                : <Text style={styles.errorMessage}>Ingrese un numero con formato Valido ejemplo: +0123456</Text>
            )
      }

      {/* Password */}
      <View style={styles.passwordInputContainer}>
        <TextInput
          placeholder='Contraseña'
          secureTextEntry={data.secureTextEntry}
          autoCompleteType='off'
          placeholderTextColor='#000'
          style={[styles.emptyInput, data.password && styles.filledInput]}
          value={data.password}
          onChangeText={passwordInputHandler}
        />
        <TouchableOpacity onPress={showPassword} style={styles.iconEyeContainer}>
          <IconSwitch name={data.iconEye} style={styles.iconEye} />
        </TouchableOpacity>
        {
          data.isValidPassword
            ? null
            : (
                data.passwordEmpty
                  ? <Text style={styles.errorMessage}>La Contraseña es Requerida!</Text>
                  : <Text style={styles.errorMessage}>Debe tener al menos 6 caracteres</Text>
              )
        }
      </View>

      {/* confirm Password */}
      <View style={styles.passwordInputContainer}>
        <TextInput
          placeholder='Confirmar Contraseña'
          secureTextEntry={data.secureTextEntry}
          autoCompleteType='off'
          placeholderTextColor='#000'
          style={[styles.emptyInput, data.confirmPassword && styles.filledInput]}
          value={data.confirmPassword}
          onChangeText={confirmPasswordHanlder}
        />
        <TouchableOpacity onPress={showPassword} style={styles.iconEyeContainer}>
          <IconSwitch name={data.iconEye} style={styles.iconEye} />
        </TouchableOpacity>
        {
          data.isValidConfirmPassword
            ? null
            : <Text style={styles.errorMessage}>Las contraseña no coincide</Text>
        }
      </View>

      {/* CheckBox */}
      <View style={styles.termsAndConditions}>
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

  iconBack: {
    width: wp('3%'),
    height: hp('4%') // 32
  },

  header_text: {
    fontSize: hp('2.4%'), //  ~18
    fontFamily: 'Poppins_700Bold',
    marginLeft: 23.5
  },

  text: {
    marginTop: hp('3%'),
    marginBottom: hp('3%'), //  ~27
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
    marginBottom: hp('2%') // 18~
  },

  image: {
    borderRadius: 20,
    resizeMode: 'cover',
    width: wp('26%'), //  102~
    height: wp('26%') //  102~
  },

  iconCamera: {
    width: wp('11%'), //  43~~
    height: hp('5%') //  37~~
  },

  emptyInput: {
    backgroundColor: '#EBEBEB',
    borderRadius: 20,
    width: wp('74.3%'), //  291~
    height: hp('5.2%'), //  39~
    paddingLeft: wp('10%'), // 39~
    marginBottom: hp('2%'),
    fontSize: hp('1.5%'), //  11~~
    fontFamily: 'Poppins_400Regular'
  },

  filledInput: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#EBEBEB'
  },

  passwordInputContainer: {
    position: 'relative'
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

  termsAndConditions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('1%'),
    marginBottom: hp('4%') // 43~~
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
    fontSize: hp('2'),
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

export default Register
