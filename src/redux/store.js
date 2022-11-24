import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer'
import { loginMiddleware } from './middleware';
import registerReducer from './reducers/registerReducer';
import likeReducer from './reducers/likeReducer';
import commentReducer from './reducers/commentReducer';

const store = configureStore({
  reducer : {
    auth: authReducer,
    registration: registerReducer,
    like: likeReducer,
    comment: commentReducer
  },
  middleware: (getDefaultMiddleware) =>
  [...getDefaultMiddleware(), loginMiddleware]

})

export default store;
