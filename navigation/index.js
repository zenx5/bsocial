import React from 'react'
import Routes from './Routes'
import AuthState from '../context/Auth/AuthState'
import ContactsState from '../context/Contacts/ContactsState'
import EventsState from '../context/Events/EventsState'

const Navigation = () => {
  return (
    <AuthState>
      <ContactsState>
        <EventsState>
          <Routes />
        </EventsState>
      </ContactsState>
    </AuthState>
  )
}

export default Navigation
