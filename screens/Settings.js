import React, { useContext } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import { useFonts, Poppins_300Light, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins'  // eslint-disable-line
import AppLoading from 'expo-app-loading'
import AuthContext from '../context/Auth/AuthContext'

//  components

//  icons / logos
import IconNext from '../components/Icons/IconNext'

const Settings = () => {
  const { signOut } = useContext(AuthContext)

  const [fontsLoaded] = useFonts({ Poppins_300Light, Poppins_500Medium, Poppins_700Bold })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Ajustes</Text>

      {/* foto de perfil */}
      <View style={styles.section}>
        <Text style={styles.sectionName}>Foto de perfil</Text>
        <View style={styles.sectionContent}>
          <Image style={styles.contentSectionImage} />
          <IconNext stroke='#00000029' />
        </View>
      </View>

      {/* separator */}
      <View style={styles.separator} />

      {/* account */}
      <View style={styles.section}>
        <Text style={styles.sectionName}>Cuenta</Text>
        <View style={styles.sectionContent}>
          <Text style={styles.contentSectionText}>johnywill@gmail.com</Text>
          <IconNext stroke='#00000029' />
        </View>
      </View>

      {/* separator */}
      <View style={styles.separator} />

      {/* name */}
      <View style={styles.section}>
        <Text style={styles.sectionName}>Nombre</Text>
        <View style={styles.sectionContent}>
          <Text style={styles.contentSectionText}>John William</Text>
          <IconNext stroke='#00000029' />
        </View>
      </View>

      {/* separator */}
      <View style={styles.separator} />

      {/* actualizar contraseña */}
      <View style={styles.section}>
        <Text style={styles.sectionName}>Actualizar Contraseña</Text>
        <View style={styles.sectionContent}>
          <IconNext stroke='#00000029' />
        </View>
      </View>

      {/* separator */}
      <View style={styles.separator} />

      {/* Intereses */}
      <View style={styles.section}>
        <Text style={styles.sectionName}>Intereses</Text>
        <View style={styles.sectionContent}>
          <IconNext stroke='#00000029' />
        </View>
      </View>

      <TouchableOpacity onPress={signOut} style={styles.button}>
        <Text style={styles.buttonText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 35,
    paddingBottom: 20,
    paddingHorizontal: 30
  },

  header: {
    fontSize: 20,
    fontFamily: 'Poppins_700Bold',
    alignSelf: 'flex-start',
    marginBottom: 26
  },

  section: {
    width: '100%',
    height: 62,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 30
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
    alignItems: 'center'
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
    width: '100%',
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