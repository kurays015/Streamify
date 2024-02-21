"use client";
import { usePathname } from "next/navigation";

export default function Overlay() {
  const pathname = usePathname();
  return (
    <div
      className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900 to-black opacity-75 ${
        pathname.startsWith("/info") ? "z-10" : ""
      }`}
    ></div>
  );
}
