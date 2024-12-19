"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function GridEpisodeCustomLink({
  children,
  embedPath,
  watchPath,
}) {
  const pathname = usePathname();

  const watchHref = pathname.startsWith("/embedded") ? embedPath : watchPath;

  return (
    <Link
      href={watchHref}
      // className={`${isSelected ? "border-4 border-blue-500" : ""}`}
    >
      {children}
    </Link>
  );
}
