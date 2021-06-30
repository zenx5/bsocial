import React, { useState, useEffect, useContext } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native'
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins'  //  eslint-disable-line
import AppLoading from 'expo-app-loading'
import Constants from 'expo-constants'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import AuthContext from '../context/Auth/AuthContext'
import ContactsContex from '../context/Contacts/ContactsContext'

//  icons
import IconCheck from '../components/Icons/IconCheck'

const Item = ({ item, onSelectedContact }) => (
  <TouchableOpacity onPress={onSelectedContact} style={[styles.item]}>
    <Image style={styles.item_image} source={{ uri: item.photo }} />
    <Text style={styles.item_text}>{`${item.name} ${item.lastname}`}</Text>
    {item.selected ? <IconCheck style={styles.iconCheck} fill='#E1B21C' /> : null}
  </TouchableOpacity>
)

const CreateEventStepTwo = (props) => {
  //  fonts
  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_700Bold })

  //  -->   context
  const { userToken } = useContext(AuthContext)
  const { contactList, getContacts, setContacts } = useContext(ContactsContex)

  const [selectedContactList, setSelectedContactList] = useState([])

  useEffect(() => {
    getContacts(userToken)
  }, [])

  useEffect(() => {
    const list = []
    contactList.map((contact) => (
      list.push({
        id: contact.id,
        contactId: contact.contact_id,
        photo: contact.info_contact.photo,
        name: contact.info_contact.name,
        lastname: contact.info_contact.lastname,
        selected: false
      })
    ))
    setSelectedContactList(list)
  }, [contactList])

  //  list item
  const renderItem = ({ item }) => {
    const onSelectedContact = () => {
      if (item.selected === false) {
        const setTrue = selectedContactList.map(contact => (
          contact.id === item.id
            ? { id: item.id, contactId: contact.contactId, photo: contact.photo, name: contact.name, lastname: contact.lastname, selected: true }
            : contact
        ))
        setSelectedContactList(setTrue)
      } else {
        const setFalse = selectedContactList.map(contact => (
          contact.id === item.id
            ? { id: item.id, contactId: contact.contactId, photo: contact.photo, name: contact.name, lastname: contact.lastname, selected: false }
            : contact
        ))
        setSelectedContactList(setFalse)
      }
    }
    return <Item item={item} onSelectedContact={onSelectedContact} />
  }

  const [buttonActive, setButtonActive] = useState(false)

  // activate button
  useEffect(() => {
    const isSelected = selectedContactList.find(element => element.selected !== false)
    if (isSelected !== undefined) {
      setButtonActive(true)
    } else {
      setButtonActive(false)
    }
  }, [selectedContactList])

  const goToStepThree = () => props.navigation.navigate('Create Event Step Three')

  //  -->   on submit
  const submit = () => {
    const selecteds = []
    selectedContactList
      .filter(contact => contact.selected === true)
      .map(contact => selecteds.push(contact.contactId))

    setContacts(selecteds)
    goToStepThree()
  }

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={selectedContactList}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        style={styles.list}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={submit}
          disabled={!buttonActive}
          style={[styles.button, buttonActive && styles.buttonVisible]}
        >
          <Text style={styles.button_text}>Continuar</Text>
        </TouchableOpacity>
      </View>
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
  },

  buttonContainer: {
    marginTop: 'auto',
    marginBottom: hp('5%'),
    paddingHorizontal: wp('6.6%') //  27~

  },

  button: {
    backgroundColor: '#E1B21C',
    width: '100%',
    height: hp('7.5%'), //  57
    borderWidth: 0,
    borderRadius: 29,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    display: 'none'
  },

  button_text: {
    color: '#fff',
    fontSize: hp('2.4%'), //  ~18
    fontFamily: 'Poppins_700Bold',
    textTransform: 'uppercase'
  },

  buttonVisible: {
    display: 'flex'
  }
})

export default CreateEventStepTwo
