import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const addToListSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    setList: (state, action) => {
      state.value = action.payload;
    },
    filterList: (state, action) => {
      state.value = state.value.filter(list => list.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setList, filterList } = addToListSlice.actions;

export default addToListSlice.reducer;
