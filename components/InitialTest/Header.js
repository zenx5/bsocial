import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Constants from 'expo-constants'
import { useFonts, Poppins_600SemiBold } from '@expo-google-fonts/poppins'  // eslint-disable-line
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import AppLoading from 'expo-app-loading'

//  --> icons
import BSocial from '../Icons/BSocial'

const Header = (props) => {
  const [fontsLoaded] = useFonts({ Poppins_600SemiBold })

  const goHome = () => props.navigation.navigate('Home')

  if (!fontsLoaded) {
    <AppLoading />
  }

  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.header}>
        <View>
          <BSocial />
        </View>

        <TouchableOpacity onPress={goHome}>
          <Text style={styles.skip}>SKIP</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: Constants.statusBarHeight,
    flex: 1,
    justifyContent: 'center'
  },

  header: {
    paddingTop: hp('3%'), //  23.5
    paddingBottom: hp('2.4%'), //  19
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingRight: wp('9.1%'), // 34
    justifyContent: 'flex-end'
  },

  skip: {
    fontSize: hp('2.3%'), // 18
    fontFamily: 'Poppins_600SemiBold',
    color: '#E1B21C',
    marginLeft: wp('20%')
  }
})

export default Header
