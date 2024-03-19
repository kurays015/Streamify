import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/lib/redux-toolkit/features/counterSlice";
import readSlice from "@/lib/redux-toolkit/features/readSlice";
import queryParamsSlice from "@/lib/redux-toolkit/features/queryParamsSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
      episodesChapters: readSlice,
      queryParams: queryParamsSlice,
    },
  });
};
