"use client";
import { usePathname } from "next/navigation";
import Overlay from "./Overlay";

export default function CoverImage({ cover }) {
  const pathname = usePathname();
  return (
    <div
      style={{
        backgroundImage: `url("${cover}")`,
      }}
      className={`${
        pathname === "/"
          ? "w-full bg-no-repeat bg-cover customSm:h-[80vh] customSm:bg-center lg:h-screen"
          : "absolute h-screen -top-36 w-full bg-no-repeat bg-cover bg-center customSm:hidden lg:block"
      }`}
    >
      <Overlay />
    </div>
  );
}
