/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */

import {createSelector} from "reselect"

const getContacts = (state) => state.contacts

const getFilter = (state) => state.filter

const getItemById = (state, itemId) => {
  const contacts = getContacts(state)
  return contacts.find((item) => item.id === itemId)
}
const getFilteredContacts = createSelector([getContacts, getFilter], (contacts, filter) => {
  return contacts.filter((item) => item.name.toLowerCase().includes(filter))
})
export default {
  getContacts,
  getFilter,
  getItemById,
  getFilteredContacts,
}
