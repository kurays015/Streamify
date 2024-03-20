import MetaSearch from "@/components/MetaSearch";
import { FilterSearchBadge } from "@/components/meta/filter-search/FilterSearchBadge";
import SearchBar from "@/components/meta/filter-search/SearchBar";
import SearchSkeleton from "@/components/skeletons/SearchSkeleton";
import { Suspense } from "react";

export default async function Search({ searchParams }) {
  const hasSearchParams = Object.values(searchParams).length;
  return (
    <main className="max-w-7xl mx-auto mb-24 customSm:px-2">
      <SearchBar />
      {hasSearchParams > 0 && <FilterSearchBadge searchParams={searchParams} />}
      <Suspense
        key={JSON.stringify(searchParams)}
        fallback={<SearchSkeleton />}
      >
        <MetaSearch searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
