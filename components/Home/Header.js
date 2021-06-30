import React, { useContext } from 'react'
import { View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import AuthContext from '../../context/Auth/AuthContext'
import Constants from 'expo-constants'

const Header = (props) => {
  const { photo } = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => props.navigation.navigate('Create Event Step Two')} style={styles.button}>
        <Text style={styles.buttonText}>Crear Evento</Text>
      </TouchableOpacity>
      <View>
        <Image style={styles.image} source={{ uri: photo }} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
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

export default Header
