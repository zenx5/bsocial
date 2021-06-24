import React, { useState, useContext, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useFonts, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins'  // eslint-disable-line
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Loading from '../components/Loading'
import axios from 'axios'
import AuthContext from '../context/Auth/AuthContext'

const Item = ({ item }) => {
  return (
    <TouchableOpacity style={[styles.eventCategories]}>
      <Text style={styles.eventCategories_text}>{item.display_name}</Text>
    </TouchableOpacity>
  )
}

const InitialTest = () => {
  const [fontsLoaded] = useFonts({ Poppins_600SemiBold, Poppins_700Bold })

  const { userToken } = useContext(AuthContext)

  const [eventCategories, setEventCategories] = useState()

  const initialState = {
    activateButton: false
  }

  //  state
  const [data, setData] = useState(initialState)

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('https://bsocial.at/api/categories', {
          headers: { Authorization: 'Bearer ' + userToken }
        })
        setEventCategories(data.data[0])
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  if (!fontsLoaded) {
    <View style={styles.container}>
      <Loading />
    </View>
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#fff' />
      <Text style={styles.title}>Test Inicial</Text>
      <Text style={styles.text}>Selecciona que tipo de eventos te gustaría recibir?</Text>
      <View>
        <FlatList
          data={eventCategories}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={item => item.id}
          style={styles.flatList}
          scrollEnabled={false}
          numColumns={3}
        />
      </View>
      <Text style={styles.text}>Selecciona que tipo de música es tu preferida</Text>

      {/* music picker */}
      <TouchableOpacity style={styles.musicPicker}>
        <Text style={styles.musicPicker_text}>- -</Text>
      </TouchableOpacity>

      {/* Button */}
      <TouchableOpacity
        disabled={!data.activateButton}
        style={[styles.buttonDisable, data.activateButton && styles.buttonBase]}
      >
        <Text style={[styles.buttonTextDisable, data.activateButton && styles.buttonTextBase]}>Entrar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: hp('1%'), // 8
    paddingTop: hp('4.1%') //  32.5
  },

  title: {
    fontSize: hp('2.5%'), //  20
    fontFamily: 'Poppins_700Bold',
    marginBottom: hp('4.8%') // 38
  },

  text: {
    fontSize: hp('1.8%'), // 14
    fontFamily: 'Poppins_600SemiBold',
    marginBottom: hp('2.5%')
  },

  flatList: {
    flexDirection: 'column',
    width: '100%',
    marginBottom: hp('4.8%') // 38
  },

  eventCategories: {
    height: hp('4.4%'), //  31
    borderRadius: 16,
    backgroundColor: '#33A0F310',
    marginRight: hp('1.6%'), // 10
    marginBottom: hp('2.5%'), //  20
    alignItems: 'center',
    justifyContent: 'center'
  },

  eventCategories_text: {
    paddingHorizontal: wp('4.5%'), // 17
    color: '#33A0F3'
  },

  musicPicker: {
    width: wp('77.7%'), //  291~
    height: hp('4.5%'), //  36~
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 16,
    borderColor: '#231F20',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp('1.9%'), // 15
    marginBottom: hp('11.5%') // 91
  },

  musicPicker_text: {
    fontSize: hp('1.7%'), //  14
    color: '#EC6666',
    fontFamily: 'Poppins_500Medium'
  },

  buttonDisable: {
    backgroundColor: '#EBEBEB',
    width: wp('74.3%'), //  291~
    height: hp('7.5%'), //  57
    borderWidth: 0,
    borderRadius: 29,
    justifyContent: 'center'
  },

  buttonBase: {
    backgroundColor: '#E1B21C'
  },

  buttonTextDisable: {
    color: '#58595B',
    textAlign: 'center',
    fontSize: hp('2%'),
    fontFamily: 'Poppins_700Bold',
    textTransform: 'uppercase'
  },

  buttonTextBase: {
    color: '#fff'
  }
})

export default InitialTest
