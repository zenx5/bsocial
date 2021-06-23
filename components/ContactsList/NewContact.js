import React, { useState, useEffect, useContext } from 'react'
import { TouchableOpacity, Text, StyleSheet, View, Modal, TextInput, Alert } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useFonts, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins' // eslint-disable-line
import { StatusBar } from 'expo-status-bar'
import AppLoading from 'expo-app-loading'
import Loading from '../Loading'
import AuthContext from '../../context/Auth/AuthContext'
import axios from 'axios'

//  components
import IconContact from '../Icons/IconContact'
import IconClose from '../Icons/IconClose'

const NewContact = () => {
  const { userToken } = useContext(AuthContext)

  const initialState = {
    username: '',
    phone: '',
    isValidNumbre: true,
    phoneEmpty: false,
    activateButton: false
  }

  const [fontsLoaded] = useFonts({ Poppins_600SemiBold, Poppins_700Bold })
  const [state, setState] = useState(initialState)
  const [showAddContact, setShowAddContact] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  //  --> apis
  const API_ALL_CONTACTS = 'https://bsocial.at/api/contacts'
  const API_ADD_NEW_CONTACT = 'https://bsocial.at/api/contacts/store'

  const open = () => setShowAddContact(true)
  const close = () => setShowAddContact(false)

  //  --> name, input handler
  const usernameInputHandler = (value) => {
    setState({
      ...state,
      username: value
    })
  }

  // -->    phone, input handler
  const phoneInputHandler = (value) => {
    const phoneRegex = /\+([0-9]*)?/i

    if (phoneRegex.test(value)) {
      setState({
        ...state,
        phone: value,
        isValidNumbre: true,
        phoneEmpty: false
      })
    } else if (value.length === 0) {
      setState({
        ...state,
        phone: value,
        phoneEmpty: true
      })
    } else {
      setState({
        ...state,
        phone: value,
        isValidNumbre: false,
        phoneEmpty: false
      })
    }
  }

  //  -->   activation of the button
  useEffect(() => {
    if ((state.phone && state.isValidNumbre) || state.username) {
      if (state.activateButton === false) {
        setState({ ...state, activateButton: true })
      }
    } else {
      if (state.activateButton === true) {
        setState({ ...state, activateButton: false })
      }
    }
  }, [state.phone || state.username || state.isValidNumbre])

  //  -->   add new contact
  const addNewContact = async () => {
    try {
      console.log(state.username, state.phone)
      setIsLoading(true)
      const { data } = await axios.get(API_ALL_CONTACTS, { headers: { Authorization: 'Bearer ' + userToken } })
      const contactId = data.data.filter((contact) => contact.phone === state.phone || contact.username === state.username)

      if (contactId.length === 0) {
        setIsLoading(false)
        return Alert.alert(
          'Error',
          'El nombre de usuario o telefono No se encuentran registrados',
          [{ text: 'OK' }],
          { cancelable: false }
        )
      } else {
        await axios.post(API_ADD_NEW_CONTACT,
          { contact_id: contactId[0].id },
          { headers: { Authorization: 'Bearer ' + userToken } }
        )
        setIsLoading(false)

        return Alert.alert(
          '',
          'Contacto añadido satisfactoriamente',
          [{ text: 'OK' }],
          { cancelable: false }
        )
      }
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View>
      {showAddContact ? <StatusBar backgroundColor='#00000050' /> : null}
      <TouchableOpacity style={styles.item} onPress={open}>
        <IconContact />
        <Text style={styles.item_text}>Agregar contacto</Text>
      </TouchableOpacity>
      <Modal
        visible={showAddContact}
        transparent
        animationType='fade'
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity onPress={close} style={styles.iconContainer}>
              <IconClose style={styles.iconClose} />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Agregar contacto</Text>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder='Nombre de Usuario'
                style={[styles.emptyInput, state.username && styles.filledInput]}
                value={state.username}
                onChangeText={usernameInputHandler}
              />
              <Text style={styles.separatorText}>Ó</Text>
              <TextInput
                placeholder='Numero de Telefono'
                keyboardType='numbers-and-punctuation'
                style={[styles.emptyInput, state.phone && styles.filledInput]}
                value={state.phone}
                onChangeText={phoneInputHandler}
              />
              {
                state.isValidNumbre
                  ? null
                  : <Text style={styles.errorMessage}>Ingrese un numero con formato Valido ejemplo: +0123456</Text>
              }
            </View>
            <TouchableOpacity
              disabled={!state.activateButton}
              style={[styles.buttonDisable, state.activateButton && styles.buttonBase]}
              onPress={addNewContact}
            >
              <Text
                style={[styles.button_textDisable, state.activateButton && styles.button_textBase]}
              >
                Guardar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {isLoading ? <Loading /> : null}
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('2.3%') // 15.61
  },

  item_text: {
    fontSize: hp('1.8%'), //  12.19
    fontFamily: 'Poppins_400Regular',
    marginLeft: wp('5.4%') //  22.09
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000050'
  },

  modalView: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    height: hp('61.5%'), // 420.19
    width: wp('81.5%'), //  335.23
    backgroundColor: '#fff',
    borderRadius: 27,
    position: 'relative'
  },

  iconContainer: {
    position: 'absolute',
    top: 15,
    right: 15
  },

  iconClose: {
    width: wp('4%'), // 20.57
    height: hp('2.5%') // 20.57
  },

  modalTitle: {
    fontSize: hp('2.2%'), // 14
    fontFamily: 'Poppins_600SemiBold',
    color: '#000',
    textAlign: 'center',
    marginTop: hp('5.9%') //  40.38
  },

  inputContainer: {
    alignItems: 'center',
    marginTop: hp('4.5%') // 31
  },

  emptyInput: {
    backgroundColor: '#EBEBEB',
    borderRadius: 10,
    width: wp('74.3%'), //  291~
    height: hp('8.8%'), //  60.19
    paddingLeft: wp('10%'), // 39~
    fontSize: hp('2.4%'), //  16.38
    fontFamily: 'Poppins_400Regular'
  },

  filledInput: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#EBEBEB'
  },

  separatorText: {
    fontSize: hp('2.2%'), // 14
    fontFamily: 'Poppins_600SemiBold',
    color: '#000',
    marginVertical: hp('2.5%') // 20.57
  },

  errorMessage: {
    textAlign: 'center',
    fontSize: hp('1.7%'), //  11~~
    color: '#DD4C4C',
    marginTop: hp('-2%'), //  -13~~
    marginBottom: hp('1.2%') // 8~~
  },

  buttonDisable: {
    borderRadius: 29,
    backgroundColor: '#EBEBEB',
    width: wp('61%'), //  251.04
    height: hp('8.4%'), //  57.52
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp('5.9%') //  40.38
  },

  buttonBase: {
    backgroundColor: '#E1B21C'
  },

  button_textDisable: {
    fontSize: hp('2.7%'), //  18.28
    fontFamily: 'Poppins_700Bold',
    color: '#58595B'
  },

  button_textBase: {
    color: '#fff'
  }
})

export default NewContact
