"use client";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import FilterSearchModal from "./FilterSearchModal";
import { types } from "@/lib/constants";
import ResusableSelect from "../../ReusableSelect";
import { usePathname } from "next/navigation";
import { useState } from "react";
import useSearch from "@/hooks/useSearch";

export default function SearchBar() {
  const [queryParams, setQueryParams] = useState(null);
  const pathname = usePathname();

  const handleSearch = useSearch(pathname, queryParams);

  return (
    <div className="flex justify-end gap-5 customSm:my-5 customSm:flex-col md:flex-row md:justify-center lg:mb-12 lg:mt-5">
      <form onSubmit={handleSearch} className="text-white flex gap-3">
        <Input
          disabled={!queryParams}
          type="search"
          name={pathname}
          id={pathname}
          placeholder={
            !queryParams
              ? "Select a type first..."
              : "search anime, manga, and movie..."
          }
          className="bg-slate-800 text-ellipsis overflow-hidden whitespace-nowrap w-full disabled:bg-slate-100 "
        />
        <Button variant="secondary" type="submit">
          Search
        </Button>
      </form>
      <div className="customSm:flex customSm:justify-center">
        <ResusableSelect info={types} setQueryParams={setQueryParams} />
        <FilterSearchModal />
      </div>
    </div>
  );
}
