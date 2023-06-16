import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { imageSearchApi } from "store/services/imageSearchApi";
import { dashboardStatsApi } from "store/services/dashboardStatsApi";
import { usersManagementApi } from "store/services/usersManagementApi";
import { reportApi } from "store/services/reportApi";
import imageSlice from "store/features/imageSlice";
import alertSlice from "store/features/alertSlice";

const imagePersistConfig = {
  key: "image",
  storage,
};

// const imageSearchAPIPersistConfig = {
//   key: "imageSearchAPI",
//   storage,
//   stateReconciler: (inboundState, originalState, reducedState) => {
//     return { ...reducedState };
//   },
// };

export const store = configureStore({
  reducer: {
    image: persistReducer(imagePersistConfig, imageSlice),
    alert: alertSlice,
    [imageSearchApi.reducerPath]: imageSearchApi.reducer,
    [dashboardStatsApi.reducerPath]: dashboardStatsApi.reducer,
    [usersManagementApi.reducerPath]: usersManagementApi.reducer,
    [reportApi.reducerPath]: reportApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      imageSearchApi.middleware,
      dashboardStatsApi.middleware,
      usersManagementApi.middleware,
      reportApi.middleware
    ),
  vTools: process.env.NODE_ENV !== "production",
});

setupListeners(store.dispatch);
