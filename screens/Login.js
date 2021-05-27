import React, { useState, useContext } from 'react'
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
  const { signIn } = useContext(AuthContext)

  const goSignup = () => props.navigation.navigate('Signup')

  const [fontsLoaded] = useFonts({ Poppins_300Light, Poppins_400Regular, Poppins_700Bold })

  const [data, setData] = useState({
    email: '',
    password: ''
  })

  //  password
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

  const hanldeEmailInput = (value) => {
    if (value.lenght !== 0) {
      setData({
        ...data,
        email: value
      })
    }
  }

  const handlePasswordInput = (value) => {
    if (value.lenght !== 0) {
      setData({
        ...data,
        password: value
      })
    }
  }

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
        <IconFacebook style={{ marginRight: wp('16%') }} />
        <IconGoogle />
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
      </View>

      {/* password */}
      <View style={styles.inputContainer}>
        <View style={styles.inputIcon}>
          <IconPassword />
        </View>
        <TextInput
          secureTextEntry={secureTextEntry}
          placeholder='Contraseña'
          placeholderTextColor='#000'
          style={styles.input}
          onChangeText={handlePasswordInput}
        />
        <TouchableOpacity onPress={showPassword} style={styles.iconEye}>
          <IconsSwitching name={eye} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={onSignIn} style={[styles.button, styles.loginButton]}>
        <Text style={{ color: '#FFFFFF', textAlign: 'center', fontSize: 18, textTransform: 'uppercase', fontFamily: 'Poppins_700Bold' }}>
          Entrar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ marginBottom: 32 }}>
        <Text style={{ textTransform: 'capitalize', color: '#E1B21C', fontFamily: 'Poppins_300Light' }}>
          Olvidaste tu Contraseña?
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={goSignup} style={[styles.button, styles.signupButton]}>
        <Text style={{ color: '#000', textAlign: 'center', textTransform: 'uppercase', fontFamily: 'Poppins_700Bold' }}>
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
    paddingVertical: hp('3%'),
    paddingHorizontal: wp('5%')
  },

  logo: {
    width: wp('37%'),
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
    marginBottom: hp('3.5%')
  },

  inputIcon: {
    position: 'absolute',
    left: 0,
    bottom: 5
  },

  input: {
    width: wp('71%'),
    fontSize: hp('1.8%'),
    paddingBottom: hp('1.2%'),
    paddingLeft: wp('10%'),
    fontFamily: 'Poppins_300Light'
  },

  iconEye: {
    position: 'absolute',
    top: 0,
    right: 0
  },

  button: {
    borderRadius: 29,
    width: wp('71%'),
    height: hp('8%'),
    justifyContent: 'center',
    alignItems: 'center'
  },

  loginButton: {
    backgroundColor: '#E1B21C',
    marginBottom: hp('3.2%')
  },

  signupButton: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#707070'
  }
})

export default Login
