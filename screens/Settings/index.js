import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import { useFonts, Poppins_300Light, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins'  // eslint-disable-line
import AppLoading from 'expo-app-loading'

//  components

//  icons / logos
import IconArrowLeft from '../../components/Icons/IconArrowLeft'

const Settings = (props) => {
  const logout = () => props.navigation.navigate('Login')

  const [fontsLoaded] = useFonts({ Poppins_300Light, Poppins_500Medium, Poppins_700Bold })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Ajustes</Text>

      {/* foto de perfil */}
      <View style={styles.section}>
        <Text style={styles.sectionName}>Foto de perfil</Text>
        <View style={styles.sectionContent}>
          <Image style={styles.contentSectionImage} />
          <IconArrowLeft stroke='#00000029' />
        </View>
      </View>

      {/* separator */}
      <View style={styles.separator} />

      {/* account */}
      <View style={styles.section}>
        <Text style={styles.sectionName}>Nombre</Text>
        <View style={styles.sectionContent}>
          <Text style={styles.contentSectionText}>John William</Text>
          <IconArrowLeft stroke='#00000029' />
        </View>
      </View>

      {/* separator */}
      <View style={styles.separator} />

      {/* name */}
      <View style={styles.section}>
        <Text style={styles.sectionName}>Nombre</Text>
        <View style={styles.sectionContent}>
          <Text style={styles.contentSectionText}>johnywill@gmail.com</Text>
          <IconArrowLeft stroke='#00000029' />
        </View>
      </View>

      {/* separator */}
      <View style={styles.separator} />

      {/* actualizar contraseña */}
      <View style={styles.section}>
        <Text style={styles.sectionName}>Actualizar Contraseña</Text>
        <View style={styles.sectionContent}>
          <IconArrowLeft stroke='#00000029' />
        </View>
      </View>

      {/* separator */}
      <View style={styles.separator} />

      {/* Intereses */}
      <View style={styles.section}>
        <Text style={styles.sectionName}>Intereses</Text>
        <View style={styles.sectionContent}>
          <IconArrowLeft stroke='#00000029' />
        </View>
      </View>

      <TouchableOpacity onPress={logout} style={styles.button}>
        <Text style={styles.buttonText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 30,
    paddingBottom: 30
  },

  title: {
    fontSize: 20,
    fontFamily: 'Poppins_700Bold',
    alignSelf: 'flex-start',
    paddingLeft: 30,
    marginBottom: 26
  },

  section: {
    width: 375,
    height: 62,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  sectionName: {
    fontSize: 12,
    color: '#000',
    fontFamily: 'Poppins_500Medium',
    paddingLeft: 30
  },

  sectionContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 30
  },

  contentSectionText: {
    fontSize: 12,
    color: '#000',
    fontFamily: 'Poppins_300Light',
    paddingRight: 30
  },

  contentSectionImage: {
    width: 53,
    height: 53,
    borderRadius: 10,
    backgroundColor: '#00000029',
    marginRight: 30
  },

  separator: {
    width: 350,
    borderBottomWidth: 1,
    borderColor: '#00000014',
    marginVertical: 7.5
  },

  button: {
    width: 291,
    height: 36,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 16,
    borderColor: '#EC6666',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 175
  },

  buttonText: {
    fontSize: 14,
    color: '#EC6666',
    fontFamily: 'Poppins_500Medium'
  }
})

export default Settings
