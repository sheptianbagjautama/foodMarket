import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {registerReducer, globalReducer, photoReducer} from './reducer';

const store = configureStore({
  reducer: {
    registerReducer: registerReducer,
    globalReducer: globalReducer,
    photoReducer: photoReducer,
  },
  middleware: [thunk],
});

export default store;
