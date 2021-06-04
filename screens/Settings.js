import React, { useContext } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import { useFonts, Poppins_300Light, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins'  // eslint-disable-line
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import AppLoading from 'expo-app-loading'
import AuthContext from '../context/Auth/AuthContext'

//  icons / logos
import IconNext from '../components/Icons/IconNext'

const Settings = () => {
  const { signOut, photo, name, lastName, email } = useContext(AuthContext)
  console.log(photo)

  const [fontsLoaded] = useFonts({ Poppins_300Light, Poppins_500Medium, Poppins_700Bold })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={styles.container}>

      {/* header */}
      <View style={styles.header}>
        <Text style={styles.header_text}>Ajustes</Text>
      </View>

      {/* foto de perfil */}
      <View style={styles.section}>
        <Text style={styles.section_title}>Foto de perfil</Text>
        <View style={styles.section_body}>
          <Image style={styles.image} source={{ uri: photo }} />
          <IconNext stroke='#00000029' />
        </View>
      </View>

      {/* separator */}
      <View style={styles.separator} />

      {/* account */}
      <View style={styles.section}>
        <Text style={styles.section_title}>Cuenta</Text>
        <View style={styles.section_body}>
          <Text style={styles.text}>{email}</Text>
          <IconNext stroke='#00000029' />
        </View>
      </View>

      {/* separator */}
      <View style={styles.separator} />

      {/* name */}
      <View style={styles.section}>
        <Text style={styles.section_title}>Nombre</Text>
        <View style={styles.section_body}>
          <Text style={styles.text}>{name} {lastName}</Text>
          <IconNext stroke='#00000029' />
        </View>
      </View>

      {/* separator */}
      <View style={styles.separator} />

      {/* actualizar contraseña */}
      <View style={styles.section}>
        <Text style={styles.section_title}>Actualizar Contraseña</Text>
        <View style={styles.section_body}>
          <IconNext stroke='#00000029' />
        </View>
      </View>

      {/* separator */}
      <View style={styles.separator} />

      {/* Intereses */}
      <View style={styles.section}>
        <Text style={styles.section_title}>Intereses</Text>
        <View style={styles.section_body}>
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
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: hp('7.2%'),
    paddingBottom: hp('3%'), // ~22.9
    paddingHorizontal: wp('7.2%') // ~27
  },

  header: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
    marginBottom: hp('3.5%') // ~26
  },

  header_text: {
    fontSize: hp('2.7%'), // ~20
    fontFamily: 'Poppins_700Bold'
  },

  section: {
    width: '100%',
    height: hp('7.7%'), //  ~62
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  section_title: {
    fontSize: hp('1.5%'), //  12~
    color: '#000',
    fontFamily: 'Poppins_500Medium'
  },

  section_body: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  image: {
    width: wp('15%'), //  ~54
    height: wp('15%'), //  ~54
    borderRadius: 10,
    backgroundColor: '#00000029',
    marginRight: wp('8%') // 30
  },

  text: {
    fontSize: hp('1.5%'), //  12
    color: '#000',
    fontFamily: 'Poppins_300Light',
    marginRight: wp('8%') // 30
  },

  separator: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#00000014',
    marginVertical: hp('0.8%') //  6.5
  },

  button: {
    width: wp('77.7%'), //  291~
    height: hp('4.5%'), //  36~
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 16,
    borderColor: '#EC6666',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp('21%') // 170~
  },

  buttonText: {
    fontSize: hp('1.7%'), //  14
    color: '#EC6666',
    fontFamily: 'Poppins_500Medium'
  }
})

export default Settings
