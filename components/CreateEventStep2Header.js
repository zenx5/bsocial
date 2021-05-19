import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins'  //  eslint-disable-line
import AppLoading from 'expo-app-loading'

//  components
import Search from './Search'

//  icons
import IconBack from './Icons/IconBack'
import IconClose from './Icons/IconClose'

const CreateEventStep2Header = (props) => {
  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_700Bold })
  const goBack = () => props.navigation.goBack()
  const goHome = () => props.navigation.navigate('Home')

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.left}>
          <TouchableOpacity onPress={goBack}>
            <IconBack />
          </TouchableOpacity>
          <Text style={styles.title}>Invita tus contactos</Text>
        </View>

        <TouchableOpacity onPress={goHome}>
          <IconClose />
        </TouchableOpacity>
      </View>

      <View style={styles.search}>
        <Search />
      </View>

      <Text style={styles.footer}>Selecciona los contactos que quieras invitar a tu meet</Text>
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    width: '100%',
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'column',
    paddingTop: 30,
    paddingBottom: 15,
    paddingHorizontal: 20
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30
  },

  left: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  title: {
    fontSize: 18,
    fontFamily: 'Poppins_700Bold',
    color: '#000',
    marginLeft: 23.5
  },

  search: {
    marginBottom: 13
  },

  footer: {
    fontSize: 12,
    fontFamily: 'Poppins_400Regular'
  }
})

export default CreateEventStep2Header
