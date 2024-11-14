"use client";

import kofi from "@/public/kofi.webp";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  return (
    <footer
      className={`max-w-7xl mx-auto text-slate-400 customSm:mt-16 customSm:mb-5 customSm:p-3 customSm:text-center lg:text-start lg:mt-32 lg:mb-8 lg:py-2 ${
        pathname.startsWith("/embedded") && "hidden"
      }`}
    >
      <h5 className="customSm:text-xs lg:text-sm">
        Copyright 2024 © Streamify.
      </h5>
      <small>
        This site does not store any files on its server. All contents are
        provided by non-affiliated third parties.
      </small>
      <p className="text-xs">Made with 🖤 by Christ</p>
      <div className="flex items-center gap-2 text-xs my-1 customSm:justify-center lg:justify-start">
        Support me{" "}
        <Link href="https://ko-fi.com/christt" target="_blank">
          <Image src={kofi} alt="kofi-link" width={50} height={50} />
        </Link>
      </div>
    </footer>
  );
}
