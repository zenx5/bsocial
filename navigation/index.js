import React from 'react'
import Routes from './Routes'
import AuthState from '../context/Auth/AuthState'

const Providers = () => {
  return (
    <AuthState>
      <Routes />
    </AuthState>
  )
}

export default Providers
