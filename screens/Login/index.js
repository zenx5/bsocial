import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { useFonts, Poppins_300Light, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins'  // eslint-disable-line
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
      <LogoBSocialBienvenida />

      <Text style={{ marginTop: 50, marginBottom: 15, fontFamily: 'Poppins_400Regular' }}>Iniciar Sesión con</Text>

      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', marginBottom: 57.5 }}>
        <IconFacebook style={{ marginRight: 40 }} />
        <IconGoogle />
      </View>

      {/* separator */}
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 42.5 }}>
        <View style={styles.separator} /><Text style={{ paddingHorizontal: 12.5, fontFamily: 'Poppins_400Regular' }}>o</Text><View style={styles.separator} />
      </View>

      <InputLogin />
      <InputPassword />

      <TouchableOpacity onPress={goHome} style={{ backgroundColor: '#E1B21C', borderRadius: 29, paddingVertical: 16, width: 291, marginBottom: 24 }}>
        <Text style={{ color: '#FFFFFF', textAlign: 'center', fontSize: 18, textTransform: 'uppercase', fontFamily: 'Poppins_700Bold' }}>
          Entrar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ marginBottom: 32 }}>
        <Text style={{ textTransform: 'capitalize', color: '#E1B21C', fontFamily: 'Poppins_300Light' }}>
          Olvidaste tu Contraseña?
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={goSignup} style={{ backgroundColor: '#fff', borderWidth: 1, borderRadius: 29, borderColor: '#707070', width: 291, paddingVertical: 16 }}>
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
    paddingVertical: 30
  },

  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#EBEBEB',
    width: 133
  }
})

export default Login
