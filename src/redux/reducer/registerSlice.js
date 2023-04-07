import {createSlice} from '@reduxjs/toolkit';

const initGlobalState = {
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
};

const registerSlice = createSlice({
  name: 'auth',
  initialState: initGlobalState,
  reducers: {
    setRegister(state, action) {
      console.log('action', action);
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.password_confirmation = action.payload.password;
    },
  },
});

export const {setRegister, setAddress} = registerSlice.actions;
export default registerSlice.reducer;
