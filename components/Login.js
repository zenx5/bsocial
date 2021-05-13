import React from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'
import { Button } from 'react-native-paper'
import styled from 'styled-components/native'

const Separator = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #EBEBEB;
  width: 133px;
`

const Login = () => {
  // const [fontsLoaded] = useFonts({
  //   'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf')
  // })

  // if (!fontsLoaded) {
  //   return null
  // } else {
  return (
    <View style={styles.container}>

      <Text>Iniciar Sesión con</Text>
      <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 42.5 }}>
        <Separator /><Text style={{ paddingHorizontal: 12.5, flex: 0, alignItems: 'flex-end' }}>O</Text><Separator />
      </View>

      <View>
        <TextInput placeholder='Email' placeholderTextColor='#000' style={{ width: 291, fontSize: 14, borderBottomWidth: 1, borderBottomColor: '#707070', paddingBottom: 10, marginBottom: 22 }} />
        <TextInput placeholder='Contraseña' placeholderTextColor='#000' style={{ width: 291, fontSize: 14, borderBottomWidth: 1, borderBottomColor: '#707070', paddingBottom: 10, marginBottom: 40 }} />
      </View>

      <View>
        <Button mode='contained' color='#E1B21C' style={{ borderWidth: 0, borderRadius: 29, width: 291, marginBottom: 24 }}><Text style={{ color: '#fff' }}>Entrar</Text></Button>
        <Button style={{ marginBottom: 72 }}><Text style={{ textTransform: 'capitalize', color: '#E1B21C' }}>Olvidaste tu Contraseña?</Text></Button>
        <Button mode='contained' color='#fff' style={{ borderWidth: 1, borderRadius: 29, borderColor: '#707070', width: 291 }}>Registrate</Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    position: 'relative'
  },

  span: {
    fontSize: 12
  },

  input: {
    width: 291,
    fontSize: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#707070',
    paddingBottom: 5
  },

  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth
  }
})

export default Login
