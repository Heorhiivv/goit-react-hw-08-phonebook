import {createReducer} from "@reduxjs/toolkit"
import {
  addContactsSuccess, 
  fetchContactsSuccess, 
  removeContactsSuccess
} from "./contactsAct"

const onAddContact = (state, action) => {
  return [...state, action.payload]
}

const removeContact = (state, action) => {
  return state.filter((item) => item.id !== action.payload)
}
const contactsReducer = createReducer([], {
  [fetchContactsSuccess]: (_, action) => action.payload,
  [addContactsSuccess]: onAddContact,
  [removeContactsSuccess]: removeContact,
})

export {contactsReducer}
