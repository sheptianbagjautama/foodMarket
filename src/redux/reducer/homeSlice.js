import {createSlice} from '@reduxjs/toolkit';

const initGlobalState = {
  food: [],
};

const homeSlice = createSlice({
  name: 'home',
  initialState: initGlobalState,
  reducers: {
    setFood(state, action) {
      state.food = action.payload;
    },
  },
});

export const {setFood} = homeSlice.actions;
export default homeSlice.reducer;
