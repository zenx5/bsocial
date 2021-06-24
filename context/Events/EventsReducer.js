import { FEATURED_EVENTS, SET_CATEGORY, UPCOMING_EVENTS } from '../types'

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
