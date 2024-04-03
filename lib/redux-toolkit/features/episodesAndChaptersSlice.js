import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

const episodesAndChaptersSlice = createSlice({
  name: "EpisodesAndChapters",
  initialState,
  reducers: {
    setValue: (state, action) => {
      state.value = state.value === action.payload ? "" : action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setValue } = episodesAndChaptersSlice.actions;

export default episodesAndChaptersSlice.reducer;
