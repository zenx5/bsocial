import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import { useFonts, Poppins_300Light, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins'  //  eslint-disable-line
import AppLoading from 'expo-app-loading'

//  icon
import IconGeolocalizador from '../../components/Icons/IconGeolocalizador'
import IconDate from '../../components/Icons/IconDate'
import IconTime from '../../components/Icons/IconTime'
import IconImage from '../../components/Icons/IconImage'

const CreateEventStep1 = (props) => {
  //  fonts
  const [fontsLoaded] = useFonts({ Poppins_300Light, Poppins_400Regular, Poppins_700Bold })

  //  button
  const [completeInfo, setCompleteInfo] = useState(true)  // eslint-disable-line
  const goStep2 = () => props.navigation.navigate('Create Event Step 2')
  //  on waiting for the fonts
  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={styles.container}>

      {/* Geolocalizador Input */}
      <View style={styles.location}>
        <TouchableOpacity style={styles.geolocalizadorInput}>
          <Text style={styles.geolocalizadorText}>Ubicación</Text>
          <IconGeolocalizador style={styles.geolocalizadorIcon} />
        </TouchableOpacity>
        <Text style={{ fontSize: 11, fontFamily: 'Poppins_300Light', color: '#00000050' }}>Zona horaria determinada por ubicación</Text>
      </View>

      <View style={styles.dateTimeContainer}>
        {/* Date */}
        <View style={styles.dateTime}>
          <IconDate />
          <Text style={styles.dateTimeText}>Fecha</Text>
        </View>

        {/* Time */}
        <View style={styles.dateTime}>
          <IconTime />
          <Text style={styles.dateTimeText}>Hora</Text>
        </View>
      </View>

      {/* event name */}
      <TextInput placeholder='Nombre del evento' placeholderTextColor='#000' style={styles.eventName} />

      {/* description */}
      <TextInput placeholder='Descripcion' multiline placeholderTextColor='#000' style={styles.description} />

      {/* image upload */}
      <TouchableOpacity style={styles.imageInput}>
        <IconImage />
        <Text style={styles.imageText}>Subir Foto</Text>
      </TouchableOpacity>

      {/* category */}
      <View style={styles.categoryContainer}>
        <TouchableOpacity style={styles.categoryDisabled} />
        <Text style={styles.categoriText}>Selecciona una categoria</Text>
      </View>

      {/* Button */}
      <TouchableOpacity disabled={!completeInfo} onPress={goStep2} style={[styles.buttonDisable, completeInfo && styles.buttonBase]}>
        <Text style={[styles.buttonTextDisable, completeInfo && styles.buttonTextBase]}>Continuar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20
  },

  location: {
    width: '100%',
    marginBottom: 25
  },

  geolocalizadorInput: {
    height: 60,
    backgroundColor: '#00000014',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#00000011',
    marginBottom: 7
  },

  geolocalizadorText: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'Poppins_400Regular',
    paddingLeft: 17
  },

  geolocalizadorIcon: {
    paddingRight: 7,
    width: 43.12,
    height: 37.73
  },

  dateTimeContainer: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25
  },

  dateTime: {
    width: '49%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00000014',
    borderRadius: 10,
    paddingLeft: 17.5
  },

  dateTimeText: {
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
    color: '#000',
    marginLeft: 13.2
  },

  eventName: {
    width: '100%',
    height: 60,
    color: '#000000',
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
    paddingLeft: 17,
    paddingVertical: 19,
    backgroundColor: '#00000014',
    borderRadius: 10,
    marginBottom: 24
  },

  description: {
    width: '100%',
    height: 117,
    paddingTop: 16,
    paddingLeft: 16,
    color: '#000',
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
    backgroundColor: '#00000014',
    borderRadius: 10,
    marginBottom: 25
  },

  imageInput: {
    width: '100%',
    height: 140,
    backgroundColor: '#00000014',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },

  imageText: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
    marginTop: 15.5
  },

  categoryContainer: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 16
  },

  categoryDisabled: {
    backgroundColor: '#00000014',
    borderRadius: 30,
    width: 22,
    height: 22,
    marginRight: 12
  },

  categoriText: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
    textAlign: 'left'
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
    color: '#00000040',
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

export default CreateEventStep1
