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
    <TouchableOpacity style={styles.eventCategories}>
      <Text style={{ width: '100%', paddingHorizontal: 17 }}>{item.display_name}</Text>
    </TouchableOpacity>
  )
}

const InitialTest = () => {
  const [fontsLoaded] = useFonts({ Poppins_600SemiBold, Poppins_700Bold })

  const { userToken } = useContext(AuthContext)

  const [eventCategories, setEventCategories] = useState()

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

  console.log(eventCategories)

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#fff' />
      <Text style={styles.title}>Test Inicial</Text>
      <Text style={styles.headerText}>Selecciona que tipo de eventos te gustaría recibir?</Text>
      <View>
        <FlatList
          data={eventCategories}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={item => item.id}
          style={styles.flatList}
          horizontal
          scrollEnabled={false}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: hp('1%'), // 8
    flex: 1,
    alignItems: 'center'
  },

  title: {
    fontSize: hp('2.5%'), //  20
    fontFamily: 'Poppins_700Bold',
    marginBottom: hp('4.8%') // 38
  },

  headerText: {
    fontSize: hp('1.8%'), // 14
    fontFamily: 'Poppins_600SemiBold',
    marginBottom: hp('2.5%')
  },

  flatList: {
    flexWrap: 'wrap',
    width: '100%'
  },

  eventCategories: {
    borderRadius: 16
  }
})

export default InitialTest
