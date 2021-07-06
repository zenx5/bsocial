import {
  FEATURED_EVENTS,
  SET_ALL_EVENTS_CATEGORIES,
  SET_ALL_CATEGORIES_MUSIC,
  SET_CATEGORY,
  SET_COORDINATE,
  SET_START_DATE,
  SET_START_TIME,
  SET_EVENT_DESCRIPTION,
  SET_EVENT_IMAGE,
  SET_EVENT_NAME,
  SET_INVITED_CONTACTS,
  SET_ADDRESS,
  UPCOMING_EVENTS,
  LOADING
} from '../types'

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

    case SET_ALL_EVENTS_CATEGORIES:
      return {
        ...state,
        allEventsCategories: payload
      }

    case SET_ALL_CATEGORIES_MUSIC:
      return {
        ...state,
        categoriesMusic: payload
      }

    case SET_ADDRESS:
      return {
        ...state,
        address: payload
      }

    case SET_COORDINATE:
      return {
        ...state,
        latitude: payload.latitude,
        longitude: payload.longitude
      }

    case SET_START_DATE:
      return {
        ...state,
        startDate: payload
      }

    case SET_START_TIME:
      return {
        ...state,
        startTime: payload
      }

    case SET_EVENT_NAME:
      return {
        ...state,
        eventName: payload
      }

    case SET_EVENT_DESCRIPTION:
      return {
        ...state,
        description: payload
      }

    case SET_EVENT_IMAGE:
      return {
        ...state,
        image: payload
      }

    case SET_CATEGORY:
      return {
        ...state,
        category: payload
      }

    case SET_INVITED_CONTACTS:
      return {
        ...state,
        invitedContacts: payload
      }

    case LOADING:
      return {
        ...state,
        loading: payload
      }

    default:
      return state
  }
}

export default EventReducer
