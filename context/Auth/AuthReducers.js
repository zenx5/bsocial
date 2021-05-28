import { SIGNIN, SIGNOUT, ON_VERIFYING, GET_USERS, LOADING, IS_EMAIL_IN_USE, CREATED_USER } from '../types'

const AuthReducers = (state, action) => {
  const { payload, type } = action

  switch (type) {
    case SIGNIN:
      return {
        ...state,
        userToken: payload
      }

    case IS_EMAIL_IN_USE:
      return {
        ...state,
        isEmailInUse: payload
      }

    case CREATED_USER:
      return {
        ...state,
        createdUser: payload
      }

    case ON_VERIFYING:
      return {
        ...state,
        onVerifying: payload
      }

    case SIGNOUT:
      return {
        ...state,
        userToken: payload
      }

    case GET_USERS:
      return {
        ...state,
        users: payload
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
