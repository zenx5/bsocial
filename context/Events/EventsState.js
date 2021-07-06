import React, { useReducer, useMemo } from 'react'
import EventsContext from './EventsContext'
import EventsReducer from './EventsReducer'
import axios from 'axios'
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
  SET_ADDRESS
} from '../types'

const EventsState = (props) => {
  const initialState = {
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
    invitedContacts: [],
    contacts: [],
    upcoming: [],
    featured: [],
    allEventsCategories: [],
    categoriesMusic: []
  }

  //  -->   APIs
  const API_HOME = 'https://bsocial.at/api/events'
  const API_ALL_CATEGORIES = 'https://bsocial.at/api/categories'
  const API_CREATE_NEW_EVENT = 'https://bsocial.at/api/events/store'

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

    setEventDescription: (description) => {
      console.log(description)
      dispatch({ type: SET_EVENT_DESCRIPTION, payload: description })
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

    createNewEvent: async (info, image, userToken) => {
      // console.log('userToken: ', userToken)
      // console.log(info)
      // console.log(image)

      /* global FormData, fetch */
      const formData = new FormData()

      // data.append("image", {
      //   name: "some_name", // also, won't work without this. A name is required
      //   height: image.height,
      //   width: image.width,
      //   type: "multipart/form-data", // <-- this part here
      //   uri:
      //     Platform.OS === "android" ? image.uri : image.uri.replace("file:/", "")
      // });

      formData.append('address', 'info.address')
      formData.append('latitud', 40.75951761811803)
      formData.append('longitud', -73.97105421870947)
      formData.append('start_date', '2021/07/14')
      formData.append('start_hour', '06:30')
      formData.append('name', 'info.name')
      formData.append('type', 'public')
      formData.append('description', 'info.description')
      formData.append('image', {
        name: 'image_Name',
        height: 1187,
        width: 1920,
        type: 'multipart/form-data',
        uri: 'file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540hanktech%252Fbsocial_development/ImagePicker/b5d90df7-77ea-494a-813f-4a95515c5279.jpg'
      })
      const categories = [10]
      categories.map((category) => formData.append('categories[]', category))

      const contacts = [4, 6]
      contacts.map((contact) => formData.append('contacts[]', contact))

      const response = await fetch(API_CREATE_NEW_EVENT, {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${userToken}`,
          Accept: '*/*'
        },
        body: formData
      })

      console.log(response)
      const result = await response.json()
      console.log(result)
    }
  }), [])

  return (
    <EventsContext.Provider
      value={{
        upcoming: state.upcoming,
        featured: state.featured,
        address: state.address,
        latitude: state.latitude,
        longitude: state.longitude,
        startDate: state.startDate,
        startTime: state.startTime,
        eventName: state.eventName,
        description: state.description,
        eventImage: state.eventImage,
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
        setInvitedContacts: eventsState.setInvitedContacts,
        createNewEvent: eventsState.createNewEvent
      }}
    >
      {props.children}
    </EventsContext.Provider>
  )
}

export default EventsState
