import React, { useReducer, useMemo } from 'react'
import EventsContext from './EventsContext'
import EventsReducer from './EventsReducer'
import axios from 'axios'
import { FEATURED_EVENTS, SET_COORDINATE, SET_DATE, SET_TIME, UPCOMING_EVENTS } from '../types'

const EventsState = (props) => {
  const initialState = {
    latitude: '',
    longitude: '',
    date: '',
    time: '',
    eventName: '',
    eventDescription: '',
    eventImage: '',
    category: '',
    contacts: [],
    upcoming: [],
    featured: []
  }

  //  -->   API
  const API_HOME = 'https://bsocial.at/api/events'

  const [state, dispatch] = useReducer(EventsReducer, initialState)

  const eventsState = useMemo(() => ({
    //    -->   get all events
    getEventsHome: async (token) => {
      try {
        const { data } = await axios.get(API_HOME, { headers: { Authorization: 'Bearer ' + token } })
        dispatch({ type: UPCOMING_EVENTS, payload: data.data.upcoming })
        dispatch({ type: FEATURED_EVENTS, payload: data.data.featured })
      } catch (error) {
        console.log(error)
      }
    },

    setCoordinate: (coordinate) => {
      console.log(coordinate)
      dispatch({
        type: SET_COORDINATE,
        payload: {
          latitude: coordinate.latitude,
          longitude: coordinate.longitude
        }
      })
    },

    setDate: (date) => {
      console.log(date)
      dispatch({ type: SET_DATE, payload: date })
    },

    setTime: (time) => {
      console.log(time)
      dispatch({ type: SET_TIME, payload: time })
    }
  }), [state])

  return (
    <EventsContext.Provider
      value={{
        upcoming: state.upcoming,
        featured: state.featured,
        latitude: state.latitude,
        longitude: state.longitude,
        date: state.date,
        time: state.time,
        getEventsHome: eventsState.getEventsHome,
        setCoordinate: eventsState.setCoordinate,
        setDate: eventsState.setDate,
        setTime: eventsState.setTime
      }}
    >
      {props.children}
    </EventsContext.Provider>
  )
}

export default EventsState
