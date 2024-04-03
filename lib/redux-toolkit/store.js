import { combineReducers, configureStore } from "@reduxjs/toolkit";
import addToListReducer from "@/lib/redux-toolkit/features/addToListSlice";
import episodesAndChaptersReducer from "@/lib/redux-toolkit/features/episodesAndChaptersSlice";
import { persistReducer, persistStore } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const createNoopStorage = () => {
  return {
    getItem() {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem() {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  lists: persistReducer(persistConfig, addToListReducer),
  epiChapNumber: persistReducer(persistConfig, episodesAndChaptersReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
