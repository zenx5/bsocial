import React, { useEffect, useState, useContext } from 'react'
import { StyleSheet, Text, View, Alert } from 'react-native'
import { useFonts, Poppins_700Bold } from '@expo-google-fonts/poppins' // eslint-disable-line
import AppLoading from 'expo-app-loading'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import * as Location from 'expo-location'
import { StatusBar } from 'expo-status-bar'
import MapView, { Marker } from 'react-native-maps'
import EventsContext from '../../context/Events/EventsContext'
import AuthContext from '../../context/Auth/AuthContext'
import { MAP_STYLE } from '../../constants'

const UpcomingEvents = () => {
  //  load fonts
  const [fontsLoaded] = useFonts({ Poppins_700Bold })

  //  context
  const { userToken } = useContext(AuthContext)
  const { upcoming, getAllCategories } = useContext(EventsContext)

  const initialRegion = {
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0122,
    longitudeDelta: 0.0121
  }
  //  get current location
  const [location, setLocation] = useState(initialRegion)

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        Alert.alert(
          'Error',
          'Se requiere persmisos a la ubicacion',
          [{ text: 'OK' }],
          { cancelable: false }
        )
        return
      }

      const location = await Location.getCurrentPositionAsync({})
      setLocation(location.coords)
    })()

    //  get all categories
    getAllCategories(userToken)
  }, [])

  //  state
  const [upcomingEvents, setUpcomingEvents] = useState([])

  //  parsed events, categories and set in state
  useEffect(() => {
    const eventList = []
    upcoming.map((event) => (
      eventList.push({
        id: event.id,
        name: event.name,
        latitude: event.latitud,
        longitude: event.longitud,
        type: event.type,
        category: event.categories[0].display_name,
        selected: false
      })
    ))
    setUpcomingEvents(eventList)
  }, [upcoming])

  //  waiting for fonts
  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={styles.upcomingEvents}>
      <StatusBar backgroundColor='#fff' />

      {/* header */}
      <View style={styles.upcomingEvents_header}>
        <Text style={styles.text}>Proximos Eventos</Text>
      </View>
      <View>

        <MapView
          style={styles.map}
          region={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0199,
            longitudeDelta: 0.02
          }}
          showsUserLocation
          customMapStyle={MAP_STYLE}
        >
          {
          upcomingEvents.map((item, index) => {
            return (
              <Marker
                key={index}
                coordinate={{
                  latitude: item.latitude,
                  longitude: item.longitude
                }}
              />
            )
          })
        }
        </MapView>
      </View>
    </View>
  )
}

export default UpcomingEvents

const styles = StyleSheet.create({
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
  },

  map: {
    width: wp('95%'), //  356~
    height: hp('30%'), // 243~
    borderRadius: 5,
    backgroundColor: '#00000020',
    alignSelf: 'center'
  },
  modal: {
    flex: 1,
    backgroundColor: '#00000050',
    alignItems: 'center',
    justifyContent: 'center'
  },

  modalBody: {
    width: '90%',
    height: '70%',
    backgroundColor: '#fff',
    borderRadius: 10
  },

  iconClose_Container: {
    position: 'absolute',
    top: 10,
    right: 10
  },

  iconClose: {
    width: wp('4%'), // 20.57
    height: hp('2.5%') // 20.57
  },

  item_category: {
    flexDirection: 'row',
    marginBottom: hp('5%')
  }
})
