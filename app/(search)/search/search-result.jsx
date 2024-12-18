import Card from "@/components/Card";
import infoUrl from "@/lib/infoUrl";
import Link from "next/link";
import SearchResultPagination from "./search-result-pagination";

async function getSearchResult(searchParams, params) {
  const { type, query, page = 1 } = searchParams;

  if (!type && !query) return;

  params.delete("type");
  const queryParams = params.toString()
    ? `advanced-search?${params.toString()}`
    : `${query}`;

  try {
    const url =
      type === "Anime"
        ? `${process.env.SOURCE_URL1}/meta/anilist/${queryParams}`
        : `${process.env.TMDB_BASE_URL}/3/search/multi?query=${
            query ?? ""
          }&page=${page}&include_adult=true&api_key=${process.env.API_KEY}`;

    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) {
      throw new Error("Error fetching search result.");
    }
    return res.json();
  } catch (error) {
    console.log(error);
    return { results: [], message: "Failed to fetch results." };
  }
}

export default async function SearchResult({ searchParams }) {
  const params = new URLSearchParams(searchParams);
  const result = await getSearchResult(searchParams, params);

  if (!searchParams?.query && !params.toString())
    return (
      <p className="text-center mt-10 text-gray-400 h-[35vh]">
        Refine your search using the filters above.
      </p>
    );

  if (!result || !result.results?.length) {
    return (
      <div className="text-center mt-10 text-gray-400 h-[35vh]">
        <p>
          {result?.message ||
            "It's either url is tampered or no content found. "}
        </p>
      </div>
    );
  }

  return (
    <div className="text-slate-200 customSm:mx-2 lg:mt-14 xl:mx-0">
      <div className="grid customSm:grid-cols-2 customSm:gap-2 customGrid3:grid-cols-3 customGrid3:gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {result.results.map(result => (
          <Link href={infoUrl(result)} key={result.id}>
            <Card {...result} />
          </Link>
        ))}
      </div>
      <SearchResultPagination result={result} />
    </div>
  );
}
