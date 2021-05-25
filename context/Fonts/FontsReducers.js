import { GET_FONTS } from '../types'

export default (state, action) => {
  const { payload, type } = action

  switch (type) {
    case GET_FONTS:
      return {
        ...state,
        users: payload
      }
    default:
      return state
  }
}
