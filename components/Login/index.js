import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

//  components
import InputLogin from './InputLogin'
import InputPassword from './InputPassword'

//  icons / logos
import IconFacebook from '../Icons/IconFacebook'
import IconGoogle from '../Icons/IconGoogle'

const Separator = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #EBEBEB;
  width: 133px;
`

const Login = ({ navigation }) => {
  console.log(navigation)
  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 15 }}>Iniciar Sesión con</Text>

      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', marginBottom: 57.5 }}>
        <IconFacebook style={{ marginRight: 40 }} />
        <IconGoogle />
      </View>

      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 42.5 }}>
        <Separator /><Text style={{ paddingHorizontal: 12.5 }}>o</Text><Separator />
      </View>

      <InputLogin />
      <InputPassword />

      <TouchableOpacity mode='contained' color='#E1B21C' style={{ borderWidth: 0, borderRadius: 29, width: 291, marginBottom: 24 }}><Text style={{ color: '#fff' }}>Entrar</Text></TouchableOpacity>

      <TouchableOpacity style={{ marginBottom: 72 }}><Text style={{ textTransform: 'capitalize', color: '#E1B21C' }}>Olvidaste tu Contraseña?</Text></TouchableOpacity>

      <TouchableOpacity mode='contained' color='#fff' style={{ borderWidth: 1, borderRadius: 29, borderColor: '#707070', width: 291 }}>Registrate</TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 37,
    paddingBottom: 29
  }
})

export default Login
