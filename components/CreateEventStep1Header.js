import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import { useFonts, Poppins_700Bold } from '@expo-google-fonts/poppins'  //  eslint-disable-line
import AppLoading from 'expo-app-loading'

//  icons
import IconClose from './Icons/IconClose'

const CreateEventStep1Header = ({ navigation }) => {
  const [fontsLoaded] = useFonts({ Poppins_700Bold })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 18, fontFamily: 'Poppins_700Bold' }}>Crear evento</Text>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <IconClose />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 25,
    paddingHorizontal: 20
  }
})

export default CreateEventStep1Header
