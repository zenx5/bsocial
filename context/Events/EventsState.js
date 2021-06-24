import React, { useReducer, useMemo } from 'react'
import EventsContext from './EventsContext'
import EventsReducer from './EventsReducer'
import axios from 'axios'
import { FEATURED_EVENTS, UPCOMING_EVENTS } from '../types'

const EventsState = (props) => {
  const initialState = {
    latitude: null,
    longitude: null,
    date: null,
    time: null,
    eventName: '',
    eventDescription: '',
    eventImage: null,
    category: '',
    contacts: [],
    upcoming: [],
    featured: []
  }

  //  -->   API
  const API_HOME = 'https://bsocial.at/api/events'

  const [state, dispatch] = useReducer(EventsReducer, initialState)

  const eventsState = useMemo(() => ({
    getEventsHome: async (token) => {
      try {
        const { data } = await axios.get(API_HOME, { headers: { Authorization: 'Bearer ' + token } })
        dispatch({ type: UPCOMING_EVENTS, payload: data.data.upcoming })
        dispatch({ type: FEATURED_EVENTS, payload: data.data.featured })
      } catch (error) {
        console.log(error)
      }
    }
  }), [state])

  return (
    <EventsContext.Provider
      value={{
        upcoming: state.upcoming,
        featured: state.featured,
        getEventsHome: eventsState.getEventsHome
      }}
    >
      {props.children}
    </EventsContext.Provider>
  )
}

export default EventsState
