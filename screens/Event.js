import React, { useEffect, useContext, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image, ScrollView, FlatList } from 'react-native'
import axios from 'axios'
import AuthContext from '../context/Auth/AuthContext'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
// eslint-disable-next-line camelcase
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins'
import AppLoading from 'expo-app-loading'
import Constants from 'expo-constants'
import MapView, { Marker } from 'react-native-maps'

//    -->   icons
import IconBack from '../components/Icons/IconBack'
import IconTime from '../components/Icons/IconTime'
import IconDate from '../components/Icons/IconDate'

const Event = (props) => {
  const { id } = props.route.params
  const { userToken } = useContext(AuthContext)
  const [eventData, setEventData] = useState({})

  const initialRegion = {
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0122,
    longitudeDelta: 0.0121
  }

  const [location, setLocation] = useState(initialRegion)

  const getEvent = async () => {
    try {
      const { data } = await axios.get(`https://bsocial.at/api/events/${id}/show`, {
        headers: { Authorization: 'Bearer ' + userToken }
      })
      setEventData(data.data)
      setLocation({
        latitude: data.data.latitud,
        longitude: data.data.longitud
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getEvent()
  }, [])

  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_500Medium, Poppins_700Bold })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* image */}
        <ImageBackground style={styles.image} source={{ uri: eventData.image }}>
          <TouchableOpacity onPress={() => props.navigation.goBack()} style={styles.back}>
            <View style={styles.iconBack}>
              <IconBack />
            </View>
          </TouchableOpacity>
        </ImageBackground>

        {/* header */}
        <View style={styles.header}>
          <Text style={styles.eventName}>{eventData.name}</Text>
          <View style={styles.dataEvent}>
            <View>
              <Text style={styles.eventInfo}>{eventData.type === 'public' ? 'Evento Publico' : 'Evento Privado'}</Text>
            </View>
            <Text style={styles.dot}>·</Text>
            <View style={styles.host}>
              <Text style={styles.host_text}>Anfitrion: </Text>
              <Text style={styles.eventInfo}>
                {
                  eventData.customer
                    ? `${eventData.customer.name} ${eventData.customer.lastname}`
                    : ''
                }
              </Text>
            </View>
          </View>
        </View>

        {/* details */}
        <View style={styles.details}>
          <Text style={styles.details_title}>Detalles</Text>
          <Text style={styles.details_description}>{eventData.description}</Text>
          <View style={styles.details_dateTime}>
            <View style={styles.dateTime}>
              <View style={styles.dateTime_icon}>
                <IconDate />
              </View>
              <Text style={styles.start_date}>{eventData.start_date}</Text>
            </View>
            <View style={styles.dateTime}>
              <View style={styles.dateTime_icon}>
                <IconTime />
              </View>
              <Text>{eventData.start_hour}</Text>
            </View>
          </View>
        </View>

        {/* guests */}
        <View style={styles.guests}>
          <Text style={styles.guests_title}>Invitados</Text>
          <FlatList
            data={eventData.guests}
            renderItem={({ item }) => <Image style={styles.guests_image} source={{ uri: item.photo }} />}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            style={styles.guest_List}
          />
        </View>

        {/* location */}
        <View style={styles.location}>
          <Text style={styles.location_title}>Ubicación</Text>
          <Text style={styles.location_address}>{eventData.address}</Text>

          <MapView
            style={styles.map}
            region={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01
            }}
            showsUserLocation
          >
            <Marker coordinate={{
              latitude: location.latitude,
              longitude: location.longitude
            }}
            />
          </MapView>
        </View>

        {/* button */}
        <View style={styles.buttonArea}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.button_text}>ASISTIR</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

export default Event

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  scrollView: {
    width: '100%'
  },

  image: {
    width: '100%',
    resizeMode: 'cover',
    height: hp('33.5%') //  272
  },

  back: {
    marginTop: Constants.statusBarHeight,
    marginLeft: wp('8.5%'), //  32
    paddingTop: hp('3.7%') //  30
  },

  iconBack: {
    width: wp('3%'),
    height: hp('4%') // 32
  },

  header: {
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    marginTop: hp('-5%'), //  40
    marginBottom: hp('0.6%'), //  5
    paddingTop: hp('2%'), //  16
    paddingLeft: hp('2%'), //  16
    paddingBottom: hp('2.2%') // 18
  },

  eventName: {
    fontSize: hp('2.5%'), //  20.5
    fontFamily: 'Poppins_700Bold'
  },

  dataEvent: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  eventInfo: {
    fontSize: hp('1.4%'), // 11
    fontFamily: 'Poppins_400Regular',
    color: '#000'
  },

  dot: {
    fontSize: hp('1.4%'), // 11
    marginHorizontal: wp('2.1%') // 8
  },

  host: {
    flexDirection: 'row'
  },

  host_text: {
    fontSize: hp('1.4%'), // 11.5
    fontFamily: 'Poppins_400Regular',
    color: '#00000060',
    marginRight: wp('0.6%')
  },

  details: {
    backgroundColor: '#fff',
    marginBottom: hp('0.6%'), //  5
    paddingTop: hp('2%'), //  16
    paddingLeft: hp('2%'), //  16
    paddingBottom: hp('2.5%') //  20.5
  },

  details_title: {
    fontSize: hp('1.5%'), // 12
    fontFamily: 'Poppins_700Bold',
    marginBottom: hp('1%') //  8
  },

  details_description: {
    fontSize: hp('1.3%'), // 10.5
    fontFamily: 'Poppins_400Regular',
    marginBottom: hp('2%') // 16
  },

  details_dateTime: {
    flexDirection: 'row',
    paddingLeft: wp('2%') //  8
  },

  dateTime: {
    flexDirection: 'row'
  },

  dateTime_icon: {
    marginRight: wp('2.8%') //  10.5
  },

  start_date: {
    marginRight: wp('17%') //  64
  },

  guests: {
    backgroundColor: '#fff',
    marginBottom: hp('1.3%'), //  10
    paddingVertical: hp('2%'), //  16
    paddingHorizontal: hp('2%') //  16
  },

  guests_title: {
    fontSize: hp('1.5%'), // 12
    fontFamily: 'Poppins_700Bold',
    marginBottom: hp('2.3%') //  18
  },

  guest_List: {
    paddingLeft: wp('2%') //  8
  },

  guests_image: {
    width: wp('12.8%'), // 48
    height: hp('5.9%'), // 48
    borderRadius: 10,
    marginRight: wp('3.2%') //  12
  },

  location: {
    backgroundColor: '#fff',
    marginBottom: hp('0.6') //  5
  },

  location_title: {
    fontSize: hp('1.7%'), // 14
    fontFamily: 'Poppins_700Bold',
    marginLeft: wp('6.4%'), // 24
    marginBottom: hp('1%') //  8
  },

  location_address: {
    fontSize: hp('1.5%'), // 12
    fontFamily: 'Poppins_400Regular',
    marginLeft: wp('6.4%'), // 24
    marginBottom: hp('2%') // 16
  },

  map: {
    width: '100%',
    height: hp('19%'), //  168
    backgroundColor: '#00000050'
  },

  buttonArea: {
    backgroundColor: '#fff',
    paddingVertical: hp('1.5%')
  },

  button: {
    width: wp('80%'), //  320
    height: hp('7%'), //  56
    backgroundColor: '#E1B21C',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 29,
    alignSelf: 'center'
  },

  button_text: {
    fontSize: hp('2.3%'), //  18
    fontFamily: 'Poppins_700Bold',
    color: '#fff'
  }
})
