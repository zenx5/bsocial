import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native'
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins'  //  eslint-disable-line
import AppLoading from 'expo-app-loading'
import Constants from 'expo-constants'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import * as Contacts from 'expo-contacts'

//  icons
import IconCheck from '../components/Icons/IconCheck'

const Item = ({ item, onSelectedContact }) => (
  <TouchableOpacity onPress={onSelectedContact} style={[styles.item]}>
    <View style={styles.item_image}>
      <Image />
    </View>
    <Text style={styles.item_text}>{item.name}</Text>
    {item.selected ? <IconCheck style={styles.iconCheck} /> : null}
  </TouchableOpacity>
)

const ContactsList = () => {
  //  fonts
  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_700Bold })

  const [contactList, setContactList] = useState([])

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync()
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers]
        })
        if (data.length > 0) {
          const contacts = []
          data.map((contact) => contacts.push({ id: contact.id, name: contact.name, selected: false }))
          setContactList(contacts)
        }
      }
    })()
  }, [])

  //  list item
  const renderItem = ({ item }) => {
    const onSelectedContact = () => {
      if (item.selected === false) {
        const setTrue = contactList.map(contact => (contact.id === item.id) ? { id: item.id, name: item.name, selected: true } : contact)
        setContactList(setTrue)
      } else {
        const setFalse = contactList.map(contact => (contact.id === item.id) ? { id: item.id, name: item.name, selected: false } : contact)
        setContactList(setFalse)
      }
    }
    return <Item item={item} onSelectedContact={onSelectedContact} />
  }

  if (!fontsLoaded) {
    return <AppLoading />
  }

  console.log(contactList)

  return (
    <View style={styles.container}>
      <FlatList
        data={contactList}
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
    paddingLeft: wp('6.6%'), //  27~
    paddingRight: wp('12.2%') //  50.28~
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
  },

  iconCheck: {
    width: wp('4.5%'), //  18.57
    height: hp('1.7%'), // 13.14
    marginLeft: 'auto'
  }
})

export default ContactsList
