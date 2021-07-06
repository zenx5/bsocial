import React from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { useFonts, Poppins_300Light } from '@expo-google-fonts/poppins'  //  eslint-disable-line
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import AppLoading from 'expo-app-loading'

//  icons
import IconSearch from './Icons/IconSearch'
import IconClose from './Icons/IconClose'

const Search = ({ isOpen, setIsOpen, open, toSearch }) => {
  console.log(toSearch)

  //  fonts
  const [fontsLoaded] = useFonts({ Poppins_300Light })

  //  show search bar

  if (!fontsLoaded) return <AppLoading />

  //  close search bar
  const close = () => setIsOpen(false)

  // when search is close
  if (!isOpen) {
    return (
      <TouchableOpacity onPress={open}>
        <IconSearch />
      </TouchableOpacity>
    )
  }

  //  when search is open
  if (isOpen) {
    return (
      <View style={styles.container}>
        <TextInput placeholder='Buscar contactos' placeholderTextColor='#00000060' style={styles.searchInput} />
        <View style={styles.iconSearch}>
          <IconSearch />
        </View>
        <TouchableOpacity onPress={close} style={styles.iconClose_Container}>
          <IconClose style={styles.iconClose} />
        </TouchableOpacity>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    marginTop: hp('3.7%'), //  25.37
    marginBottom: hp('4%') // 27.42
  },

  searchInput: {
    fontSize: hp('2.4'), // 16.45
    width: '100%',
    height: hp('7%'), //  48
    paddingLeft: wp('12.5%'), //  52.38
    backgroundColor: '#0000000D',
    borderRadius: 10,
    fontFamily: 'Poppins_300Light'
  },

  iconSearch: {
    position: 'absolute',
    top: 14,
    left: 13
  },

  iconClose_Container: {
    position: 'absolute',
    top: 15,
    right: 10
  },

  iconClose: {
    width: wp('4%'), // 20.57
    height: hp('2.5%') // 20.57
  }
})

export default Search
