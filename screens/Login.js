import React, { useState, useContext, useEffect } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert
} from 'react-native'
import { useFonts, Poppins_300Light, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins'; // eslint-disable-line
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import AppLoading from 'expo-app-loading'
import AuthContext from '../context/Auth/AuthContext'
import { StatusBar } from 'expo-status-bar'

//  components
import Loading from '../components/Loading'

//  icons / logos
import LogoBSocialBienvenida from '../components/Icons/LogoBsocialBienvenida'
import IconFacebook from '../components/Icons/IconFacebook'
import IconGoogle from '../components/Icons/IconGoogle'
import IconEmail from '../components/Icons/IconEmail'
import IconPassword from '../components/Icons/IconPassword'
import IconsSwitching from '../components/Icons/IconsSwitching'

const Login = (props) => {
  //  context
  const { signIn, isValidUser, loading, getAuthenticatedUser } = useContext(AuthContext)
  //  state
  const [data, setData] = useState({
    email: '',
    password: '',
    secureTextEntry: true,
    iconEye: 'EyeOff',
    isValidEmail: false
  })

  const goRegister = () => props.navigation.navigate('Register')

  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_700Bold
  })

  //  show password
  const showPassword = () => {
    if (data.secureTextEntry === true) {
      setData({ ...data, secureTextEntry: false, iconEye: 'Eye' })
    } else {
      setData({ ...data, secureTextEntry: true, iconEye: 'EyeOff' })
    }
  }

  //  input handler email
  const inputHandlerEmail = (value) => {
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i

    if (emailRegex.test(value)) {
      setData({ ...data, email: value.trim(), isValidEmail: true })
    } else {
      setData({ ...data, email: value.trim(), isValidEmail: false })
    }
  }

  //  input handler password
  const inputHandlerPassword = (value) => {
    setData({ ...data, password: value })
  }

  //  on submit
  const onSignIn = () => {
    if (data.isValidEmail && data.password !== '') {
      signIn(data)
    } else {
      if (data.email === '' && data.password === '') {
        return Alert.alert(
          'Error',
          'Introduzca un Email y Contraseña',
          [{ text: 'OK' }],
          { cancelable: false }
        )
      }

      if (data.email === '') {
        return Alert.alert('Error', 'Introduzca un Email', [{ text: 'OK' }], {
          cancelable: false
        })
      }

      if (data.isValidEmail === false) {
        return Alert.alert(
          'Error',
          'Ingrese un Email valido!',
          [{ text: 'OK' }],
          { cancelable: false }
        )
      }

      if (data.password === '') {
        return Alert.alert(
          'Error',
          'Introduzca una Contraseña',
          [{ text: 'OK' }],
          { cancelable: false }
        )
      }
    }
  }

  useEffect(() => {
    if (isValidUser === false) {
      Alert.alert('Error', 'Correo o Contraseña Invalidos.', [{ text: 'Ok' }], {
        cancelable: false
      })
    }
  }, [isValidUser])

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={styles.container}>
      {loading ? <Loading /> : null}

      <StatusBar hidden />

      <LogoBSocialBienvenida style={styles.logo} />

      <Text style={styles.text}>Iniciar Sesión con</Text>

      <View style={styles.otherLogin}>
        <IconFacebook style={styles.iconFacebook} />
        <IconGoogle style={styles.iconGoogle} />
      </View>

      {/* separator */}
      <View style={styles.containerSeparator}>
        <View style={styles.separator} />
        <Text style={styles.separator_center}>o</Text>
        <View style={styles.separator} />
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
          secureTextEntry={data.secureTextEntry}
          placeholder='Contraseña'
          placeholderTextColor='#000'
          style={styles.input}
          onChangeText={inputHandlerPassword}
        />
        <TouchableOpacity
          onPress={showPassword}
          style={styles.iconEyeContainer}
        >
          <IconsSwitching name={data.iconEye} style={styles.iconEye} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={onSignIn}
        style={[styles.button, styles.loginButton]}
      >
        <Text style={[styles.buttonTextBase, styles.buttonTextLogin]}>
          Entrar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={getAuthenticatedUser} style={styles.forgotPasswordContainer}>
        <Text style={styles.forgotPassword}>Olvidaste tu Contraseña?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={goRegister}
        style={[styles.button, styles.signupButton]}
      >
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
  }
})

export default Login
