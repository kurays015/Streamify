"use client";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import FilterSearchModal from "./FilterSearchModal";
import { providers } from "@/lib/constants";
import ResusableSelect from "../ReusableSelect";
import { useMetaContext } from "@/app/hooks/useMetaContext";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const { queryParams } = useMetaContext();
  const router = useRouter();
  function handleSearch(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const searchQuery = formData.get("search");
    if (!searchQuery) return;
    router.push(`?query=${searchQuery}&type=${queryParams}`);
  }

  return (
    <div className="flex justify-end gap-5 mt-5 mb-12">
      <form onSubmit={handleSearch} className="text-white flex gap-3">
        <Input
          disabled={!queryParams}
          type="search"
          name="search"
          id="search"
          placeholder="search anime, manga, and movie"
          className="bg-slate-800 text-ellipsis overflow-hidden whitespace-nowrap w-full"
        />
        <Button variant="secondary" type="submit">
          Search
        </Button>
      </form>
      <ResusableSelect info={providers} />
      <FilterSearchModal />
    </div>
  );
}
