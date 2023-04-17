import {createSlice} from '@reduxjs/toolkit';

const initGlobalState = {
  food: [],
  newTaste: [],
  popular: [],
  recommended: [],
};

const homeSlice = createSlice({
  name: 'home',
  initialState: initGlobalState,
  reducers: {
    setFood(state, action) {
      state.food = action.payload;
    },
    setNewTaste(state, action) {
      state.newTaste = action.payload;
    },
    setPopular(state, action) {
      state.popular = action.payload;
    },
    setRecommended(state, action) {
      state.recommended = action.payload;
    },
  },
});

export const {setFood, setNewTaste, setPopular, setRecommended} =
  homeSlice.actions;
export default homeSlice.reducer;
