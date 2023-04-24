import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {
  registerReducer,
  globalReducer,
  photoReducer,
  homeReducer,
  orderReducer,
} from './reducer';

const store = configureStore({
  reducer: {
    registerReducer: registerReducer,
    globalReducer: globalReducer,
    photoReducer: photoReducer,
    homeReducer: homeReducer,
    orderReducer: orderReducer,
  },
  middleware: [thunk],
});

export default store;
