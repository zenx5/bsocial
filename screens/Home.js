import React, { useEffect, useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
// eslint-disable-next-line camelcase
import { useFonts, Poppins_700Bold } from '@expo-google-fonts/poppins'
import AppLoading from 'expo-app-loading'
import { StatusBar } from 'expo-status-bar'
import AuthContext from '../context/Auth/AuthContext'
import EventsContext from '../context/Events/EventsContext'
import Constants from 'expo-constants'

//    -->   components
import UpcomingEvents from '../components/Home/UpcomingEvents'
import FeaturedEvents from '../components/Home/FeaturedEvents'

const Home = (props) => {
  //  load fonts
  const [fontsLoaded] = useFonts({ Poppins_700Bold })

  //  context
  const { getEventsHome } = useContext(EventsContext)
  const { userToken, photo } = useContext(AuthContext)

  // get all events for home
  useEffect(() => {
    getEventsHome(userToken)
  }, [])

  //  waiting for fonts
  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#fff' />

      {/* header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Create Event Step One')} style={styles.button}>
          <Text style={styles.buttonText}>Crear Evento</Text>
        </TouchableOpacity>
        <View>
          <Image style={styles.image} source={{ uri: photo }} />
        </View>
      </View>

      {/* upcoming events */}
      <UpcomingEvents />

      {/* featured Events */}
      <FeaturedEvents {...props} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  header: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Constants.statusBarHeight,
    marginBottom: hp('0.9%'), // 7~
    paddingVertical: hp('2.2%'), // 18~
    paddingHorizontal: wp('7.2%') // 27~
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
  }
})

export default Home
