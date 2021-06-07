import React, { useReducer, useMemo } from 'react'
import CreateEventContext from './CreateEventContext'
import CreateEventReducer from './CreateEventReducer'

const CreateEventState = (props) => {
  const initialState = {
    latitude: null,
    longitude: null,
    date: null,
    time: null,
    eventName: '',
    eventDescription: '',
    eventImage: null,
    eventCategory: '',
    contacts: []
  }

  const [state, dispatch] = useReducer(CreateEventReducer, initialState)

  const createEventState = useMemo(() => ({
    setDate: () => {
      console.log('create date!')
    }
  }), [state])

  return (
    <CreateEventContext.Provider
      value={{
        date: state.date,
        setDate: createEventState.setDate
      }}
    >
      {props.children}
    </CreateEventContext.Provider>
  )
}

export default CreateEventState
