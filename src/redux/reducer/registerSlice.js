import {createSlice} from '@reduxjs/toolkit';

const initGlobalState = {
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
  address: '',
  city: '',
  houseNumber: '',
  phoneNumber: '',
};

const registerSlice = createSlice({
  name: 'auth',
  initialState: initGlobalState,
  reducers: {
    setRegister(state, action) {
      state.name = action.value.name;
      state.email = action.value.email;
      state.password = action.value.password;
      state.password_confirmation = action.value.password_confirmation;
    },
    setAddress(state, action) {
      state.address = action.value.address;
      state.city = action.value.city;
      state.houseNumber = action.value.houseNumber;
      state.phoneNumber = action.value.phoneNumber;
    },
  },
});

export const {setRegister, setAddress} = registerSlice.actions;
export default registerSlice.reducer;
