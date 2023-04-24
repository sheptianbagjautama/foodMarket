import {createSlice} from '@reduxjs/toolkit';

const initGlobalState = {
  orders: [],
  inProgress: [],
  pastOrders: [],
};

const orderSlice = createSlice({
  name: 'order',
  initialState: initGlobalState,
  reducers: {
    setOrders(state, action) {
      state.orders = action.payload;
    },
    setInProgress(state, action) {
      state.inProgress = action.payload;
    },
    setPastOrders(state, action) {
      state.pastOrders = action.payload;
    },
  },
});

export const {setOrders, setInProgress, setPastOrders} = orderSlice.actions;
export default orderSlice.reducer;
