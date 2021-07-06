import React, { useContext, useEffect } from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins' // eslint-disable-line
import AppLoading from 'expo-app-loading'
import { StatusBar } from 'expo-status-bar'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import AuthContext from '../context/Auth/AuthContext'
import EventsContext from '../context/Events/EventsContext'

//  icons
import IconCheck from '../components/Icons/IconCheck'

const CreateEventStep3 = (props) => {
  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_700Bold })
  const goHome = () => props.navigation.navigate('Home')

  const { userToken } = useContext(AuthContext)
  const {
    createNewEvent,
    locationName,
    latitude,
    longitude,
    date,
    time,
    eventName,
    eventDescription,
    eventImage,
    categorySelected,
    invitedContacts
  } = useContext(EventsContext)

  useEffect(() => {
    createNewEvent(
      userToken,
      locationName,
      latitude,
      longitude,
      date,
      time,
      eventName,
      eventDescription,
      eventImage,
      categorySelected,
      invitedContacts
    )
  }, [])

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <ImageBackground source={require('../assets/backgroundStep3.png')} style={styles.image}>
        <View style={styles.message}>
          <IconCheck style={styles.iconCheck} fill='#fff' />
          <View style={styles.text1Container}>
            <Text style={styles.title}>Tu evento fue creado con éxito!</Text>
          </View>
          <View style={styles.text2Container}>
            <Text style={styles.subTitle}>Felicidades tu evento fue creado, se les enviará una notificación a todos tus invitados</Text>
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
    alignItems: 'center'
  },

  iconCheck: {
    width: wp('12.7%'), // 52.19
    height: hp('5.6%') // 38.09
  },

  title: {
    color: '#fff',
    fontSize: 22,
    fontFamily: 'Poppins_700Bold',
    textAlign: 'center',
    width: wp('60%'), //  246.85
    marginTop: hp('3.4%'), // 23.23
    marginBottom: hp('1.8%') //  12.19
  },

  subTitle: {
    color: '#fff',
    fontSize: hp('1.8%'), //  12.19
    fontFamily: 'Poppins_400Regular',
    textAlign: 'center',
    width: wp('75%'), //  308.57
    marginBottom: hp('3.7%') // 25.14
  },

  buttom: {
    backgroundColor: '#231F20',
    width: wp('69%'), //  283.80
    height: hp('8.4%'), //  57.52
    borderRadius: 29,
    justifyContent: 'center',
    alignContent: 'center'
  },

  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: hp('2.7%'), //  18.28
    textTransform: 'uppercase',
    fontFamily: 'Poppins_700Bold'
  }
})

export default CreateEventStep3
