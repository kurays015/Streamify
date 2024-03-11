import { createSlice } from "@reduxjs/toolkit";

const initialState = { name: "Christ" };

const nameSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    setName: state => {
      state.name = "Chrissy";
    },
  },
});

export const { setName } = nameSlice.actions;

export default nameSlice.reducer;
