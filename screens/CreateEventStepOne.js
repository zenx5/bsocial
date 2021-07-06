import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Platform, Alert, ScrollView, Switch } from 'react-native'
import { useFonts, Poppins_300Light, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins'  //  eslint-disable-line
import AppLoading from 'expo-app-loading'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import * as ImagePicker from 'expo-image-picker'
import EventsContext from '../context/Events/EventsContext'
import Constants from 'expo-constants'

//    -->   components
import LocationPicker from '../components/CreateEvent/LocationPicker'
import DateTimePicker from '../components/CreateEvent/DateTimePicker'
import CategoryPicker from '../components/CreateEvent/CategoryPicker'

//    -->   icons
import IconClose from '../components/Icons/IconClose'
import IconImage from '../components/Icons/IconImage'

const CreateEventStepOne = (props) => {
  //    -->   fonts
  const [fontsLoaded] = useFonts({ Poppins_300Light, Poppins_400Regular, Poppins_700Bold })

  //    -->   context
  const {
    address,
    latitude,
    longitude,
    startDate,
    startTime,
    category,
    setEventName,
    setEventDescription,
    setEventImage,
    setEventType
  } = useContext(EventsContext)

  //    -->   create event, data
  const [eventData, setEventData] = useState({
    name: '',
    description: '',
    image: {
      width: '',
      height: '',
      uri: ''
    },
    type: 'private'
  })

  //    -->   handle name
  const handleName = (value) => setEventData({ ...eventData, name: value })

  //    -->   description handler
  const handleDescription = (value) => setEventData({ ...eventData, description: value })

  //  -->    image input handler
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
          setEventData({
            ...eventData,
            image: {
              width: result.width,
              height: result.height,
              uri: result.uri
            }
          })
        }
      }
    }
  }

  //  handler switch
  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState)

    if (isEnabled) {
      setEventData({ ...eventData, type: 'private' })
    } else {
      setEventData({ ...eventData, type: 'public' })
    }
  }

  //  actvate button
  const [completeInfo, setCompleteInfo] = useState(false)

  useEffect(() => {
    if (
      address &&
      latitude &&
      longitude &&
      startDate &&
      startTime &&
      eventData.name &&
      eventData.description &&
      eventData.image.uri &&
      category
    ) {
      setCompleteInfo(true)
    } else {
      setCompleteInfo(false)
    }
  }, [
    latitude &&
    longitude &&
    address &&
    startDate &&
    startTime &&
    eventData.name &&
    eventData.description &&
    eventData.image.uri &&
    category
  ])

  //    -->   next step
  const goStepTwo = () => props.navigation.navigate('Create Event Step Two')

  const onPress = () => {
    setEventName(eventData.name)
    setEventDescription(eventData.description)
    setEventImage(eventData.image)
    setEventType(eventData.type)
    goStepTwo()
  }

  //    -->   on waiting for the fonts
  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Crear evento</Text>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <IconClose style={styles.iconClose} />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/*  location picker */}
        <LocationPicker />

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
            eventData.image.uri
              ? <Image style={styles.image} source={{ uri: eventData.image.uri }} />
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

        {/* Switch  */}
        <View style={styles.switchContainer}>
          <Text style={styles.typeEvent}>Evento Publico: </Text>
          <Switch
            trackColor={{ false: '#767577', true: '#767577' }}
            thumbColor={isEnabled ? '#E1B21C' : '#f4f3f4'}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>

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
      </ScrollView>
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

  header: {
    backgroundColor: '#fff',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Constants.statusBarHeight,
    paddingTop: hp('4%'), //  27.4
    paddingBottom: hp('3%'), //  20.5
    paddingHorizontal: wp('6.6%') //  27~
  },

  title: {
    fontFamily: 'Poppins_700Bold',
    fontSize: hp('2.7%') // 18.2~
  },

  iconClose: {
    width: wp('5%'), // 20.57
    height: hp('3%') // 20.57
  },

  inputText_inactive: {
    width: wp('85.5%'), //  320.5
    alignSelf: 'center',
    fontSize: hp('2.35%'), //  16
    color: '#000',
    fontFamily: 'Poppins_400Regular',
    paddingLeft: wp('4.18%'), // 17~
    backgroundColor: '#00000014',
    borderRadius: 10,
    marginBottom: hp('3%')
  },

  inputText_active: {
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#00000080'
  },

  inputText_name: {
    height: hp('8.5%')
  },

  inputText_description: {
    height: hp('14.4%'), //  117
    textAlignVertical: 'top',
    paddingTop: hp('2%')
  },

  imageInput: {
    width: wp('85.5%'), //  320.5
    height: hp('17.3%'), // 140.5
    backgroundColor: '#00000014',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: hp('3%')
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

  switchContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: hp('3%') // 17.1
  },

  typeEvent: {
    fontSize: hp('2.4%'), //  ~18
    fontFamily: 'Poppins_400Regular',
    marginRight: wp('3%')
  },

  buttonDisable: {
    width: wp('85.5%'), //  320.5
    height: hp('7.5%'), //  57
    backgroundColor: '#EBEBEB',
    borderWidth: 0,
    borderRadius: 29,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 20
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
