import React, { useReducer, useMemo } from 'react'
import AuthContext from './AuthContext'
import AuthReducers from './AuthReducers'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { USER_TOKEN, IS_EMAIL_IN_USE, LOADING, IS_VALID_USER, CREATED_USER, ADD_USER_DATA } from '../types'

const AuthState = (props) => {
  const initialState = {
    loading: false,
    name: null,
    lastName: null,
    photo: null,
    email: null,
    userToken: null,
    createdUser: null,
    isEmailInUse: null,
    onVerifying: false,
    isValidUser: null
  }

  //  api urls
  const API_LOGIN = 'https://bsocial-app.herokuapp.com/api/auth/login'
  const API_SIGNUP = 'https://bsocial-app.herokuapp.com/api/auth/register'
  const API_GET_AUTH_USER = 'https://bsocial-app.herokuapp.com/api/users/auth'

  const [state, dispatch] = useReducer(AuthReducers, initialState)

  const authContext = useMemo(() => ({
    //  login
    signIn: async (data) => {
      dispatch({ type: LOADING, payload: true })
      dispatch({ type: IS_VALID_USER, payload: null })
      try {
        const res = await axios.post(API_LOGIN, {
          email: data.email,
          password: data.password
        })
        await AsyncStorage.setItem('userToken', res.data.access_token)
        dispatch({ type: USER_TOKEN, payload: res.data.access_token })
        dispatch({ type: IS_VALID_USER, payload: true })
        dispatch({ type: LOADING, payload: false })

      } catch (error) {
        dispatch({ type: IS_VALID_USER, payload: false })
        dispatch({ type: LOADING, payload: false })
      }
    },

    //  register
    signUp: async (data) => {
      dispatch({ type: LOADING, payload: true })
      dispatch({ type: CREATED_USER, payload: null })
      dispatch({ type: IS_EMAIL_IN_USE, payload: null })
      try {
        await axios.post(API_SIGNUP, {
          name: data.name,
          lastname: data.lastName,
          email: data.email,
          password: data.password
        })
        dispatch({ type: LOADING, payload: false })
        dispatch({ type: CREATED_USER, payload: true })
        console.log(data)
      } catch (error) {
        console.log(error)
        dispatch({ type: IS_EMAIL_IN_USE, payload: true })
        dispatch({ type: LOADING, payload: false })
      }
      dispatch({ type: LOADING, payload: false })
    },

    //  logout
    signOut: async () => {
      try {
        await AsyncStorage.removeItem('userToken')
      } catch (err) {
        console.log(err)
      }
      dispatch({ type: USER_TOKEN, payload: null })
    },

    isAlreadyAuthenticatedUser: async () => {
      try {
        const token = await AsyncStorage.getItem('userToken')
        if (token.length !== 0) {
          dispatch({ type: USER_TOKEN, payload: token })
        } else {
          dispatch({ type: USER_TOKEN, payload: null })
        }
      } catch (err) {
        console.log(err)
      }
    },

    getAuthenticatedUserData: async () => {
      try {
        const { data } = await axios.get(API_GET_AUTH_USER, {
          headers: {Authorization: 'Bearer ' + state.userToken}
        })
        dispatch({
          type: ADD_USER_DATA,
          payload: {
            name: data.name,
            lastName: data.lastname,
            photo: data.photo,
            email: data.email
          }
        })
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
        isAlreadyAuthenticatedUser: authContext.isAlreadyAuthenticatedUser,
        getAuthenticatedUserData: authContext.getAuthenticatedUserData,
        loading: state.loading,
        name: state.name,
        lastName: state.lastName,
        email: state.email,
        photo: state.photo,
        userToken: state.userToken,
        isEmailInUse: state.isEmailInUse,
        createdUser: state.createdUser,
        onVerifying: state.onVerifying,
        isValidUser: state.isValidUser
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState
