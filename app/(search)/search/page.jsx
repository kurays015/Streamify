import siteMetadata from "@/config/site-metadata";
import SearchBar from "./searchbar";
import SearchResult from "./search-result";
import { Suspense } from "react";
import PikachuLoading from "@/components/skeletons/PikachuLoading";
import SearchBadges from "./search-badges";

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
    <main className="text-white max-w-7xl mx-auto mb-24 px-4 md:px-6">
      <SearchBar />
      <div className="flex flex-wrap items-center gap-4 my-8">
        {Object.entries(searchParams).length > 1 && (
          <>
            <h1 className="font-semibold customSm:text-xl  lg:text-3xl">
              Search Results
            </h1>
            <SearchBadges searchParams={searchParams} />
          </>
        )}
      </div>
      <Suspense
        key={JSON.stringify(searchParams)}
        fallback={<PikachuLoading />}
      >
        <SearchResult searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
