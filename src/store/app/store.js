// dummy data
// import {
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import authenticatedReducer  from "../../feature/useSlice";
import courseReducer  from "../../components/Student/Table/TableSlice";



export const store = configureStore({
  reducer: {
    authenticated:authenticatedReducer,
    course:courseReducer
  }
});

setupListeners(store.dispatch);
