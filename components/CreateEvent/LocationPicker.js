import React, { useState, useEffect, useContext } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Modal, Alert, TextInput } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import MapView, { Marker } from 'react-native-maps'
import * as Location from 'expo-location'
import { StatusBar } from 'expo-status-bar'
import EventsContext from '../../context/Events/EventsContext'
// eslint-disable-next-line camelcase
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins'
import AppLoading from 'expo-app-loading'
import { MAP_STYLE } from '../../constants'

//  icons
import IconGeolocalizador from '../Icons/IconGeolocalizador'
import IconTimeZone from '../Icons/IconTimeZone'
import IconClose from '../Icons/IconClose'

const LocationPicker = () => {
  //  context
  const { latitude, longitude, setCoordinate, setAddress } = useContext(EventsContext)

  //    -->   fonts
  const [fontsLoaded] = useFonts({ Poppins_400Regular })

  const initialRegion = {
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0122,
    longitudeDelta: 0.0121
  }

  const [currentLocation, setCurrentLocation] = useState(initialRegion)

  const [currentlocationName, setCurrentLocationName] = useState('')

  const handleLocationName = (value) => setCurrentLocationName(value)

  const onBlur = () => setAddress(currentlocationName)

  const [showMap, setShowMap] = useState(false)

  //  open the map
  const open = () => setShowMap(true)

  //  close the map
  const close = () => setShowMap(false)

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
      setCurrentLocation(location.coords)
    })()
  }, [])

  const location = (e) => {
    setCoordinate(e.nativeEvent.coordinate)
    setCurrentLocation(e.nativeEvent.coordinate)
  }

  //    -->   on waiting for the fonts
  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={styles.container}>
      {showMap ? <StatusBar backgroundColor='#00000050' /> : null}
      <View>
        <TextInput
          style={[styles.locationInput_inactive, (latitude && longitude && currentlocationName) && styles.locationInput_active]}
          placeholder='Ubicacion'
          placeholderTextColor='#000'
          value={currentlocationName}
          onChangeText={handleLocationName}
          onBlur={onBlur}
        />
        <TouchableOpacity onPress={open} style={styles.containerIconGeolocalizador}>
          <IconGeolocalizador style={styles.iconGeolocalizador} />
        </TouchableOpacity>
      </View>

      <View style={styles.location_footer}>
        <IconTimeZone style={styles.iconTimeZone} />
        <Text style={styles.location_footerText}>Zona horaria determinada por ubicación</Text>
      </View>

      <Modal
        visible={showMap}
        transparent
        animationType='fade'
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <MapView
              style={styles.map}
              region={{
                latitude: currentLocation.latitude,
                longitude: currentLocation.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
              }}
              customMapStyle={MAP_STYLE}
            >
              <Marker
                coordinate={{
                  latitude: currentLocation.latitude,
                  longitude: currentLocation.longitude
                }}
                draggable
                onDragEnd={location}
              />
            </MapView>
            <TouchableOpacity onPress={close} style={styles.iconContainer}>
              <IconClose style={styles.iconClose} />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: wp('85.5%'), //  320.5
    alignSelf: 'center',
    marginBottom: hp('2.5%') // 17.1
  },

  locationInput_inactive: {
    width: wp('85.5%'), //  320.5
    height: hp('8.5%'),
    alignSelf: 'center',
    fontSize: hp('2.35%'), //  16
    fontFamily: 'Poppins_400Regular',
    color: '#000',
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

  locationInput_active: {
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#00000080'
  },

  containerIconGeolocalizador: {
    position: 'absolute',
    top: hp('0.8%'),
    right: 5
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

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000050'
  },

  modalView: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    height: hp('50%'),
    width: wp('90%'),
    backgroundColor: '#00000050',
    borderRadius: 10,
    position: 'relative'
  },

  iconContainer: {
    position: 'absolute',
    top: 10,
    right: 10
  },

  iconClose: {
    width: wp('4%'), // 20.57
    height: hp('2.5%') // 20.57
  },

  map: {
    height: hp('50%'),
    width: wp('90%'),
    borderRadius: 10,
    backgroundColor: '#00000020',
    alignSelf: 'center'
  }
})

export default LocationPicker
