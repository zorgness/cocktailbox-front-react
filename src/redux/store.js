import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer'
import { loginMiddleware } from './middleware';
import registerReducer from './reducers/registerReducer';
import likeReducer from './reducers/likeReducer';

const store = configureStore({
  reducer : {
    auth: authReducer,
    registration: registerReducer,
    like: likeReducer
  },
  middleware: (getDefaultMiddleware) =>
  [...getDefaultMiddleware(), loginMiddleware]


})

export default store;
