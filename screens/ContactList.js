import React, { useState, useRef, useEffect, useContext} from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList, Animated } from 'react-native'
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins'  //  eslint-disable-line
import AppLoading from 'expo-app-loading'
import Constants from 'expo-constants'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import * as Contacts from 'expo-contacts'
import AuthContext from '../context/Auth/AuthContext'

//  components
import Header from '../components/ContactsList/Header'
import NewContact from '../components/ContactsList/NewContact'

//  icons

const Item = ({ item }) => (
  <TouchableOpacity style={[styles.item]}>
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
  const [isSearch, setIsSearch] = useState(false)

  //  animation
  const fadeAnimationSearch = useRef(new Animated.Value(0)).current
  const fadeAnimationTitle = useRef(new Animated.Value(1)).current

  //  function fade
  const fadeInSearch = () => {
    Animated.timing(fadeAnimationSearch, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true
    }).start()
  }

  const fadeOutSearch = () => {
    Animated.timing(fadeAnimationSearch, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true
    }).start()
  }

  const fadeInTitle = () => {
    Animated.timing(fadeAnimationTitle, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true
    }).start()
  }

  const fadeOutTitle = () => {
    Animated.timing(fadeAnimationTitle, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true
    }).start()
  }

  //  execution hader change
  const openSearch = () => {
    setIsSearch(true)
    fadeInSearch()
    fadeOutTitle()
  }
  const closeSearch = () => {
    setIsSearch(false)
    fadeOutSearch()
    fadeInTitle()
  }

  const [contactsList, setContactsList] = useState()
  const [newContactList, setNewContactList] = useState()

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

  if (!fontsLoaded) {
    return <AppLoading />
  }

  console.log('render')

  return (
    <View style={styles.container}>
      {/* header */}
      <Header
        isSearch={isSearch}
        openSearch={openSearch}
        closeSearch={closeSearch}
        fadeAnimationTitle={fadeAnimationTitle}
        fadeAnimationSearch={fadeAnimationSearch}
        footerText='Lista de contactos agregados'
      />

      <FlatList
        data={contactsList}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={item => item.id}
        style={styles.flatList}
        ListHeaderComponent={NewContact}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff'
  },

  flatList: {
    backgroundColor: '#fff',
    paddingHorizontal: 20
  },

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('2.3%') // 15.61
  },

  item_image: {
    width: 46,
    height: 46,
    borderRadius: 10,
    backgroundColor: '#00000020'
  },

  item_text: {
    fontSize: hp('1.8%'), //  12.19
    fontFamily: 'Poppins_400Regular',
    marginLeft: wp('5.4%') //  22.09
  }
})

export default ContactsList
