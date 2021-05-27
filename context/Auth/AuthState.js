import React, { useReducer, useMemo } from 'react'
import AuthContext from './AuthContext'
import AuthReducers from './AuthReducers'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { SIGNIN, SIGNOUT, LOADING } from '../types'

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

      if (res) {
        dispatch({ type: LOADING, payload: true })
        try {
          await AsyncStorage.setItem('userToken', res.data.access_token)
        } catch (err) {
          console.log(err)
        }
        dispatch({ type: LOADING, payload: false })
        dispatch({ type: SIGNIN, payload: res.data.access_token })
      }
    },

    signUp: async (data) => {
      if (data.name !== '' && data.lastName !== '' && data.email !== '' && data.password !== '') {
        const res = await axios.post(API_SIGNUP, {
          name: data.name,
          lastName: data.lastName,
          email: data.email,
          password: data.password
        })
        console.log(res.data)
      }
    },

    signOut: async () => {
      try {
        await AsyncStorage.removeItem('userToken')
      } catch (err) {
        console.log(err)
      }
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
