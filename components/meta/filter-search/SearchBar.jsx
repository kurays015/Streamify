"use client";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import FilterSearchModal from "./FilterSearchModal";
import { types } from "@/lib/constants";
import ResusableSelect from "../../ReusableSelect";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const [queryParams, setQueryParams] = useState(null);

  const router = useRouter();
  function handleSearch(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const searchQuery = formData.get("search");
    if (!searchQuery) return;
    router.push(`?query=${searchQuery}&searchType=${queryParams}`);
  }

  return (
    <div className="flex justify-end gap-5 mt-5 mb-12 customSm:flex-col md:flex-row md:justify-center">
      <form onSubmit={handleSearch} className="text-white flex gap-3">
        <Input
          disabled={!queryParams}
          type="search"
          name="search"
          id="search"
          placeholder={
            !queryParams
              ? "Choose a type first..."
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
