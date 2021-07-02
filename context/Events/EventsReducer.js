import { FEATURED_EVENTS, SET_ALL_CATEGORIES_EVENTS, SET_ALL_CATEGORIES_MUSIC, SET_CATEGORY, SET_COORDINATE, SET_DATE, SET_EVENT_DESCRIPTION, SET_EVENT_IMAGE, SET_EVENT_NAME, SET_INVITED_CONTACTS, SET_LOCATION_NAME, SET_TIME, UPCOMING_EVENTS } from '../types'

const EventReducer = (state, action) => {
  const { payload, type } = action

  switch (type) {
    case UPCOMING_EVENTS:
      return {
        ...state,
        upcoming: payload
      }

    case FEATURED_EVENTS:
      return {
        ...state,
        featured: payload
      }

    case SET_ALL_CATEGORIES_EVENTS:
      return {
        ...state,
        categoriesEvents: payload
      }

    case SET_ALL_CATEGORIES_MUSIC:
      return {
        ...state,
        categoriesMusic: payload
      }

    case SET_LOCATION_NAME:
      return {
        ...state,
        locationName: payload
      }

    case SET_COORDINATE:
      return {
        ...state,
        latitude: payload.latitude,
        longitude: payload.longitude
      }

    case SET_DATE:
      return {
        ...state,
        date: payload
      }

    case SET_TIME:
      return {
        ...state,
        time: payload
      }

    case SET_EVENT_NAME:
      return {
        ...state,
        eventName: payload
      }

    case SET_EVENT_DESCRIPTION:
      return {
        ...state,
        eventDescription: payload
      }

    case SET_EVENT_IMAGE:
      return {
        ...state,
        eventImage: payload
      }

    case SET_CATEGORY:
      return {
        ...state,
        categorySelected: payload
      }

    case SET_INVITED_CONTACTS:
      return {
        ...state,
        invitedContacts: payload
      }

    default:
      return state
  }
}

export default EventReducer
