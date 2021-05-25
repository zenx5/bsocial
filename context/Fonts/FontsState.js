import React, { useReducer } from 'react'
import FontsContext from './FontsContext'
import FontsReducers from './FontsReducers'
import { useFonts, Poppins_300Light, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins' //  eslint-disable-line
import { GET_FONTS } from '../types'

const FontsState = ({ children }) => {
  const initialState = {}

  const [state, dispatch] = useReducer(FontsReducers, initialState)

  const getFonts = async () => {
    const [fontsLoaded] = await useFonts({ Poppins_300Light, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold })
    dispatch({ type: GET_FONTS, payload: fontsLoaded })
  }

  return (
    <FontsContext.Provider value={{ state, getFonts }}>
      {children}
    </FontsContext.Provider>
  )
}

export default FontsState
