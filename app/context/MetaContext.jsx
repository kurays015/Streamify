"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { createContext, useState } from "react";

export const MetaContext = createContext(null);

export default function MetaContextProvider({ children }) {
  const [queryParams, setQueryParams] = useState(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());

  const value = { router, searchParams, params, queryParams, setQueryParams };

  console.log(queryParams);

  return <MetaContext.Provider value={value}>{children}</MetaContext.Provider>;
}
