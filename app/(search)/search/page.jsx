import SearchBar from "@/components/filter-search/SearchBar";
import SearchResult from "@/components/filter-search/SearchResult";

async function fetchMetaManualAndFilterSearch(searchParams) {
  const { query, searchType } = searchParams;

  const allQueryParams = new URLSearchParams(searchParams).toString();

  const providerName =
    searchType === "Anime"
      ? "anilist"
      : searchType === "Manga"
      ? "anilist-manga"
      : "tmdb";

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

export default async function Search({ searchParams }) {
  const metaManualAndFilterSearchResult = await fetchMetaManualAndFilterSearch(
    searchParams
  );

  return (
    <main className="max-w-7xl mx-auto mb-24 customSm:px-2">
      <SearchBar />
      <SearchResult results={metaManualAndFilterSearchResult?.results} />
    </main>
  );
}
