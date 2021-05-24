import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native'
import { useFonts, Poppins_700Bold } from '@expo-google-fonts/poppins'  //  eslint-disable-line
import AppLoading from 'expo-app-loading'

const HomeHeader = ({ navigation }) => {
  const [fontsLoaded] = useFonts({ Poppins_700Bold })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Create Event Step 1')} style={styles.button}>
        <Text style={styles.buttonText}>Crear Evento</Text>
      </TouchableOpacity>

      <View>
        <Image
          style={styles.image}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 20,
    marginBottom: 7
  },

  button: {
    width: 236,
    height: 50,
    backgroundColor: '#E1B21C',
    borderRadius: 27,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Poppins_700Bold',
    textTransform: 'uppercase'
  },

  image: {
    width: 53,
    height: 53,
    borderRadius: 6,
    backgroundColor: '#00000029'
  }
})

export default HomeHeader
