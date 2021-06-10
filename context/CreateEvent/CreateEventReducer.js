import { SET_CATEGORY } from '../types'

const CreateEventReducer = (state, action) => {
  const { payload, type } = action

  switch (type) {
    case SET_CATEGORY:
      return {
        ...state,
        category: payload
      }
    default:
      return state
  }
}

export default CreateEventReducer
