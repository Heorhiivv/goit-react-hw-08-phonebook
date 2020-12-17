/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.contacts;

const getFilter = state => state.filter;

const getLoading = state => state.contacts.loading;

const getItemById = createSelector(
  [(_, itemId) => itemId, getContacts],
  (itemId, contacts) => {
    return contacts.find(item => item.id === itemId);
  },
)
const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(item =>
      item.name.toLowerCase().includes(filter),
    );
  },
);

export default {
  getContacts,
  getFilter,
  getLoading,
  getItemById,
  getFilteredContacts,
};
