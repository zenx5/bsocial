import React from 'react'
import Routes from './Routes'
import AuthState from '../context/Auth/AuthState'
import ContactsState from '../context/Contacts/ContactsState'
import CreateEventState from '../context/CreateEvent/CreateEventState'

const Navigation = () => {
  return (
    <AuthState>
      <ContactsState>
        <CreateEventState>
          <Routes />
        </CreateEventState>
      </ContactsState>
    </AuthState>
  )
}

export default Navigation
