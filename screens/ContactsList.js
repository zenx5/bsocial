import React, { useState, useRef, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList, Animated } from 'react-native'
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins'  //  eslint-disable-line
import AppLoading from 'expo-app-loading'
import Constants from 'expo-constants'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import * as Contacts from 'expo-contacts'

//  components
import Search from '../components/Search'

//  icons
import IconSearch from '../components/Icons/IconSearch'
import IconClose from '../components/Icons/IconClose'
import IconContact from '../components/Icons/IconContact'

const Header = ({ isSearch, openSearch, closeSearch, fadeAnimationSearch, fadeAnimationTitle, footerText }) => {
  return (
    <View style={styles.headerContainer}>
      <Animated.View style={[styles.header, { opacity: fadeAnimationTitle }, isSearch && styles.disable]}>
        <Text style={styles.header_title}>Contactos</Text>

        <TouchableOpacity onPress={openSearch} style={styles.header_icon}>
          <IconSearch />
        </TouchableOpacity>
      </Animated.View>

      <Animated.View style={[styles.search, { opacity: fadeAnimationSearch }, !isSearch && styles.disable]}>
        <View>
          <Search />
        </View>
        <TouchableOpacity onPress={closeSearch} style={styles.search_icon}>
          <IconClose />
        </TouchableOpacity>
      </Animated.View>
      <Text style={styles.header_footer}>{footerText}</Text>
    </View>
  )
}

const Item = ({ item }) => (
  <TouchableOpacity style={[styles.item]}>
    <View style={styles.item_image}>
      <Image />
    </View>
    <Text style={styles.item_text}>{item.name}</Text>
  </TouchableOpacity>
)

const NewContact = () => {
  return (
    <TouchableOpacity style={styles.item}>
      <IconContact />
      <Text style={styles.item_text}>Agregar contacto</Text>
    </TouchableOpacity>
  )
}

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
      duration: 1000
    }).start()
  }

  const fadeOutSearch = () => {
    Animated.timing(fadeAnimationSearch, {
      toValue: 0,
      duration: 1000
    }).start()
  }

  const fadeInTitle = () => {
    Animated.timing(fadeAnimationTitle, {
      toValue: 1,
      duration: 1000
    }).start()
  }

  const fadeOutTitle = () => {
    Animated.timing(fadeAnimationTitle, {
      toValue: 0,
      duration: 1000
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
    return <Item item={item} />
  }

  if (!fontsLoaded) {
    return <AppLoading />
  }

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
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.flatList}
        ListHeaderComponent={NewContact}
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

  headerContainer: {
    width: '100%',
    backgroundColor: '#fff',
    paddingTop: hp('4.4%'), //  30~
    paddingBottom: hp('2.1%') // 14~
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: wp('6.6%'), // 27~
    paddingRight: wp('8.8%'), //  36~
    marginBottom: hp('4%') // 27~
  },

  header_title: {
    fontSize: hp('3%'), //  20.5~~
    fontFamily: 'Poppins_700Bold',
    color: '#000'
  },

  header_footer: {
    fontSize: hp('2.1%'), // 14.4~
    fontFamily: 'Poppins_400Regular',
    marginLeft: wp('4.4%') // 18.2~
  },

  flatList: {
    backgroundColor: '#fff',
    paddingHorizontal: 20
  },

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15
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
  search: {
    position: 'relative',
    marginTop: -11,
    marginBottom: 20
  },

  search_icon: {
    position: 'absolute',
    top: 15,
    right: 19
  },

  disable: {
    display: 'none'
  }
})

export default ContactsList
