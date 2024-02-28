"use client";
import { createContext, useState } from "react";

export const MetaContext = createContext(null);

export default function MetaContextProvider({ children }) {
  const [queryParams, setQueryParams] = useState(null);

  const value = { queryParams, setQueryParams };

  return <MetaContext.Provider value={value}>{children}</MetaContext.Provider>;
}
