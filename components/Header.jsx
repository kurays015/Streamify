"use client";
import { CategoryDropdown } from "./CategoryDropdown";
import { LuPopcorn } from "react-icons/lu";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header
      className={`flex items-center justify-between text-white py-8 px-2 max-w-7xl mx-auto ${
        pathname === "/" && "z-50 relative"
      }  ${
        pathname.startsWith("/info") || pathname.startsWith("/watch")
          ? "hidden"
          : ""
      } `}
    >
      <Link href="/" className="flex items-center gap-3">
        <LuPopcorn className="text-4xl text-red-500" />
        <h1 className="uppercase font-bold text-xl text-teal-500">Streamify</h1>
      </Link>
      <nav>
        <ul className="flex items-center gap-5">
          <li>
            <Link href="/search">
              <FaSearch className="text-2xl" />
            </Link>
          </li>
          <CategoryDropdown />
        </ul>
      </nav>
    </header>
  );
}
