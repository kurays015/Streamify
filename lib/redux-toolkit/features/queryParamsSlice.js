import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: null };

const queryParamsSlice = createSlice({
  name: "QueryParams",
  initialState,
  reducers: {
    setQueryParams: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setQueryParams } = queryParamsSlice.actions;

export default queryParamsSlice.reducer;
