import React, { useReducer, useMemo } from 'react'
import AuthContext from './AuthContext'
import AuthReducers from './AuthReducers'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { SIGNIN, SIGNOUT, GET_USERS, LOADING, IS_EMAIL_IN_USE, ON_VERIFYING, CREATED_USER } from '../types'

const AuthState = (props) => {
  const initialState = {
    isLoading: false,
    name: null,
    lastName: null,
    photo_url: null,
    email: null,
    password: null,
    userToken: null,
    createdUser: null,
    isEmailInUse: null,
    onVerifying: false
  }

  //  api urls
  const API_LOGIN = 'https://bsocial-app.herokuapp.com/api/auth/login'
  const API_SIGNUP = 'https://bsocial-app.herokuapp.com/api/auth/register'
  const API_GET_USERS = 'https://bsocial-app.herokuapp.com/api/users'

  const [state, dispatch] = useReducer(AuthReducers, initialState)

  const authContext = useMemo(() => ({
    //  login
    signIn: async (data) => {
      const res = await axios.post(API_LOGIN, {
        email: data.email,
        password: data.password
      })
      console.log(res.data)
      // dispatch({ type: LOADING, payload: true })
      if (res) {
        try {
          await AsyncStorage.setItem('userToken', res.data.access_token)
        } catch (err) {
          console.log(err)
        }
        dispatch({ type: LOADING, payload: false })
        dispatch({ type: SIGNIN, payload: res.data.access_token })
      }
      dispatch({ type: LOADING, payload: false })
    },

    //  register
    signUp: async (data) => {
      dispatch({ type: ON_VERIFYING, payload: true })
      dispatch({ type: CREATED_USER, payload: null })
      dispatch({ type: IS_EMAIL_IN_USE, payload: null })
      try {
        await axios.post(API_SIGNUP, {
          name: data.name,
          lastname: data.lastName,
          email: data.email,
          password: data.password
        })
        dispatch({ type: ON_VERIFYING, payload: false })
        dispatch({ type: CREATED_USER, payload: true })
        console.log(data)
      } catch (error) {
        console.log(error)
        dispatch({ type: IS_EMAIL_IN_USE, payload: true })
        dispatch({ type: ON_VERIFYING, payload: false })
      }
      dispatch({ type: ON_VERIFYING, payload: false })
    },

    //  logout
    signOut: async () => {
      try {
        await AsyncStorage.removeItem('userToken')
      } catch (err) {
        console.log(err)
      }
      dispatch({ type: SIGNOUT, payload: null })
    },

    getUsers: async () => {
      try {
        const users = await axios.get(API_GET_USERS)
        dispatch({ type: GET_USERS, payload: users })
      } catch (err) {
        console.log(err)
      }
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
        userToken: state.userToken,
        isEmailInUse: state.isEmailInUse,
        createdUser: state.createdUser,
        onVerifying: state.onVerifying
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState
