import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useEpisodeStore = create(
  persist(
    (set, get) => ({
      value: null,
      setValue: payload =>
        set({ value: get().value === payload ? "" : payload }),
    }),
    {
      name: "episodes-chapters-dropdown",
    }
  )
);
