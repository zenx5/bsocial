import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { useFonts, Poppins_300Light } from '@expo-google-fonts/poppins'  //  eslint-disable-line
import AppLoading from 'expo-app-loading'

//  icons
import IconSearch from './Icons/IconSearch'

const Search = () => {
  const [fontsLoaded] = useFonts({ Poppins_300Light })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={styles.container}>
      <IconSearch style={styles.searchIcon} />
      <TextInput placeholder='Buscar contactos' placeholderTextColor='#00000060' style={styles.searchInput} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative'
  },

  searchIcon: {
    position: 'absolute',
    top: 14,
    left: 13
  },

  searchInput: {
    fontSize: '16',
    width: '100%',
    height: 48,
    paddingLeft: 52,
    backgroundColor: '#0000000D',
    borderRadius: 10,
    fontFamily: 'Poppins_300Light'
  }
})

export default Search
