import React, { useReducer, useMemo } from 'react'
import AuthContext from './AuthContext'
import AuthReducers from './AuthReducers'
import axios from 'axios'
import { SIGNIN, SIGNOUT } from '../types'

const AuthState = (props) => {
  const initialState = {
    isLoading: false,
    name: null,
    lastName: null,
    photo_url: null,
    email: null,
    password: null,
    userToken: null
  }

  const API_LOGIN = 'https://bsocial-app.herokuapp.com/api/auth/login'
  const API_SIGNUP = 'https://bsocial-app.herokuapp.com/api/auth/register'

  const [state, dispatch] = useReducer(AuthReducers, initialState)

  const authContext = useMemo(() => ({
    signIn: async (data) => {
      const res = await axios.post(API_LOGIN, {
        email: data.email,
        password: data.password
      })
      dispatch({ type: SIGNIN, payload: res.data.access_token })
    },

    signUp: () => {
      console.log('signup')
    },

    signOut: () => {
      dispatch({ type: SIGNOUT, payload: null })
    }
  }))

  return (
    <AuthContext.Provider
      value={{
        signIn: authContext.signIn,
        signUp: authContext.signUp,
        signOut: authContext.signOut,
        isLoading: state.isLoading,
        email: state.email,
        password: state.password,
        userToken: state.userToken
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState
