import Card from "@/components/Card";
import { Suspense } from "react";
import Link from "next/link";
import infoUrl from "@/lib/infoUrl";
import Header from "@/components/Header";
import SearchBar from "@/components/filter-search/SearchBar";

async function metaManualAndFilterSearch(searchParams) {
  const { query, type } = searchParams;
  const allQueryParams = new URLSearchParams(searchParams).toString();
  const providerName =
    type === "Anime" ? "anilist" : type === "Manga" ? "anilist-manga" : "tmdb";

  const url = query
    ? `${process.env.SOURCE_URL}/meta/${providerName}/${query}`
    : `${process.env.SOURCE_URL}/meta/anilist/advanced-search?${allQueryParams}`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Error fetching anime/manga/movie.");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

async function SearchResult({ searchParams }) {
  const metaManualAndFilterSearchResult = await metaManualAndFilterSearch(
    searchParams
  );

  return (
    <div className="grid grid-cols-6 gap-3">
      {metaManualAndFilterSearchResult?.results?.map(result => (
        <Link href={infoUrl(result)} key={result.id}>
          <Card {...result} />
        </Link>
      ))}
    </div>
  );
}

export default async function Search({ searchParams }) {
  return (
    <main className="max-w-7xl mx-auto mb-24 customSm:px-2">
      <Header />
      <SearchBar />
      <Suspense fallback={<h1 className="text-white text-4xl">LOADING!!</h1>}>
        <SearchResult searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
