// import MetaSearch from "@/components/MetaSearch";
// import { FilterSearchBadge } from "@/components/meta/filter-search/FilterSearchBadge";
// import SearchBar from "@/components/meta/filter-search/SearchBar";
// import PikachuLoading from "@/components/skeletons/PikachuLoading";
import siteMetadata from "@/config/site-metadata";
// import { Suspense } from "react";

export function generateMetadata({ searchParams }) {
  const { query } = searchParams;

  return {
    metadataBase: new URL(siteMetadata.siteUrl),
    title: `${query ? `Search Results for ${query}` : "Search"}`,
    description: `Search Results for ${query}`,
  };
}

export default async function Search({ searchParams }) {
  return (
    <main className="max-w-7xl mx-auto mb-24 customSm:px-2">
      <h1>Search</h1>
      {/* <SearchBar />
      {hasSearchParams > 0 && <FilterSearchBadge searchParams={searchParams} />}
      <Suspense
        key={JSON.stringify(searchParams)}
        fallback={<PikachuLoading />}
      >
        <MetaSearch searchParams={searchParams} />
      </Suspense> */}
    </main>
  );
}
