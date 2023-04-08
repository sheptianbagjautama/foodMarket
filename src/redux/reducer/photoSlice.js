import {createSlice} from '@reduxjs/toolkit';

const initGlobalState = {
  uri: '',
  type: '',
  name: '',
  isUploadPhoto: false,
};

const photoSlice = createSlice({
  name: 'photo',
  initialState: initGlobalState,
  reducers: {
    setUploadPhoto(state, action) {
      console.log('setUploadPhoto', action);
      state.uri = action.payload.uri;
      state.type = action.payload.type;
      state.name = action.payload.name;
    },
    setUploadStatus(state, action) {
      console.log('setUploadStatus', action);
      state.isUploadPhoto = action.payload;
    },
  },
});

export const {setUploadPhoto, setUploadStatus} = photoSlice.actions;

export default photoSlice.reducer;
