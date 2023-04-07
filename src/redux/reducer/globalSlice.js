import {createSlice} from '@reduxjs/toolkit';

const initGlobalState = {
  isError: false,
  message: 'Error',
};

const globalSlice = createSlice({
  name: 'global',
  initialState: initGlobalState,
  reducers: {
    setError(state, action) {
      state.isError = action.value.isError;
      state.message = action.value.message;
    },
  },
});

export const {setError} = globalSlice.actions;
export default globalSlice.reducer;
