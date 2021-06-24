import React, { useState, useEffect, useContext } from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
// import * as Location from 'expo-location'
// import MapView, { Marker } from 'react-native-maps'
import { useFonts, Poppins_300Light, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins'  // eslint-disable-line
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import AppLoading from 'expo-app-loading'
import { StatusBar } from 'expo-status-bar'
import AuthContext from '../context/Auth/AuthContext'
import EventsContext from '../context/Events/EventsContext'

//  -->   components
import Header from '../components/Home/Header'
import FeaturedEvents from '../components/Home/FeaturedEvents'

//  icons
//  import IconSettings from '../components/Icons/IconSettings'

const Home = (props) => {
  //  -->   contexts
  const { userToken } = useContext(AuthContext)
  const { getEventsHome } = useContext(EventsContext)

  const [fontsLoaded] = useFonts({ Poppins_300Light, Poppins_500Medium, Poppins_700Bold })

  useEffect(() => {
    getEventsHome(userToken)
  }, [])

  // const initialRegion = {
  //   latitude: 0,
  //   longitude: 0,
  //   latitudeDelta: 0.0122,
  //   longitudeDelta: 0.0121
  // }

  // const [location, setLocation] = useState(initialRegion)

  // useEffect(() => {
  //   (async () => {
  //     const { status } = await Location.requestForegroundPermissionsAsync()
  //     if (status !== 'granted') {
  //       Alert.alert(
  //         'Error',
  //         'Se requiere persmisos a la ubicacion',
  //         [{ text: 'OK' }],
  //         { cancelable: false }
  //       )
  //       return
  //     }

  //     const location = await Location.getCurrentPositionAsync({})
  //     setLocation(location.coords)
  //     console.log(location.coords.latitude)
  //     console.log(location.coords.longitude)
  //   })()
  // }, [])

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#fff' />

      {/* header */}
      <Header {...props} />

      <Text>Home</Text>

      {/* upcoming events
      <View style={styles.upcomingEvents}>
        <View style={styles.upcomingEvents_header}>
          <Text style={styles.text}>Proximos Eventos</Text>
          <IconSettings />
        </View> */}
      {/* <View>
          <MapView
            style={styles.map}
            region={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01
            }}
            showsUserLocation
          >
            <Marker
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude
              }}
            />
          </MapView>
        </View>
      </View> */}

      {/* featured Events */}
      <FeaturedEvents {...props} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
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
    paddingRight: wp('10%'), // 43
    marginBottom: hp('1.4%') // 11.5
  },

  text: {
    fontSize: hp('1.95%'), //  16
    fontFamily: 'Poppins_700Bold',
    textTransform: 'uppercase'
  }

  // // map: {
  // //   width: wp('95%'), //  356~
  // //   height: hp('30%'), // 243~
  // //   borderRadius: 5,
  // //   backgroundColor: '#00000020',
  // //   alignSelf: 'center'
  // // }
})

export default Home
