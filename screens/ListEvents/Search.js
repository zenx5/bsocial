import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { useFonts, Poppins_300Light } from '@expo-google-fonts/poppins'  //  eslint-disable-line
import AppLoading from 'expo-app-loading'

//  icons
import IconSearch from '../../components/Icons/IconSearch'

const Search = () => {
  const [fontsLoaded] = useFonts({ Poppins_300Light })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={styles.search}>
      <IconSearch style={styles.search_icon} />
      <TextInput placeholder='Buscar eventos' placeholderTextColor='#00000060' style={styles.search_input} />
    </View>
  )
}

const styles = StyleSheet.create({
  search: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    paddingHorizontal: 10
  },

  search_icon: {
    position: 'absolute',
    top: 14,
    left: 20
  },

  search_input: {
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
