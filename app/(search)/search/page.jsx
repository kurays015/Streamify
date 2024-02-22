import SearchBar from "@/components/SearchBar";
import Card from "@/components/Card";
import { Suspense } from "react";
import Link from "next/link";
import infoUrl from "@/lib/infoUrl";
import Header from "@/components/Header";

async function getManga(query) {
  try {
    const res = await fetch(
      `${process.env.SOURCE_URL}/meta/anilist-manga/${query}`
    );
    if (!res.ok) {
      throw new Error("Error searching anime/manga.");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

async function SearchResult({ searchParams }) {
  const { query } = searchParams;
  const searchData = await getManga(query);
  const searchResults = [...(searchData?.results || [])];

  return (
    <div className="grid grid-cols-6 gap-3">
      {searchResults.map(result => (
        <Link href={infoUrl(result)} key={result.id}>
          <Card {...result} />
        </Link>
      ))}
    </div>
  );
}

export default async function Search({ searchParams }) {
  return (
    <div className="max-w-7xl mx-auto mb-24 customSm:px-2">
      <Header />
      <SearchBar />
      <Suspense fallback={<h1 className="text-white text-4xl">LOADING!!</h1>}>
        <SearchResult searchParams={searchParams} />
      </Suspense>
    </div>
  );
}