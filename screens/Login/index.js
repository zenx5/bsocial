import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { useFonts, Poppins_300Light, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins'  // eslint-disable-line
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import AppLoading from 'expo-app-loading'

//  components
import InputLogin from './InputLogin'
import InputPassword from './InputPassword'

//  icons / logos
import LogoBSocialBienvenida from '../../components/Icons/LogoBsocialBienvenida'
import IconFacebook from '../../components/Icons/IconFacebook'
import IconGoogle from '../../components/Icons/IconGoogle'

const Login = (props) => {
  const goSignup = () => props.navigation.navigate('Signup')
  const goHome = () => props.navigation.navigate('MainTabs')

  const [fontsLoaded] = useFonts({ Poppins_300Light, Poppins_400Regular, Poppins_700Bold })

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
      <InputLogin />

      {/* password */}
      <InputPassword />

      <TouchableOpacity onPress={goHome} style={[styles.button, styles.loginButton]}>
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
