"use client";
import { LuPopcorn } from "react-icons/lu";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import removeElement from "@/lib/removeElement";
import { useSession } from "next-auth/react";
import MarqueMessage from "./MarqueMessage";

export default function Header() {
  const pathname = usePathname();
  const session = useSession();

  return (
    <>
      {session.data && (
        <MarqueMessage
          text={`Welcome, ${session.data.user.name}!`}
          loop={3}
          speed={100}
        />
      )}
      <header
        className={`flex items-center justify-between text-white py-8 px-2 max-w-7xl mx-auto ${
          pathname === "/" && "z-50 relative"
        }  ${removeElement(pathname)}`}
      >
        <Link href="/" className="flex items-center gap-3">
          <LuPopcorn className="text-4xl text-red-500" />
          <h1 className="font-bold text-xl text-teal-500">Streamify</h1>
        </Link>
        <nav>
          <ul className="flex items-center customSm:gap-0 lg:gap-5">
            <li>
              <Link href="/search">
                <FaSearch className="text-2xl" />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
