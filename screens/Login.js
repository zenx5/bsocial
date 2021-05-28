import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native'
import { useFonts, Poppins_300Light, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins'  // eslint-disable-line
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import AppLoading from 'expo-app-loading'
import AuthContext from '../context/Auth/AuthContext'

//  icons / logos
import LogoBSocialBienvenida from '../components/Icons/LogoBsocialBienvenida'
import IconFacebook from '../components/Icons/IconFacebook'
import IconGoogle from '../components/Icons/IconGoogle'
import IconEmail from '../components/Icons/IconEmail'
import IconPassword from '../components/Icons/IconPassword'
import IconsSwitching from '../components/Icons/IconsSwitching'

const Login = (props) => {
  //  context
  const { signIn } = useContext(AuthContext)

  //  state
  const [data, setData] = useState({
    email: '',
    password: '',
    secureTextEntry: true,
    iconEye: 'EyeOff',
    isValidEmail: true,
    emailEmpty: false,
    isValidPassword: true,
    passwordEmpty: false,
    activateButton: false
  })

  const goSignup = () => props.navigation.navigate('Signup')

  const [fontsLoaded] = useFonts({ Poppins_300Light, Poppins_400Regular, Poppins_700Bold })

  //  show password
  const showPassword = () => {
    if (data.secureTextEntry === true) {
      setData({ ...data, secureTextEntry: false, iconEye: 'Eye' })
    } else {
      setData({ ...data, secureTextEntry: true, iconEye: 'EyeOff' })
    }
  }

  //  validating inputs
  const hanldeEmailInput = (value) => {
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
      data.email &&
      data.password &&
      data.isValidEmail &&
      data.isValidPassword &&
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
  }, [data.email, data.password])

  //  on submit
  const onSignIn = () => {
    signIn(data)
  }

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={styles.container}>
      <LogoBSocialBienvenida style={styles.logo} />

      <Text style={styles.text}>Iniciar Sesión con</Text>

      <View style={styles.otherLogin}>
        <IconFacebook style={styles.iconFacebook} />
        <IconGoogle style={styles.iconGoogle} />
      </View>

      {/* separator */}
      <View style={styles.containerSeparator}>
        <View style={styles.separator} /><Text style={styles.separator_center}>o</Text><View style={styles.separator} />
      </View>

      {/* email */}
      <View style={styles.inputContainer}>
        <View style={styles.inputIcon}>
          <IconEmail />
        </View>

        <TextInput
          placeholder='Email'
          placeholderTextColor='#000'
          keyboardType='email-address'
          style={styles.input}
          onChangeText={hanldeEmailInput}
        />
        {data.isValidEmail ? null : (data.emailEmpty ? <View style={styles.errorMessageContainer}><Text style={styles.errorMessage}>El Email es Requerido!</Text></View> : <View style={styles.errorMessageContainer}><Text style={styles.errorMessage}>Ingrese un Email Valido</Text></View>)}

      </View>

      {/* password */}
      <View style={styles.inputContainer}>
        <View style={styles.inputIcon}>
          <IconPassword />
        </View>
        <TextInput
          secureTextEntry={data.secureTextEntry}
          placeholder='Contraseña'
          placeholderTextColor='#000'
          style={styles.input}
          onChangeText={handlePasswordInput}
        />
        <TouchableOpacity onPress={showPassword} style={styles.iconEyeContainer}>
          <IconsSwitching name={data.iconEye} style={styles.iconEye} />
        </TouchableOpacity>
        {data.isValidPassword ? null : (data.passwordEmpty ? <View style={styles.errorMessageContainer}><Text style={styles.errorMessage}>La Contraseña es Requerida!</Text></View> : <View style={styles.errorMessageContainer}><Text style={styles.errorMessage}>Debe tener al menos 6 caracteres</Text></View>)}
      </View>

      <TouchableOpacity disabled={!data.activateButton} onPress={onSignIn} style={[styles.button, styles.loginButton]}>
        <Text style={[styles.buttonTextBase, styles.buttonTextLogin]}>
          Entrar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.forgotPasswordContainer}>
        <Text style={styles.forgotPassword}>
          Olvidaste tu Contraseña?
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={goSignup} style={[styles.button, styles.signupButton]}>
        <Text style={[styles.buttonTextBase, styles.buttonTextSignup]}>
          Registrate
        </Text>
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
    paddingVertical: hp('3%'), // ~22.9
    paddingHorizontal: wp('5%')
  },

  logo: {
    width: hp('18.3%'),
    height: hp('25%')
  },

  text: {
    fontSize: hp('1.8%'),
    marginTop: hp('3%'),
    marginBottom: hp('2.23%'),
    fontFamily: 'Poppins_400Regular'
  },

  otherLogin: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: hp('2.3%')
  },

  iconFacebook: {
    width: hp('6%'),
    height: hp('6%'),
    marginRight: wp('16%')
  },

  iconGoogle: {
    width: hp('6%'),
    height: hp('6%')
  },

  containerSeparator: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp('2%')
  },

  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#EBEBEB',
    width: wp('35%')
  },

  separator_center: {
    paddingHorizontal: 12.5,
    fontFamily: 'Poppins_400Regular'
  },

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
  },

  button: {
    borderRadius: 29,
    width: wp('71%'),
    height: hp('7.5%'),
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonTextBase: {
    fontSize: hp('2.4%'), //  ~18
    textTransform: 'uppercase',
    fontFamily: 'Poppins_700Bold'
  },

  buttonTextLogin: {
    color: '#FFFFFF'
  },

  buttonTextSignup: {
    color: '#000'
  },

  loginButton: {
    backgroundColor: '#E1B21C',
    marginBottom: hp('3.2%')
  },

  signupButton: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#707070'
  },

  forgotPasswordContainer: {
    marginBottom: hp('2.5%')
  },

  forgotPassword: {
    fontSize: hp('2%'),
    color: '#E1B21C',
    fontFamily: 'Poppins_300Light'
  },

  errorMessageContainer: {
    position: 'absolute',
    width: '100%',
    right: '0%',
    bottom: '-50%'
  },

  errorMessage: {
    textAlign: 'center',
    fontSize: hp('1.7%'),
    color: '#DD4C4C'
  }
})

export default Login
