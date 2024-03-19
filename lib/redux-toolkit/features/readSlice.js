import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: null };

const readSlice = createSlice({
  name: "EpisodesChapters",
  initialState,
  reducers: {
    setEpisodesChapters: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setEpisodesChapters } = readSlice.actions;

export default readSlice.reducer;
