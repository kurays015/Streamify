"use client";
import { usePathname } from "next/navigation";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import useSearch from "@/hooks/useSearch";

export default function CategoriesSearchBar() {
  const pathname = usePathname();
  const handleSearch = useSearch(pathname);

  return (
    <div className="flex items-center justify-end">
      <form className="flex gap-2 mt-5 mb-12" onSubmit={handleSearch}>
        <Input
          type="search"
          placeholder="search for news, light novel, gogoanime, comicks..."
          name={pathname}
          id={pathname}
        />
        <Button variant="secondary">Search</Button>
      </form>
    </div>
  );
}
