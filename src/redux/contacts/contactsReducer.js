import { createReducer } from '@reduxjs/toolkit';
import {
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  removeContactsRequest,
  removeContactsSuccess,
  removeContactsError,
} from './contactsAct';

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

const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactsRequest]: () => true,
  [addContactsSuccess]: () => false,
  [addContactsError]: () => false,
  [removeContactsRequest]: () => true,
  [removeContactsSuccess]: () => false,
  [removeContactsError]: () => false,
});

export { contactsReducer, loading };

