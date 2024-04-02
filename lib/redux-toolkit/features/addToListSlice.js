import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const counterSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    setList: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setList } = counterSlice.actions;

export default counterSlice.reducer;
