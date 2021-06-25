import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Platform, Alert } from 'react-native'
import { useFonts, Poppins_300Light, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins'  //  eslint-disable-line
import AppLoading from 'expo-app-loading'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import * as ImagePicker from 'expo-image-picker'
import EventsContext from '../context/Events/EventsContext'

//  components
import LocationPicker from '../components/CreateEvent/LocationPicker'
import DateTimePicker from '../components/CreateEvent/DateTimePicker'
import CategoryPicker from '../components/CreateEvent/CategoryPicker'

//  icon
import IconImage from '../components/Icons/IconImage'

const CreateEventStep1 = (props) => {
  //  fonts
  const [fontsLoaded] = useFonts({ Poppins_300Light, Poppins_400Regular, Poppins_700Bold })

  //  create event data
  const [eventData, setEventData] = useState({
    eventName: '',
    description: '',
    image: null
  })

  //  event name handler
  const handleEventName = (value) => {
    setEventData({ ...eventData, eventName: value })
  }

  //  description handler
  const handleDescription = (value) => {
    setEventData({ ...eventData, description: value })
  }

  //  input handler image
  const handleImage = async () => {
    // permissions
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
      if (status !== 'granted') {
        Alert('Se requiere acceso a la galeria de imagenes!')
      } else {
        const result = await ImagePicker.launchImageLibraryAsync({
          quality: 0.5
        })
        if (!result.cancelled) {
          setEventData({ ...eventData, image: result.uri })
        }
      }
    }
  }

  //  button
  const [completeInfo, setCompleteInfo] = useState(true)  // eslint-disable-line
  const goStep2 = () => props.navigation.navigate('Create Event Step 2')
  //  on waiting for the fonts
  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={styles.container}>
      {/*  location picker */}
      <LocationPicker />

      {/* Date time picker */}
      <DateTimePicker />

      <View style={styles.inputContainer}>
        {/* event name */}
        <TextInput
          placeholder='Nombre del evento'
          placeholderTextColor='#000'
          style={styles.eventName}
          value={eventData.eventName}
          onChangeText={handleEventName}
        />

        {/* description */}
        <TextInput
          placeholder='Descripcion'
          multiline placeholderTextColor='#000'
          style={styles.description}
          value={eventData.description}
          onChangeText={handleDescription}
        />

        {/* image upload */}
        <TouchableOpacity onPress={handleImage} style={styles.imageInput}>
          {
            eventData.image
              ? <Image style={styles.image} source={{ uri: eventData.image }} />
              : (
                <>
                  <IconImage style={styles.iconImage} />
                  <Text style={styles.inputText}>Subir Foto</Text>
                </>
                )
          }
        </TouchableOpacity>
      </View>

      {/* category picker */}
      <CategoryPicker />

      {/* Button */}
      <View style={styles.inputContainer}>
        <TouchableOpacity disabled={!completeInfo} onPress={goStep2} style={[styles.buttonDisable, completeInfo && styles.buttonBase]}>
          <Text style={[styles.buttonTextDisable, completeInfo && styles.buttonTextBase]}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'column'
    // paddingHorizontal: wp('6.6%') //  27~
  },

  dateTimeContainer: {
    width: '100%',
    height: hp('7%'), //  48
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp('6.6%'), //  27~
    marginBottom: hp('2.5%') // 17.1

  },

  dateTime: {
    width: '49%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#00000014',
    borderRadius: 10,
    paddingLeft: wp('4.18%'), // 17~
    paddingRight: wp('13%')
  },

  inputContainer: {
    paddingHorizontal: wp('6.6%') //  27~
  },

  eventName: {
    width: '100%',
    height: hp('7%'), //  48
    fontSize: hp('2.35%'), //  16
    color: '#000',
    fontFamily: 'Poppins_400Regular',
    paddingLeft: wp('4.18%'), // 17~
    backgroundColor: '#00000014',
    borderRadius: 10,
    marginBottom: hp('2.5%') // 17.1
  },

  description: {
    width: '100%',
    height: hp('14%'), //  95.6
    color: '#000',
    fontSize: hp('2.35%'), //  16
    fontFamily: 'Poppins_400Regular',
    backgroundColor: '#00000014',
    borderRadius: 10,
    paddingLeft: wp('4.18%'), // 17~
    marginBottom: hp('2.5%') // 17.1
  },

  imageInput: {
    width: '100%',
    height: hp('15%'), // 102.4~
    backgroundColor: '#00000014',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp('1.2%') // 20~
  },

  iconImage: {
    marginBottom: hp('2.21%') // 15~
  },

  image: {
    resizeMode: 'cover',
    borderRadius: 10,
    width: '100%',
    height: hp('20.5%') // 140 ~
  },

  inputText: {
    fontSize: hp('2.35%'), //  16
    color: '#000',
    fontFamily: 'Poppins_400Regular'
  },

  buttonDisable: {
    backgroundColor: '#EBEBEB',
    width: '100%',
    height: hp('7.5%'), //  57
    borderWidth: 0,
    borderRadius: 29,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },

  buttonBase: {
    backgroundColor: '#E1B21C'
  },

  buttonTextDisable: {
    color: '#00000020',
    fontSize: hp('2.4%'), //  ~18
    fontFamily: 'Poppins_700Bold',
    textTransform: 'uppercase'
  },

  buttonTextBase: {
    color: '#fff'
  }
})

export default CreateEventStep1
