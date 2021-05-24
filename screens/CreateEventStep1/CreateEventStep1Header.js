import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import { useFonts, Poppins_700Bold } from '@expo-google-fonts/poppins'  //  eslint-disable-line
import AppLoading from 'expo-app-loading'

//  icons
import IconClose from '../../components/Icons/IconClose'

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
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 30,
    paddingBottom: 15,
    paddingHorizontal: 20
  }
})

export default CreateEventStep1Header
