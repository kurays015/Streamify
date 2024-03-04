"use client";
import { useContext } from "react";
import { MetaContext } from "../context/MetaContext";

export const useMetaContext = () => {
  const context = useContext(MetaContext);

  if (!context) {
    throw new Error("MetaContext Error.");
  }
  return context;
};
