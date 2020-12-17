import { configureStore, getDefaultMiddleware  } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReducer, loading } from './contacts/contactsReducer';
import authReducer from './auth/authReducer';
import filter from './filter/filterReducer';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const rootReducer = {
  auth: persistReducer(authPersistConfig, authReducer),
  contacts: contactsReducer,
  filter,
  loading,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware({ serializableCheck: false })],
});

export const persistor = persistStore(store);