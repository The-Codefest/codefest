import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  originalImage: null,
  uploadedImage: null,
};

const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    setOriginalImage: (state, action) => {
      state.originalImage = action.payload;
    },
    removeOriginalImage: (state) => {
      state.originalImage = null;
    },
    setUploadedImage: (state, action) => {
      state.uploadedImage = action.payload;
    },
    removeUploadedImage: (state) => {
      state.uploadedImage = null;
    },
  },
});

export default imageSlice.reducer;
export const {
  setOriginalImage,
  setUploadedImage,
  removeOriginalImage,
  removeUploadedImage,
} = imageSlice.actions;
