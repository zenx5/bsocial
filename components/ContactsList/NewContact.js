import React, { useState, useEffect, useContext } from 'react'
import { TouchableOpacity, Text, StyleSheet, View, Modal, TextInput } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useFonts, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins' // eslint-disable-line
import { StatusBar } from 'expo-status-bar'
import AppLoading from 'expo-app-loading'
import Loading from '../Loading'
import AuthContext from '../../context/Auth/AuthContext'

//  components
import IconContact from '../Icons/IconContact'
import IconClose from '../Icons/IconClose'

const NewContact = () => {
  const { addNewContact, loading } = useContext(AuthContext)

  const initialState = {
    userName: '',
    phone: '',
    isValidNumbre: true,
    phoneEmpty: false,
    activateButton: false
  }

  const [fontsLoaded] = useFonts({ Poppins_600SemiBold, Poppins_700Bold })
  const [data, setData] = useState(initialState)
  const [showAddContact, setShowAddContact] = useState(false)

  const open = () => setShowAddContact(true)
  const close = () => setShowAddContact(false)

  //  --> name, input handler
  const userNameInputHandler = (value) => {
    setData({
      ...data,
      userName: value
    })
  }

  // -->    phone, input handler
  const phoneInputHandler = (value) => {
    const phoneRegex = /\+([0-9]*)?/i

    if (phoneRegex.test(value)) {
      setData({
        ...data,
        phone: value,
        isValidNumbre: true,
        phoneEmpty: false
      })
    } else if (value.length === 0) {
      setData({
        ...data,
        phone: value,
        phoneEmpty: true
      })
    } else {
      setData({
        ...data,
        phone: value,
        isValidNumbre: false,
        phoneEmpty: false
      })
    }
  }

  //  -->   activation of the button
  useEffect(() => {
    if (data.phone && data.userName && data.isValidNumbre) {
      if (data.activateButton === false) {
        setData({ ...data, activateButton: true })
      }
    } else {
      if (data.activateButton === true) {
        setData({ ...data, activateButton: false })
      }
    }
  }, [data.phone && data.userName && data.isValidNumbre])

  //  --> addContact
  const saveContact = () => {
    addNewContact(data.phone)
    if (!loading) {
      setData(initialState)
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
                style={[styles.emptyInput, data.userName && styles.filledInput]}
                value={data.userName}
                onChangeText={userNameInputHandler}
              />

              <TextInput
                placeholder='Numero de Telefono'
                keyboardType='numbers-and-punctuation'
                style={[styles.emptyInput, data.phone && styles.filledInput]}
                value={data.phone}
                onChangeText={phoneInputHandler}
              />
              {
                data.isValidNumbre
                  ? null
                  : <Text style={styles.errorMessage}>Ingrese un numero con formato Valido ejemplo: +0123456</Text>
              }
            </View>
            <TouchableOpacity
              disabled={!data.activateButton}
              style={[styles.buttonDisable, data.activateButton && styles.buttonBase]}
              onPress={saveContact}
            >
              <Text
                style={[styles.button_textDisable, data.activateButton && styles.button_textBase]}
              >
                Guardar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {loading ? <Loading /> : null}
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
    fontFamily: 'Poppins_400Regular',
    marginBottom: hp('5.9%') //  40.38
  },

  filledInput: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#EBEBEB'
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
    justifyContent: 'center'
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
