import SearchResult from "./meta/filter-search/SearchResult";

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
    ? `${process.env.SOURCE_URL1}/meta/${providerName}/${query}`
    : `${process.env.SOURCE_URL1}/meta/anilist/advanced-search?${allQueryParams}`;

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

export default async function MetaSearch({ searchParams }) {
  const metaManualAndFilterSearchResult = await fetchMetaManualAndFilterSearch(
    searchParams
  );

  return (
    <div>
      <SearchResult
        results={metaManualAndFilterSearchResult?.results}
        searchParams={searchParams}
      />
    </div>
  );
}
