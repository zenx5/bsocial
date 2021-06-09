import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Image, Platform, Alert } from 'react-native'
import { useFonts, Poppins_300Light, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins'  //  eslint-disable-line
import AppLoading from 'expo-app-loading'
import Constants from 'expo-constants'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import * as ImagePicker from 'expo-image-picker'

//  components
import LocationPicker from '../components/LocationPicker'

//  icon
import IconClose from '../components/Icons/IconClose'
import IconDate from '../components/Icons/IconDate'
import IconTime from '../components/Icons/IconTime'
import IconImage from '../components/Icons/IconImage'

const CreateEventStep1 = (props) => {
  //  fonts
  const [fontsLoaded] = useFonts({ Poppins_300Light, Poppins_400Regular, Poppins_700Bold })

  //  create event data
  const [eventData, setEventData] = useState({
    date: null,
    time: null,
    eventName: '',
    description: '',
    image: null
  })

  //  date && time
  const [showDateTime, setShowDateTime] = useState({ date: false, time: false })

  const showDatePicker = () => setShowDateTime({ ...showDateTime, date: true })

  const onCancelDate = () => setShowDateTime({ ...showDateTime, date: false })

  const onConfirmDate = (date) => {
    setEventData({ ...eventData, date })
    onCancelDate()
  }

  const showTimePicker = () => setShowDateTime({ ...showDateTime, time: true })

  const onCancelTime = () => setShowDateTime({ ...showDateTime, time: false })

  const onConfirmTime = (time) => {
    setEventData({ ...eventData, time })
    onCancelTime()
  }

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
      {/* header */}
      <View style={styles.header}>
        <Text style={styles.header_title}>Crear evento</Text>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <IconClose />
        </TouchableOpacity>
      </View>

      <ScrollView>
        {/*  location picker */}
        <LocationPicker />

        <View style={styles.dateTimeContainer}>
          {/* Date */}
          <TouchableOpacity onPress={showDatePicker} style={styles.dateTime}>
            <IconDate />
            <Text style={styles.inputText}>{eventData.date ? eventData.date.toLocaleDateString() : 'Fecha'}</Text>
            <DateTimePickerModal
              isVisible={showDateTime.date}
              mode='date'
              display='default'
              onConfirm={onConfirmDate}
              onCancel={onCancelDate}
            />

          </TouchableOpacity>

          {/* Time */}
          <TouchableOpacity onPress={showTimePicker} style={styles.dateTime}>
            <IconTime />
            <Text style={styles.inputText}>{eventData.time ? eventData.time.toLocaleTimeString().slice(0, 5) : 'Hora'}</Text>
            <DateTimePickerModal
              isVisible={showDateTime.time}
              mode='time'
              display='default'
              onConfirm={onConfirmTime}
              onCancel={onCancelTime}
            />
          </TouchableOpacity>
        </View>

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

        {/* category */}
        <View style={styles.categoryContainer}>
          <TouchableOpacity style={styles.categoryDisabled} />
          <Text style={styles.categoriText}>Selecciona una categoria</Text>
        </View>

        {/* Button */}
        <TouchableOpacity disabled={!completeInfo} onPress={goStep2} style={[styles.buttonDisable, completeInfo && styles.buttonBase]}>
          <Text style={[styles.buttonTextDisable, completeInfo && styles.buttonTextBase]}>Continuar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: wp('6.6%') //  27~
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp('3.95%') // 27~
  },

  header_title: {
    fontFamily: 'Poppins_700Bold',
    fontSize: hp('2.61%') // 18~
  },

  locationInput: {
    height: hp('8.82%'), //  60~
    backgroundColor: '#00000014',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#00000011',
    paddingLeft: wp('4.18%'), // 17~
    marginBottom: hp('1.1%') // 7.6~
  },

  iconGeolocalizador: {
    marginRight: wp('1.75%') //  7.2
  },

  location_footer: {
    flexDirection: 'row'
  },

  iconTimeZone: {
    marginRight: wp('1.5%') //  6
  },

  location_footerText: {
    fontSize: hp('1.7%'), //  11~~
    fontFamily: 'Poppins_300Light',
    color: '#00000050'
  },

  dateTimeContainer: {
    width: '100%',
    height: hp('8.82%'), //  60~
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp('3.69%') // 25
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

  eventName: {
    width: '100%',
    height: hp('8.82%'), //  60~
    fontSize: hp('2.35%'), //  16
    color: '#000',
    fontFamily: 'Poppins_400Regular',
    paddingLeft: wp('4.18%'), // 17~
    backgroundColor: '#00000014',
    borderRadius: 10,
    marginBottom: hp('3.69%') // 25
  },

  description: {
    width: '100%',
    height: hp('17%'), //  117
    color: '#000',
    fontSize: hp('2.35%'), //  16
    fontFamily: 'Poppins_400Regular',
    backgroundColor: '#00000014',
    borderRadius: 10,
    paddingLeft: wp('4.18%'), // 17~
    marginBottom: hp('3.69%') // 25
  },

  imageInput: {
    width: '100%',
    height: hp('20.5%'), // 140 ~
    backgroundColor: '#00000014',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp('2.95%') // 20~
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

  categoryContainer: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 15
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
    width: '100%',
    height: hp('7.5%'), //  57
    borderWidth: 0,
    borderRadius: 29,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: wp('6.6%') //  27~
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
