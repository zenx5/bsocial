import React, { useState, useEffect, useContext } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList, TextInput } from 'react-native'
import { useFonts, Poppins_300Light, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins'  //  eslint-disable-line
import AppLoading from 'expo-app-loading'
import Constants from 'expo-constants'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import AuthContext from '../context/Auth/AuthContext'
import ContactsContex from '../context/Contacts/ContactsContext'

//  icons
import IconSearch from '../components/Icons/IconSearch'
import IconClose from '../components/Icons/IconClose'

//  components
import NewContact from '../components/ContactsList/NewContact'

const Item = ({ item }) => {
  return (
    <TouchableOpacity style={[styles.item, item.notDisplay && { display: 'none' }]}>
      <Image style={styles.item_image} source={{ uri: item.photo }} />
      <Text style={styles.item_text}>{`${item.name} ${item.lastname}`}</Text>
    </TouchableOpacity>
  )
}

const ContactsList = () => {
  //  fonts
  const [fontsLoaded] = useFonts({ Poppins_300Light, Poppins_400Regular, Poppins_700Bold })

  // -->  context
  const { userToken } = useContext(AuthContext)
  const { contactList, getContacts } = useContext(ContactsContex)

  //  Ccontacts
  const [contactsToShow, setContactsToShow] = useState([])

  useEffect(() => {
    getContacts(userToken)
  }, [userToken])

  useEffect(() => {
    const list = []
    contactList.map((contact) => (
      list.push({
        id: contact.id,
        contactId: contact.contact_id,
        photo: contact.info_contact.photo,
        name: contact.info_contact.name,
        lastname: contact.info_contact.lastname,
        notDisplay: false
      })
    ))
    setContactsToShow(list)
  }, [contactList])

  // open search bar
  const [isOpen, setIsOpen] = useState(false)

  // open search bar
  const open = () => setIsOpen(true)

  //  close search bar
  const close = () => {
    setContactToSearch('')
    setIsOpen(false)
  }

  //  search contact
  const [contactToSearch, setContactToSearch] = useState('')

  const handleSearch = (value) => setContactToSearch(...value)

  // useEffect(() => {
  //   console.log(contactToSearch)
  //   if (contactToSearch.length) {
  //     console.log(contactToSearch)
  //     const filtered = contactsToShow.map((contacts) => (
  //       (contacts.name.toLocaleLowerCase() === contactToSearch || contacts.lastname.toLocaleLowerCase() === contactToSearch)
  //         ? contacts
  //         : { id: contacts.id, contactId: contacts.contactId, photo: contacts.photo, name: contacts.name, lastname: contacts.lastname, notDisplay: true }
  //     ))

  //     setContactToSearch(filtered)
  //   }

  //   if (contactToSearch === '') {
  //     console.log('esta vacio el search')
  //     const allContacts = contactsToShow.map((contacts) => (console.log(contacts)))
  //     setContactsToShow(allContacts)
  //   }
  // }, [contactToSearch])

  //  render item
  const renderItem = ({ item }) => {
    //  filtering contacts
    // if (item.notDisplay === false) {
    //   const setTrue = contactsToShow.map((contacts) => (
    //     contacts.name.toLowerCase() === contactToSearch.toLocaleLowerCase() || contacts.lastname.toLowerCase() === contactToSearch.toLocaleLowerCase()
    //       ? { id: contacts.id, contactId: contacts.contactId, photo: contacts.photo, name: contacts.name, lastname: contacts.lastname, notDisplay: true }
    //       : contacts
    //   ))
    //   setContactsToShow(setTrue)
    // } else {
    //   const setFalse = contactsToShow.map((contacts) => (
    //     contacts.name.toLowerCase() === contactToSearch.toLocaleLowerCase() || contacts.lastname.toLowerCase() === contactToSearch.toLocaleLowerCase()
    //       ? { id: contacts.id, contactId: contacts.contactId, photo: contacts.photo, name: contacts.name, lastname: contacts.lastname, notDisplay: false }
    //       : contacts
    //   ))
    //   setContactsToShow(setFalse)
    // }

    return <Item item={item} />
  }

  //  waiting for fonts
  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <View style={styles.header_top}>
          {
            isOpen
              ? (
                <View style={styles.search}>
                  <TextInput
                    placeholder='Buscar contactos'
                    placeholderTextColor='#00000060'
                    style={styles.searchInput}
                    value={contactToSearch}
                    onChangeText={handleSearch}
                  />
                  <View style={styles.iconSearch}>
                    <IconSearch />
                  </View>
                  <TouchableOpacity onPress={close} style={styles.iconClose_Container}>
                    <IconClose style={styles.iconClose} />
                  </TouchableOpacity>
                </View>
                )
              : (
                <>
                  <Text style={styles.header_title}>Contactos</Text>
                  <TouchableOpacity onPress={open}>
                    <IconSearch />
                  </TouchableOpacity>
                </>
                )
          }

        </View>
        <Text style={styles.header_footer}>Lista de contactos agregados</Text>
      </View>

      <FlatList
        data={contactsToShow}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
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

  header: {
    width: '100%',
    paddingLeft: wp('6.6%'), // 27.65
    paddingRight: wp('8.7%'), //  36.45
    marginBottom: hp('2.1%')//  14.5
  },

  header_top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  header_title: {
    fontSize: hp('3%'), //  20.57
    fontFamily: 'Poppins_700Bold',
    color: '#000',
    marginTop: hp('3.7%'), //  25.37
    marginBottom: hp('4%') // 27.42
  },

  header_footer: {
    fontSize: hp('2.1%'), // 14.4
    fontFamily: 'Poppins_400Regular'
  },

  search: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    marginTop: hp('3.7%'), //  25.37
    marginBottom: hp('4%') // 27.42
  },

  searchInput: {
    fontSize: hp('2.4'), // 16.45
    width: '100%',
    height: hp('7%'), //  48
    paddingLeft: wp('12.5%'), //  52.38
    backgroundColor: '#0000000D',
    borderRadius: 10,
    fontFamily: 'Poppins_300Light'
  },

  iconSearch: {
    position: 'absolute',
    top: 14,
    left: 13
  },

  iconClose_Container: {
    position: 'absolute',
    top: 15,
    right: 10
  },

  iconClose: {
    width: wp('4%'), // 20.57
    height: hp('2.5%') // 20.57
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
