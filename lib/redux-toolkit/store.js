import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/lib/redux-toolkit/features/counterSlice";
import nameReducer from "@/lib/redux-toolkit/features/nameSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
      name: nameReducer,
    },
  });
};
