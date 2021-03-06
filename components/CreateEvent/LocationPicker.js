import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Modal, Alert } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import MapView, { Marker } from 'react-native-maps'
import * as Location from 'expo-location'

//  icons
import IconGeolocalizador from '../Icons/IconGeolocalizador'
import IconTimeZone from '../Icons/IconTimeZone'
import IconClose from '../Icons/IconClose'

const LocationPicker = () => {
  const [showMap, setShowMap] = useState(false)

  const open = () => setShowMap(true)

  const close = () => setShowMap(false)

  const initialRegion = {
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0122,
    longitudeDelta: 0.0121
  }

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
      console.log(location.coords.latitude)
      console.log(location.coords.longitude)
    })()
  }, [])

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={open} style={styles.locationInput}>
        <Text style={styles.inputText}>Ubicación</Text>
        <IconGeolocalizador style={styles.iconGeolocalizador} />
      </TouchableOpacity>
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
    width: '100%',
    marginBottom: hp('2.5%'), // 17.1
    paddingHorizontal: wp('6.6%') //  27~
  },

  locationInput: {
    height: hp('8%'), //  48
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

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
    position: 'absolute'
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
