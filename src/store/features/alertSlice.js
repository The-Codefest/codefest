import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  message: "",
  severity: "",
};

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    showAlert: (state, action) => {
      state.severity = action?.payload[0];
      state.message = action?.payload[1];
      state.open = true;
    },
    hideAlert: (state) => {
      state.open = false;
      state.message = "";
    },
  },
});

export default alertSlice.reducer;
export const { showAlert, hideAlert } = alertSlice.actions;
