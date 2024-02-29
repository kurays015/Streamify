"use client";
import { createContext, useState } from "react";

export const MetaContext = createContext(null);

export default function MetaContextProvider({ children }) {
  const [filteredEpisodes, setFilteredEpisodes] = useState([]);

  const value = { filteredEpisodes, setFilteredEpisodes };

  return <MetaContext.Provider value={value}>{children}</MetaContext.Provider>;
}
