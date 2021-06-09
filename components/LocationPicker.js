import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

//  icons
import IconGeolocalizador from './Icons/IconGeolocalizador'
import IconTimeZone from './Icons/IconTimeZone'

const LocationPicker = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.locationInput}>
        <Text style={styles.inputText}>Ubicación</Text>
        <IconGeolocalizador style={styles.iconGeolocalizador} />
      </TouchableOpacity>
      <View style={styles.location_footer}>
        <IconTimeZone style={styles.iconTimeZone} />
        <Text style={styles.location_footerText}>Zona horaria determinada por ubicación</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: hp('3.5%'), //  24
    marginBottom: hp('3.69%') // 25
  },

  locationInput: {
    height: hp('8.82%'), //  60~
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
  }
})

export default LocationPicker
