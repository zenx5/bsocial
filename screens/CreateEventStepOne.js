import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Platform, Alert } from 'react-native'
import { useFonts, Poppins_300Light, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins'  //  eslint-disable-line
import AppLoading from 'expo-app-loading'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import * as ImagePicker from 'expo-image-picker'
import EventsContext from '../context/Events/EventsContext'

//    -->   components
import Header from '../components/CreateEvent/HeaderOne'
// import LocationPicker from '../components/CreateEvent/LocationPicker'
import DateTimePicker from '../components/CreateEvent/DateTimePicker'
import CategoryPicker from '../components/CreateEvent/CategoryPicker'

//    -->   icon
import IconImage from '../components/Icons/IconImage'

const CreateEventStepOne = (props) => {
  //    -->   fonts
  const [fontsLoaded] = useFonts({ Poppins_300Light, Poppins_400Regular, Poppins_700Bold })

  //    -->   context
  const {
    latitude,
    longitude,
    date,
    time,
    setEventName,
    setEventDescription,
    setEventImage
  } = useContext(EventsContext)

  //    -->   create event, data
  const [eventData, setEventData] = useState({
    name: '',
    description: '',
    image: null
  })

  //    -->   handle name
  const handleName = (value) => setEventData({ ...eventData, name: value })

  //    -->   description handler
  const handleDescription = (value) => setEventData({ ...eventData, description: value })

  //  -->   input handler image
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

  //    -->   actvate button
  const [completeInfo, setCompleteInfo] = useState(false)
  const goStepTwo = () => props.navigation.navigate('Create Event Step Two')

  const onPress = () => {
    setEventName(eventData.name)
    setEventDescription(eventData.description)
    setEventImage(eventData.image)
    goStepTwo()
  }

  useEffect(() => {
    if (
      latitude &&
      longitude &&
      date &&
      time &&
      eventData.name &&
      eventData.description &&
      eventData.image
    ) {
      setCompleteInfo(true)
    } else {
      setCompleteInfo(false)
    }
  }, [
    latitude &&
    longitude &&
    date &&
    time &&
    eventData.name &&
    eventData.description &&
    eventData.image
  ])

  //    -->   on waiting for the fonts
  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header {...props} />

      {/*  location picker */}
      {/* <LocationPicker /> */}

      {/* Date time picker */}
      <DateTimePicker />

      {/* event name */}
      <TextInput
        placeholder='Nombre del evento'
        placeholderTextColor='#000'
        style={[styles.inputText_inactive, styles.inputText_name, eventData.name && styles.inputText_active]}
        value={eventData.name}
        onChangeText={handleName}
      />

      {/* description */}
      <TextInput
        placeholder='Descripcion'
        placeholderTextColor='#000'
        multiline
        style={[styles.inputText_inactive, styles.inputText_description, eventData.description && styles.inputText_active]}
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
                  <Text style={styles.imageInput_text}>Subir Foto</Text>
                </>
                )
          }
      </TouchableOpacity>

      {/* category picker */}
      <CategoryPicker />

      {/* Button */}
      <TouchableOpacity
        disabled={!completeInfo}
        onPress={onPress}
        style={[styles.buttonDisable, completeInfo && styles.buttonBase]}
      >
        <Text style={[styles.buttonTextDisable, completeInfo && styles.buttonTextBase]}>
          Continuar
        </Text>
      </TouchableOpacity>
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

  inputText_inactive: {
    fontSize: hp('2.35%'), //  16
    color: '#000',
    fontFamily: 'Poppins_400Regular',
    paddingLeft: wp('4.18%'), // 17~
    backgroundColor: '#00000014',
    borderRadius: 10,
    marginBottom: hp('2.5%') // 17.1
  },

  inputText_active: {
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#00000080'
  },

  inputText_name: {
    width: wp('85.5%'), //  320.5
    height: hp('7.4%') //  60
  },

  inputText_description: {
    width: wp('85.5%'), //  320.5
    height: hp('14.4%') //  117
  },

  imageInput: {
    width: wp('85.5%'), //  320.5
    height: hp('17.3%'), // 140.5
    backgroundColor: '#00000014',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp('2.5%') // 20.5
  },

  iconImage: {
    marginBottom: hp('2.21%') // 15~
  },

  imageInput_text: {
    fontSize: hp('2.35%'), //  16
    color: '#000',
    fontFamily: 'Poppins_400Regular'
  },

  image: {
    height: hp('17.3%'), // 140.5
    resizeMode: 'cover',
    borderRadius: 10,
    width: '100%'
  },

  buttonDisable: {
    width: wp('85.5%'), //  320.5
    height: hp('7.5%'), //  57
    backgroundColor: '#EBEBEB',
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

export default CreateEventStepOne
