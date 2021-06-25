import React, { useReducer, useMemo } from 'react'
import EventsContext from './EventsContext'
import EventsReducer from './EventsReducer'
import axios from 'axios'
import { FEATURED_EVENTS, SET_COORDINATE, SET_DATE_TIME, UPCOMING_EVENTS } from '../types'

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

    setDateTime: (date, time) => {
      console.log(date, time)
      dispatch({
        type: SET_DATE_TIME,
        payload: {
          date,
          time
        }
      })
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
        setDateTime: eventsState.setDateTime
      }}
    >
      {props.children}
    </EventsContext.Provider>
  )
}

export default EventsState
