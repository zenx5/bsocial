import React, { useReducer, useMemo } from 'react'
import CreateEventContext from './CreateEventContext'
import CreateEventReducer from './CreateEventReducer'
import { SET_CATEGORY } from '../types'

const CreateEventState = (props) => {
  const initialState = {
    latitude: null,
    longitude: null,
    date: null,
    time: null,
    eventName: '',
    eventDescription: '',
    eventImage: null,
    category: '',
    contacts: []
  }

  const [state, dispatch] = useReducer(CreateEventReducer, initialState)

  const createEventState = useMemo(() => ({
    setCategory: (category) => dispatch({ type: SET_CATEGORY, payload: category })
  }), [state])

  return (
    <CreateEventContext.Provider
      value={{
        category: state.category,
        setCategory: createEventState.setCategory
      }}
    >
      {props.children}
    </CreateEventContext.Provider>
  )
}

export default CreateEventState
