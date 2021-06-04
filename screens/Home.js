import React, { useContext, useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native'
import AuthContext from '../context/Auth/AuthContext'
import * as Location from 'expo-location'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

//  icons
import IconSettings from '../components/Icons/IconSettings'

import FeaturedEvents from './casa/FeaturedEvents'

const Home = (props) => {
  const { photo } = useContext(AuthContext)
  const [location, setLocation] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied')
        Alert.alert(
          'Error',
          'Se requiere persmisos a la ubicacion',
          [{ text: 'OK' }],
          { cancelable: false }
        )
        return
      }

      const location = await Location.getCurrentPositionAsync({})
      setLocation(location)
    })()
  }, [])

  let text = 'Waiting..'
  if (errorMsg) {
    text = errorMsg
  } else if (location) {
    text = JSON.stringify(location)
  }

  console.log(location)

  return (
    <View>
      {/* header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => console.log('press')} style={styles.button}>
          <Text style={styles.buttonText}>Crear Evento</Text>
        </TouchableOpacity>
        <View>
          <Image style={styles.image} source={{ uri: photo }} />
        </View>
      </View>

      {/* upcoming events */}
      <View style={styles.upcomingEvents}>
        <View style={styles.upcomingEvents_header}>
          <Text style={styles.text}>Proximos Eventos</Text>
          <IconSettings />
        </View>
        <View style={styles.map}>
          <Text style={styles.paragraph}>{text}</Text>
        </View>
      </View>

      <FeaturedEvents />

    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: hp('3%'), //  22.9~
    paddingHorizontal: wp('7.2%'), // 27~
    paddingBottom: hp('2.2%'), // 18~
    marginBottom: hp('0.9%') // 7~
  },

  button: {
    width: wp('63%'), //  236~
    height: hp('6.2%'), //  50~
    backgroundColor: '#E1B21C',
    borderRadius: 27,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: hp('2%'), // 16~
    fontFamily: 'Poppins_700Bold',
    textTransform: 'uppercase'
  },

  image: {
    width: hp('6.5%'), //  53~
    height: hp('6.5%'), //  53~
    borderRadius: 6,
    backgroundColor: '#00000029'
  },

  upcomingEvents: {
    backgroundColor: '#fff',
    flexDirection: 'column',
    paddingTop: hp('1.6%'), //  13
    paddingBottom: hp('1.85%'), // 15
    marginBottom: hp('1.5%'), // 12,
    justifyContent: 'center'
  },

  upcomingEvents_header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: wp('3.4%'), //  13
    paddingRight: wp('11.5%'), // 43
    marginBottom: hp('1.4%') // 11.5
  },

  text: {
    fontSize: hp('1.95%'), //  16
    fontFamily: 'Poppins_700Bold',
    textTransform: 'uppercase'
  },

  map: {
    width: wp('95%'), //  356~
    height: hp('30%'), // 243~
    borderRadius: 5,
    backgroundColor: '#00000020',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },

  paragraph: {
    flexWrap: 'wrap'
  }
})

export default Home
