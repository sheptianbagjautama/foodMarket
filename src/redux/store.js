import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {
  registerReducer,
  globalReducer,
  photoReducer,
  homeReducer,
} from './reducer';

const store = configureStore({
  reducer: {
    registerReducer: registerReducer,
    globalReducer: globalReducer,
    photoReducer: photoReducer,
    homeReducer: homeReducer,
  },
  middleware: [thunk],
});

export default store;
