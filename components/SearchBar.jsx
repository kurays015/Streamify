"use client";
import { Input } from "@/components/ui/input";
import { FaFilter } from "react-icons/fa";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const router = useRouter();

  function handleSearch(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const searchQuery = formData.get("search");
    if (!searchQuery) return;
    router.push(`/search?query=${searchQuery}`);
  }

  return (
    <form
      onSubmit={handleSearch}
      className="text-white flex items-center gap-5 mt-5 mb-8"
    >
      <Input
        type="search"
        name="search"
        id="search"
        placeholder="Type here to search..."
        className="bg-slate-800 w-1/2"
      />
      <FaFilter className="text-slate-300 cursor-pointer text-3xl" />
      <Button variant="secondary" type="submit">
        Search
      </Button>
    </form>
  );
}
