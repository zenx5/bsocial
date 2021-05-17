import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import { useFonts, Poppins_300Light, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins'  //  eslint-disable-line
import AppLoading from 'expo-app-loading'

//  icon
import IconGeolocalizador from '../../components/Icons/IconGeolocalizador'
import IconDate from '../../components/Icons/IconDate'
import IconTime from '../../components/Icons/IconTime'
import IconImage from '../../components/Icons/IconImage'

const CreateEvent = () => {
  //  fonts
  const [fontsLoaded] = useFonts({ Poppins_300Light, Poppins_400Regular, Poppins_700Bold })

  //  on waiting for the fonts
  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={styles.container}>
      {/* Geolocalizador Input */}
      <View style={{ marginBottom: 26.7 }}>
        <TouchableOpacity pla style={styles.geolocalizadorInput}>
          <Text style={styles.geolocalizadorText}>Ubicación</Text>
          <IconGeolocalizador style={styles.geolocalizadorIcon} />
        </TouchableOpacity>
        <Text style={{ fontSize: 11, fontFamily: 'Poppins_300Light', color: '#00000050' }}>Zona horaria determinada por ubicación</Text>
      </View>

      {/* Date */}
      <TextInput placeholder='Nombre' placeholderTextColor='#000' style={styles.textInput} />

      {/* Time */}
      <TextInput placeholder='Apellido' placeholderTextColor='#000' style={styles.textInput} />

      <TextInput placeholder='correo' placeholderTextColor='#000' style={styles.textInput} />

      <TouchableOpacity>
        <IconImage />
        <Text style={styles.textInput}>Subir Foto</Text>
      </TouchableOpacity>

      {/* CheckBox */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 48 }}>
        <Text style={styles.checkBoxText}>He leído las terminos y políticas de la empresa</Text>
      </View>

      {/* Button */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },

  geolocalizadorInput: {
    width: 320,
    height: 60,
    backgroundColor: '#00000014',
    borderRadius: 10,
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#00000011',
    marginBottom: 6
  },

  geolocalizadorText: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'Poppins_400Regular',
    paddingLeft: 17
  },

  geolocalizadorIcon: {
    paddingRight: 7,
    with: 43.12,
    height: 37.73
  },

  text: {
    marginTop: 38,
    marginBottom: 27,
    fontSize: 12,
    fontFamily: 'Poppins_400Regular'
  },

  imageInput: {
    backgroundColor: '#EBEBEB',
    width: 102,
    height: 102,
    borderRadius: 20,
    justifyContent: 'center',
    marginBottom: 18
  },

  textInput: {
    backgroundColor: '#EBEBEB',
    borderRadius: 20,
    width: 291,
    height: 39,
    paddingLeft: 41,
    marginBottom: 18,
    fontSize: 11,
    fontFamily: 'Poppins_400Regular'
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
    fontSize: 10,
    fontFamily: 'Poppins_400Regular'
  },

  buttonDisable: {
    backgroundColor: '#EBEBEB',
    width: 291,
    height: 57,
    borderWidth: 0,
    borderRadius: 29
  },

  buttonBase: {
    backgroundColor: '#E1B21C'
  },

  buttonTextDisable: {
    color: '#58595B',
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Poppins_700Bold',
    textTransform: 'uppercase',
    paddingVertical: 16
  },

  buttonTextBase: {
    color: '#fff'
  }
})

export default CreateEvent
