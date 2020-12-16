/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
import axios from 'axios';
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

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com'

const onAddContact = ({name, number}) => dispatch => {
  dispatch(addContactsRequest());
  axios
    .post('/contacts', {name, number})
    .then(({data}) => dispatch(addContactsSuccess(data)))
    .catch(error => dispatch(addContactsError(error)));
};

const fetchContacts = () => dispatch => {
  dispatch(fetchContactsRequest());
  axios
    .get('/contacts')
    .then(({data}) => dispatch(fetchContactsSuccess(data)))
    .catch(error => dispatch(fetchContactsError(error)));
};

const removeContact = id => dispatch => {
  dispatch(removeContactsRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(removeContactsSuccess(id)))
    .catch(error => dispatch(removeContactsError(error)));
};
export default { onAddContact, fetchContacts, removeContact };