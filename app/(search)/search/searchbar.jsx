"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useRef } from "react";
import { advanceSearch } from "@/lib/advanceSearchData";
import QueriesSelect from "./queries-select";
import ClearFilter from "./clear-filter";
import ErrorMessage from "./error-msg";
import TypeSelect from "./type-select";

export default function SearchBar() {
  const [animeAdvanceSearch, setAnimeAdvanceSearch] = useState(false);
  const [message, setMessage] = useState("");
  const inputRef = useRef(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());

  const clearFilter = () => {
    router.push("/search");
    setAnimeAdvanceSearch(false);
    if (inputRef.current) inputRef.current.value = "";
  };

  const handleSubmit = e => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    formData.forEach((value, key) => {
      if (value) {
        params.set(key, value.toString());
      }
    });

    const type = formData.get("type");

    if ((!inputRef.current?.value && !animeAdvanceSearch) || !type) {
      setMessage("Field must not be empty.");
      return;
    }

    if (type === "Anime" && Array.from(params).length === 1) {
      setMessage("Select one of the options.");
      return;
    }

    setMessage("");
    router.push(`?${params.toString()}`);
  };

  const handleTypeChange = value => {
    clearFilter();
    if (value === "Anime") {
      setAnimeAdvanceSearch(true);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-4 w-full mx-auto bg-gray-800 text-gray-200 rounded-lg shadow-md"
    >
      <div>
        <Input
          ref={inputRef}
          type="search"
          name="query"
          placeholder="Search for movies, series, and anime..."
          className="w-full bg-gray-700 text-gray-100 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="grid customSm:grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-4">
        <TypeSelect
          name="type"
          placeholder="Select type"
          onValueChange={handleTypeChange}
        />

        {animeAdvanceSearch && (
          <>
            {advanceSearch.types.map(advance => (
              <QueriesSelect key={advance.type} {...advance} />
            ))}
          </>
        )}

        <ClearFilter clearFilter={clearFilter} params={params} />
        <Button
          type="submit"
          className="w-full bg-blue-600 text-white hover:bg-blue-700"
        >
          Search
        </Button>
      </div>
      <ErrorMessage message={message} />
    </form>
  );
}
