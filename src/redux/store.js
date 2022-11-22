import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer'
import { loginMiddleware } from './middleware';
import registerReducer from './reducers/registerReducer';

const store = configureStore({
  reducer : {
    auth: authReducer,
    registration: registerReducer
  },
  middleware: (getDefaultMiddleware) =>
  [...getDefaultMiddleware(), loginMiddleware]


})

export default store;
