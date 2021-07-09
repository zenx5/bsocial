/* global FormData, fetch */
import React, { useReducer, useMemo } from 'react'
import EventsContext from './EventsContext'
import EventsReducer from './EventsReducer'
import { API_HOME, API_ALL_CATEGORIES, API_CREATE_NEW_EVENT } from '../../constants'
import axios from 'axios'
import { Platform } from 'react-native'
import {
  FEATURED_EVENTS,
  UPCOMING_EVENTS,
  SET_COORDINATE,
  SET_START_DATE,
  SET_START_TIME,
  SET_EVENT_DESCRIPTION,
  SET_EVENT_IMAGE,
  SET_EVENT_NAME,
  SET_ALL_EVENTS_CATEGORIES,
  SET_ALL_CATEGORIES_MUSIC,
  SET_CATEGORY,
  SET_INVITED_CONTACTS,
  SET_ADDRESS,
  LOADING
} from '../types'

const EventsState = (props) => {
  const initialState = {
    loading: false,
    address: '',
    latitude: '',
    longitude: '',
    startDate: '',
    startTime: '',
    eventName: '',
    description: '',
    image: {
      width: '',
      height: '',
      uri: ''
    },
    category: [],
    eventType: '',
    invitedContacts: [],
    contacts: [],
    upcoming: [],
    featured: [],
    allEventsCategories: [],
    categoriesMusic: []
  }

  const [state, dispatch] = useReducer(EventsReducer, initialState)

  const eventsState = useMemo(() => ({
    //    -->   get all events
    getEventsHome: async (token) => {
      try {
        const { data } = await axios.get(API_HOME, { headers: { Authorization: `Bearer ${token}` } })
        dispatch({ type: UPCOMING_EVENTS, payload: data.data.upcoming })
        dispatch({ type: FEATURED_EVENTS, payload: data.data.featured })
      } catch (error) {
        console.log(error)
      }
    },

    // get all categories from API and set in state all events categories and music
    getAllCategories: async (token) => {
      try {
        const { data } = await axios.get(API_ALL_CATEGORIES, { headers: { Authorization: `Bearer ${token}` } })
        const events = data.data[0].filter(event => event.enabled === 1)
        const musics = data.data[1].filter(music => music.enabled === 1)
        dispatch({ type: SET_ALL_EVENTS_CATEGORIES, payload: events })
        dispatch({ type: SET_ALL_CATEGORIES_MUSIC, payload: musics })
      } catch (error) {
        console.log(error)
      }
    },

    //  set address in state
    setAddress: (locationName) => {
      console.log(locationName)
      dispatch({ type: SET_ADDRESS, payload: locationName })
    },

    //  set coordinate in state
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

    //  set star date of event on state
    setStartDate: (date) => {
      console.log(date)
      dispatch({ type: SET_START_DATE, payload: date })
    },

    //  set star time of event on state
    setStartTime: (time) => {
      console.log(time)
      dispatch({ type: SET_START_TIME, payload: time })
    },

    //  set event name in state
    setEventName: (name) => {
      console.log(name)
      dispatch({ type: SET_EVENT_NAME, payload: name })
    },

    //  set event description in state
    setEventDescription: (description) => {
      console.log(description)
      dispatch({ type: SET_EVENT_DESCRIPTION, payload: description })
    },

    //  set event type in the state
    setEventType: (type) => {
      console.log(type)
    },

    setEventImage: (image) => {
      console.log(image)
      dispatch({ type: SET_EVENT_IMAGE, payload: image })
    },

    setCategory: (category) => {
      console.log(category)
      dispatch({ type: SET_CATEGORY, payload: category })
    },

    setInvitedContacts: (contacts) => {
      console.log(contacts)
      dispatch({ type: SET_INVITED_CONTACTS, payload: contacts })
    },

    createNewEvent: async (userToken, eventData) => {
      console.log('userToken: ', userToken)
      console.log(eventData)

      const formData = new FormData()

      formData.append('address', eventData.address)

      formData.append('latitud', eventData.latitude)

      formData.append('longitud', eventData.longitude)

      formData.append('start_date', eventData.startDate)

      formData.append('start_hour', eventData.startTime)

      formData.append('name', eventData.eventName)

      formData.append('description', eventData.description)

      formData.append('image', {
        name: 'generic_name',
        width: eventData.image.width,
        height: eventData.image.height,
        type: 'multipart/form-data',
        uri: Platform.OS === 'android' ? eventData.image.uri : eventData.image.uri.replace('file:/', '')
      })

      formData.append('type', 'public')

      eventData.category.map((categories) => formData.append('categories[]', categories))

      eventData.invitedContacts.map((contact) => formData.append('contacts[]', contact))

      try {
        //  start loading
        dispatch({ type: LOADING, payload: true })

        //  fetch to create event
        const response = await fetch(API_CREATE_NEW_EVENT, {
          method: 'POST',
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${userToken}`,
            Accept: '*/*'
          },
          body: formData
        })

        //  show result
        const result = await response.json()
        console.log(result)

        //  stop loading
        dispatch({ type: LOADING, payload: true })

        //  clear state
        dispatch({ type: SET_START_DATE, payload: '' })
        dispatch({ type: SET_START_TIME, payload: '' })
      } catch (error) {
        //  stop loading
        dispatch({ type: LOADING, payload: true })

        //  show erros
        console.log(error)
      }
    }
  }), [])

  return (
    <EventsContext.Provider
      value={{
        loading: state.loading,
        upcoming: state.upcoming,
        featured: state.featured,
        address: state.address,
        latitude: state.latitude,
        longitude: state.longitude,
        startDate: state.startDate,
        startTime: state.startTime,
        eventName: state.eventName,
        description: state.description,
        image: state.image,
        category: state.category,
        invitedContacts: state.invitedContacts,
        allEventsCategories: state.allEventsCategories,
        categories_music: state.categories_music,
        getEventsHome: eventsState.getEventsHome,
        getAllCategories: eventsState.getAllCategories,
        setAddress: eventsState.setAddress,
        setCoordinate: eventsState.setCoordinate,
        setStartDate: eventsState.setStartDate,
        setStartTime: eventsState.setStartTime,
        setEventName: eventsState.setEventName,
        setEventDescription: eventsState.setEventDescription,
        setEventImage: eventsState.setEventImage,
        setCategory: eventsState.setCategory,
        setEventType: eventsState.setEventType,
        setInvitedContacts: eventsState.setInvitedContacts,
        createNewEvent: eventsState.createNewEvent
      }}
    >
      {props.children}
    </EventsContext.Provider>
  )
}

export default EventsState
