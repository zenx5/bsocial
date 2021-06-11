import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Constants from 'expo-constants'

//  icons
import IconBack from '../Icons/IconBack'

const Header = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <IconBack />
      </TouchableOpacity>
      <Text style={styles.title}>Invitar Contactos</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    marginTop: Constants.statusBarHeight,
    paddingTop: hp('4%'), //  27.4
    // paddingBottom: hp('3%'), //  20.5
    paddingHorizontal: wp('6.6%') //  27~
  },

  title: {
    fontFamily: 'Poppins_700Bold',
    fontSize: hp('2.7%'), // 18.2~
    marginLeft: 'auto',
    marginRight: 'auto'
  }

})

export default Header
