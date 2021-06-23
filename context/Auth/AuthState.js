import React, { useReducer, useMemo } from 'react'
import AuthContext from './AuthContext'
import AuthReducers from './AuthReducers'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { USER_DATA, USER_AUTHENTICATED, USER_TOKEN, IS_EMAIL_IN_USE, LOADING, IS_VALID_USER, CREATED_USER } from '../types'

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
    isValidUser: null,
    userIsAuthenticated: null
  }

  //  -->  api urls
  const API_LOGIN = ' https://bsocial.at/api/auth/login'
  const API_REGISTER = ' https://bsocial.at/api/auth/register'
  const API_AUTH = ' https://bsocial.at/api/customer'

  const [state, dispatch] = useReducer(AuthReducers, initialState)

  const authContext = useMemo(() => ({
    //  login
    login: async (userData) => {
      dispatch({ type: LOADING, payload: true })
      dispatch({ type: IS_VALID_USER, payload: null })

      axios.post(API_LOGIN, {
        email: userData.email,
        password: userData.password
      })
        .then(({ data }) => {
          AsyncStorage.setItem('userToken', data.data.api_token)
          dispatch({ type: USER_TOKEN, payload: data.data.api_token })
          dispatch({ type: IS_VALID_USER, payload: true })
          dispatch({ type: LOADING, payload: false })
        })
        .catch((error) => {
          console.log(error)
          dispatch({ type: IS_VALID_USER, payload: false })
          dispatch({ type: LOADING, payload: false })
        })
    },

    //  register
    register: async (userData) => {
      dispatch({ type: LOADING, payload: true })
      dispatch({ type: CREATED_USER, payload: null })
      dispatch({ type: IS_EMAIL_IN_USE, payload: null })

      try {
        console.log(userData.name)
        const { data } = await axios.post(API_REGISTER, {
          headers: { 'content-type': 'application/x-www-form-urlencoded' },
          data: {
            photo: userData.photo,
            name: userData.name,
            lastname: userData.lastName,
            username: userData.username,
            email: userData.email,
            password: userData.password,
            password_confirmation: userData.confirmPassword
          }
        })

        console.log(data)

        if (data.status) {
          dispatch({ type: LOADING, payload: false })
          dispatch({ type: CREATED_USER, payload: true })
        } else {
          dispatch({ type: IS_EMAIL_IN_USE, payload: true })
          dispatch({ type: LOADING, payload: false })
        }
      } catch (error) {
        console.log(error)
      }
    },

    clientAuth: async () => {
      try {
        const token = await AsyncStorage.getItem('userToken')
        const { data } = await axios.get(API_AUTH, { headers: { Authorization: 'Bearer ' + token } })

        console.log(data.data.api_token)

        dispatch({
          type: USER_DATA,
          payload: {
            name: data.data.name,
            lastName: data.data.lastname,
            photo: data.data.photo,
            email: data.data.email
          }
        })

        dispatch({ type: USER_TOKEN, payload: data.data.api_token })
        console.log(state)

        dispatch({ type: USER_AUTHENTICATED, payload: true })
        console.log(state.userIsAuthenticated)
      } catch (error) {
        dispatch({ type: USER_AUTHENTICATED, payload: false })
        console.log(error)
      }
    },

    //  logout
    signOut: async () => {
      try {
        await AsyncStorage.removeItem('userToken')
        dispatch({ type: USER_AUTHENTICATED, payload: false })
      } catch (error) {
        console.log(error)
      }
    }
  }), [])

  return (
    <AuthContext.Provider
      value={{
        login: authContext.login,
        register: authContext.register,
        signOut: authContext.signOut,
        clientAuth: authContext.clientAuth,
        isAlreadyAuthenticatedUser: authContext.isAlreadyAuthenticatedUser,
        loading: state.loading,
        name: state.name,
        lastName: state.lastName,
        email: state.email,
        photo: state.photo,
        userToken: state.userToken,
        isEmailInUse: state.isEmailInUse,
        createdUser: state.createdUser,
        onVerifying: state.onVerifying,
        isValidUser: state.isValidUser,
        userIsAuthenticated: state.userIsAuthenticated
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState
