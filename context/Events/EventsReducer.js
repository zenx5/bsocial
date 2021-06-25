import { FEATURED_EVENTS, SET_CATEGORY, SET_COORDINATE, SET_DATE, SET_TIME, UPCOMING_EVENTS } from '../types'

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

    case SET_CATEGORY:
      return {
        ...state,
        category: payload
      }
    default:
      return state
  }
}

export default EventReducer
