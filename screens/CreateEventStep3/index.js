import React from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins' // eslint-disable-line
import AppLoading from 'expo-app-loading'

//  icons
import IconCheck from '../../components/Icons/IconCheck'

const CreateEventStep3 = (props) => {
  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_700Bold })
  const goHome = () => props.navigation.navigate('Home')

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/backgroundStep3.png')} style={styles.image}>
        <View style={styles.message}>
          <IconCheck />

          <View style={styles.text1Container}>
            <Text style={styles.text1}>Tu evento fue creado con éxito!</Text>
          </View>

          <View style={styles.text2Container}>
            <Text style={styles.text2}>Felicidades tu evento fue creado, se les enviará una notificación a todos tus invitados</Text>
          </View>

          <TouchableOpacity onPress={goHome} style={styles.buttom}>
            <Text style={styles.buttonText}>Continuar</Text>
          </TouchableOpacity>
        </View>

      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },

  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },

  message: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 25
  },

  text1Container: {
    width: 246,
    marginTop: 23,
    marginBottom: 12
  },

  text1: {
    color: '#fff',
    fontSize: 22,
    fontFamily: 'Poppins_700Bold',
    textAlign: 'center',
    with: 246,
    height: 55
  },

  text2Container: {
    with: 330,
    marginBottom: 25
  },

  text2: {
    color: '#fff',
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
    textAlign: 'center'
  },

  buttom: {
    backgroundColor: '#231F20',
    borderRadius: 29,
    paddingVertical: 16,
    width: 283
  },

  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 18,
    textTransform: 'uppercase',
    fontFamily: 'Poppins_700Bold'
  }
})

export default CreateEventStep3
