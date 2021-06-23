import React, { useMemo, useReducer } from 'react'
import ContactsContext from './ContactsContext'
import ContactsReducer from './ContactsReducer'
import axios from 'axios'
import { CONTACT_LIST } from '../types'

const ContactsState = (props) => {
  const initialState = {
    contactList: []
  }

  //  --> urls
  const API_MY_CONTACTS = 'https://bsocial.at/api/contacts/my-contacts'

  const [state, dispatch] = useReducer(ContactsReducer, initialState)

  const contactsState = useMemo(() => ({
    getContacts: async (token) => {
      try {
        const { data } = await axios.get(API_MY_CONTACTS, { headers: { Authorization: 'Bearer ' + token } })
        dispatch({ type: CONTACT_LIST, payload: data.data })
      } catch (error) {
        console.log(error)
      }
    }
  }), [])

  return (
    <ContactsContext.Provider
      value={{
        contactList: state.contactList,
        getContacts: contactsState.getContacts
      }}
    >
      {props.children}
    </ContactsContext.Provider>
  )
}

export default ContactsState
