import { SIGNIN, SIGNOUT, LOADING } from '../types'

const AuthReducers = (state, action) => {
  const { payload, type } = action

  switch (type) {
    case SIGNIN:
      return {
        ...state,
        userToken: payload
      }
    case SIGNOUT:
      return {
        ...state,
        userToken: payload
      }
    case LOADING:
      return {
        ...state,
        isLoading: payload
      }
    default:
      return state
  }
}

export default AuthReducers
