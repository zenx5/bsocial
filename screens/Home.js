import React, { useContext } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import AuthContext from '../context/Auth/AuthContext'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

//  icons
import IconSettings from '../components/Icons/IconSettings'

const Home = (props) => {
  const { photo } = useContext(AuthContext)

  return (
    <View>
      {/* header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Create Event Step 1')} style={styles.button}>
          <Text style={styles.buttonText}>Crear Evento</Text>
        </TouchableOpacity>
        <View>
          <Image style={styles.image} source={{ uri: photo }} />
        </View>
      </View>

      {/* upcoming events */}
      <View style={styles.upcomingEvents}>
        <View style={styles.upcomingEvents_header}>
          <Text style={styles.text}>Proximos Eventos</Text>
          <IconSettings />
        </View>
        <View style={styles.map} />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: hp('3%'), //  22.9~
    paddingHorizontal: wp('7.2%'), // 27~
    paddingBottom: hp('2.2%'), // 18~
    marginBottom: hp('0.9%') // 7~
  },

  button: {
    width: wp('63%'), //  236~
    height: hp('6.2%'), //  50~
    backgroundColor: '#E1B21C',
    borderRadius: 27,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: hp('2%'), // 16~
    fontFamily: 'Poppins_700Bold',
    textTransform: 'uppercase'
  },

  image: {
    width: hp('6.5%'), //  53~
    height: hp('6.5%'), //  53~
    borderRadius: 6,
    backgroundColor: '#00000029'
  },

  upcomingEvents: {
    backgroundColor: '#fff',
    flexDirection: 'column',
    paddingTop: hp('1.6%'), //  13
    paddingBottom: hp('1.85%'), // 15
    marginBottom: hp('1.5%') // 12
  },

  upcomingEvents_header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: wp('3.4%'), //  13
    paddingRight: wp('11.5%') // 43
  },

  text: {
    fontSize: hp('1.95%'), //  16
    fontFamily: 'Poppins_700Bold',
    textTransform: 'uppercase'
  }
})

export default Home
