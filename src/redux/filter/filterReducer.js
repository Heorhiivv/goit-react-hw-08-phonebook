import { createReducer } from '@reduxjs/toolkit';
import filterContacts from './filterAct';

const filterReducer = createReducer('', {
  [filterContacts]: (_, action) => action.payload
});

export default filterReducer;