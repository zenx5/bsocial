import { CONTACT_LIST } from '../types'

const ContactsReducers = (state, action) => {
  const { payload, type } = action

  switch (type) {
    case CONTACT_LIST:
      return {
        ...state,
        contactList: payload
      }

    default:
      return state
  }
}

export default ContactsReducers
