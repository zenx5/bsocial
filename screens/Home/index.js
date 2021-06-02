import React, { useContext } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import AuthContext from '../../context/Auth/AuthContext'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

//  components
import UpcomingEvents from './UpcomingEvents'
import FeaturedEvents from './FeaturedEvents'

const Home = (props) => {
  const { photo } = useContext(AuthContext)

  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Create Event Step 1')} style={styles.button}>
          <Text style={styles.buttonText}>Crear Evento</Text>
        </TouchableOpacity>
        <View>
          <Image style={styles.image} source={{ uri: photo }} />
        </View>
      </View>

      <UpcomingEvents />
      <FeaturedEvents />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: hp('3%'), // ~22.9
    paddingHorizontal: wp('7.2%') // ~27
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
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

export default Home
