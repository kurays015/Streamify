import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/lib/redux-toolkit/features/counterSlice";
import addToListReducer from "@/lib/redux-toolkit/features/addToListSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
      lists: addToListReducer,
    },
  });
};
