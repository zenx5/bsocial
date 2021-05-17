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
      <TouchableOpacity onPress={() => navigation.navigate('Create Event')} style={styles.button}>
        <Text style={styles.buttonText}>Crear Evento</Text>
      </TouchableOpacity>
      <Image
        style={styles.image}
        source={{
          uri: 'https://static3.abc.es/media/tecnologia/2020/12/18/cyberpunk-kcrB--620x349@abc.jpg'
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 15,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  button: {
    width: 236,
    height: 50,
    backgroundColor: '#E1B21C',
    borderRadius: 27,
    paddingVertical: 13,
    marginLeft: 23,
    marginBottom: 18
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
    marginRight: 18,
    borderRadius: 6
  }
})

export default HomeHeader
