import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native'
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins'  //  eslint-disable-line
import AppLoading from 'expo-app-loading'
import Constants from 'expo-constants'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import * as Contacts from 'expo-contacts'

const Item = ({ item, onSelectedContact }) => (
  <TouchableOpacity onPress={onSelectedContact} style={[styles.item]}>
    <View style={styles.item_image}>
      <Image />
    </View>
    <Text style={styles.item_text}>{item.name}</Text>
  </TouchableOpacity>
)

const ContactsList = () => {
  //  fonts
  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_700Bold })

  // header swiching

  const [contactsList, setContactsList] = useState()

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync()
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers]
        })
        if (data.length > 0) {
          setContactsList(data)
        }
      }
    })()
  }, [])
  //  list item
  const renderItem = ({ item }) => {
    const onSelectedContact = () => {
      console.log(item.id)
    }
    return <Item item={item} onSelectedContact={onSelectedContact} />
  }

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={contactsList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.list}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#fff'
  },

  list: {
    paddingLeft: wp('6.6%') //  27~
  },

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('2%') //  20
  },

  item_image: {
    width: 46,
    height: 46,
    borderRadius: 10,
    backgroundColor: '#00000020'
  },

  item_text: {
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
    marginLeft: 22
  }
})

export default ContactsList
