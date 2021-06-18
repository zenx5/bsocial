import { USER_AUTHENTICATED, USER_DATA, USER_TOKEN, LOADING, IS_EMAIL_IN_USE, CREATED_USER, IS_VALID_USER } from '../types'

const AuthReducers = (state, action) => {
  const { payload, type } = action

  switch (type) {
    case USER_AUTHENTICATED:
      return {
        ...state,
        userIsAuthenticated: payload
      }

    case USER_DATA:
      return {
        ...state,
        name: payload.name,
        lastName: payload.lastName,
        photo: payload.photo,
        email: payload.email
      }

    case USER_TOKEN:
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

    case IS_VALID_USER:
      return {
        ...state,
        isValidUser: payload
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

export default AuthReducers
