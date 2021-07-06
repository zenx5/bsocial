import React, { useEffect, useState, useContext } from 'react'
import { StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native'
// eslint-disable-next-line camelcase
import { useFonts, Poppins_700Bold } from '@expo-google-fonts/poppins'
import AppLoading from 'expo-app-loading'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import * as Location from 'expo-location'
import MapView, { Marker } from 'react-native-maps'
import EventsContext from '../../context/Events/EventsContext'

//  components
import UpcomingEventsSettings from './UpcomingEventsSettings'

//  icons
import IconSettings from '../Icons/IconSettings'

const UpcomingEvents = () => {
  //  load fonts
  const [fontsLoaded] = useFonts({ Poppins_700Bold })

  //  context
  const { upcoming } = useContext(EventsContext)

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
  }, [])

  //  show map settings
  const [showSettings, setShowSettings] = useState(false)

  const onPress = () => setShowSettings(previousState => !previousState)

  //  waiting for fonts
  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={styles.upcomingEvents}>
      <View style={styles.upcomingEvents_header}>
        <Text style={styles.text}>Proximos Eventos</Text>
        <TouchableOpacity onPress={onPress}>
          <IconSettings />
          {showSettings
            ? <UpcomingEventsSettings
                showSettings={showSettings}
                setShowSettings={setShowSettings}
              />
            : null}
        </TouchableOpacity>
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
        >
          {
          upcoming.map((item, index) => {
            return (
              <Marker
                key={index}
                coordinate={{
                  latitude: item.latitud,
                  longitude: item.longitud
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
  }
})
