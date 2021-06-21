import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native'
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins'  //  eslint-disable-line
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import AppLoading from 'expo-app-loading'

//  -->   icons
import IconSearch from '../Icons/IconSearch'
import IconClose from '../Icons/IconClose'

const Header = ({ isSearch, openSearch, closeSearch, fadeAnimationSearch, fadeAnimationTitle, footerText }) => {
  const [fontsLoaded] = useFonts({ Poppins_400Regular })

  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <View style={styles.headerContainer}>
      <Animated.View style={[styles.header, { opacity: fadeAnimationTitle }, isSearch && styles.disable]}>
        <Text style={styles.header_title}>Contactos</Text>

        <TouchableOpacity onPress={openSearch} style={styles.header_icon}>
          <IconSearch />
        </TouchableOpacity>
      </Animated.View>

      <Animated.View style={[styles.search, { opacity: fadeAnimationSearch }, !isSearch && styles.disable]}>
        <View>
          {/* <Search /> */}
        </View>
        <TouchableOpacity onPress={closeSearch} style={styles.search_icon}>
          <IconClose />
        </TouchableOpacity>
      </Animated.View>
      <Text style={styles.header_footer}>{footerText}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    backgroundColor: '#fff',
    paddingTop: hp('4.4%'), //  30~
    paddingBottom: hp('2.1%') // 14~
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: wp('6.6%'), // 27~
    paddingRight: wp('8.8%'), //  36~
    marginBottom: hp('4%') // 27~
  },

  header_title: {
    fontSize: hp('3%'), //  20.5~~
    fontFamily: 'Poppins_700Bold',
    color: '#000'
  },

  header_footer: {
    fontSize: hp('2.1%'), // 14.4~
    fontFamily: 'Poppins_400Regular',
    marginLeft: wp('4.4%') // 18.2~
  },

  search: {
    position: 'relative',
    marginTop: -11,
    marginBottom: 20
  },

  search_icon: {
    position: 'absolute',
    top: 15,
    right: 19
  },

  disable: {
    display: 'none'
  }
})

export default Header
