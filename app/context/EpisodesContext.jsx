"use client";
import { createContext, useState } from "react";

export const EpisodeContext = createContext(null);

export function EpisodeContextProvider({ children }) {
  const [filteredEpisodes, setFilteredEpisodes] = useState([]);

  const value = { filteredEpisodes, setFilteredEpisodes };
  return (
    <EpisodeContext.Provider value={value}>{children}</EpisodeContext.Provider>
  );
}
