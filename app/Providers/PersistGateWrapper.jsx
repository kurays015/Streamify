"use client";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "@/lib/redux-toolkit/store";

export default function PersistGateWrapper({ children }) {
  return (
    <PersistGate loading={null} persistor={persistor}>
      {children}
    </PersistGate>
  );
}
