import React, { useReducer } from 'react'
import Auth from './AuthContext'

const AuthState = ({ childe }) => {
  return (
    <Auth.Provider>
      {chlidren}
    </Auth.Provider>
  )
}

export default AuthState
