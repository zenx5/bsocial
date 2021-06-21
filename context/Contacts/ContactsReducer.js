import { LOADING, CONTACT_ID } from '../types'

const ContactsReducers = (state, action) => {
  const { payload, type } = action

  switch (type) {
    case LOADING:
      return {
        ...state,
        loading: payload
      }

    case CONTACT_ID: {
      return {
        ...state,
        contactId: payload
      }
    }

    default:
      return state
  }
}

export default ContactsReducers
