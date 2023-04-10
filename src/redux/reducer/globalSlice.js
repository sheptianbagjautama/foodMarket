import {createSlice} from '@reduxjs/toolkit';

const initGlobalState = {
  isError: false,
  message: 'Error',
  isLoading: false,
};

const globalSlice = createSlice({
  name: 'global',
  initialState: initGlobalState,
  reducers: {
    setError(state, action) {
      state.isError = action.payload.isError;
      state.message = action.payload.message;
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const {setError, setLoading} = globalSlice.actions;
export default globalSlice.reducer;
