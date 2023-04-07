import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {registerReducer, globalReducer} from './reducer';

const store = configureStore({
  reducer: {
    registerReducer: registerReducer,
    globalReducer: globalReducer,
  },
});

export default store;
