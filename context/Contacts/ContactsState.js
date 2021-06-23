import React, { useMemo, useReducer, useContext } from 'react'
import AuthContext from '../Auth/AuthContext'
import ContactsContext from './ContactsContext'
import ContactsReducer from './ContactsReducer'
import axios from 'axios'
import { LOADING } from '../types'

const ContactsState = (props) => {
  const initialState = {
    contactList: [],
    contactId: '',
    loading: null
  }

  const { userToken } = useContext(AuthContext)

  //  --> urls
  const ALL_CONTACTS = 'https://bsocial.at/api/contacts'
  const API_ADD_NEW_CONTACT = 'https://bsocial.at/api/contacts/store'

  const [state, dispatch] = useReducer(ContactsReducer, initialState)

  const contactsState = useMemo(() => ({
    addNewContact: async (phone) => {
      try {
        console.log(userToken)

        dispatch({ type: LOADING, payload: true })
        const { data } = await axios.get(ALL_CONTACTS, { headers: { Authorization: 'Bearer ' + userToken } })
        const contactId = data.data.filter((contact) => contact.phone === phone || contact.username)
        console.log(contactId[0])

        // const res = await axios.post(API_ADD_NEW_CONTACT, {
        //   headers: { Authorization: 'Bearer ' + userToken },
        //   data: { id: contactId[0].id }
        // })
        // console.log(res.data)

        dispatch({ type: LOADING, payload: false })
      } catch (error) {
        console.log(error)
      }
    }
  }), [])

  return (
    <ContactsContext.Provider
      value={{
        loading: state.loading,
        addNewContact: contactsState.addNewContact
      }}
    >
      {props.children}
    </ContactsContext.Provider>
  )
}

export default ContactsState
