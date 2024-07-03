import MetaSearch from "@/components/MetaSearch";
import { FilterSearchBadge } from "@/components/meta/filter-search/FilterSearchBadge";
import SearchBar from "@/components/meta/filter-search/SearchBar";
import PikachuLoading from "@/components/skeletons/PikachuLoading";
import siteMetadata from "@/config/site-metadata";
import { Suspense } from "react";

export function generateMetadata({ searchParams }) {
  const { query } = searchParams;

  return {
    metadataBase: new URL(siteMetadata.siteUrl),
    title: `${query ? `Search Results for ${query}` : "Search"}`,
    description: `Search Results for ${query}`,
    alternates: {
      canonical: `/search?query=${query}`,
    },
    openGraph: {
      images: [
        {
          url: "/kofi.webp",
          width: 800,
          height: 600,
          alt: "Streamify",
        },
        {
          url: "/kofi.webp",
          width: 1800,
          height: 1600,
          alt: "Streamify",
        },
      ],
      url: `/search?query=${query}`,
      type: "website",
    },
  };
}

export default async function Search({ searchParams }) {
  const hasSearchParams = Object.values(searchParams).length;
  return (
    <main className="max-w-7xl mx-auto mb-24 customSm:px-2">
      <SearchBar />
      {hasSearchParams > 0 && <FilterSearchBadge searchParams={searchParams} />}
      <Suspense
        key={JSON.stringify(searchParams)}
        fallback={<PikachuLoading />}
      >
        <MetaSearch searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
