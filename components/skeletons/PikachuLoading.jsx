"use client";
import pika from "@/public/pika.gif";
import Image from "next/image";
import { usePathname } from "next/navigation";
export default function PikachuLoading() {
  const pathname = usePathname();
  return (
    <div
      className={`text-white flex flex-col items-center justify-center ${
        pathname.startsWith("/info") || pathname.startsWith("/category-info")
          ? "h-[70vh]"
          : "h-[60vh]"
      }`}
    >
      <Image src={pika} width={80} height={80} alt="pikachu" className="w-32" />
      <h5>Loading...</h5>
    </div>
  );
}
