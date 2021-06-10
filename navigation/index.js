import React from 'react'
import Routes from './Routes'
import AuthState from '../context/Auth/AuthState'
import CreateEventState from '../context/CreateEvent/CreateEventState'

const Navigation = () => {
  return (
    <AuthState>
      <CreateEventState>
        <Routes />
      </CreateEventState>
    </AuthState>
  )
}

export default Navigation
