import { Suspense } from "react";
import { CardCarousel } from "../../CardCarousel";
import { Skeleton } from "@/components/ui/skeleton";

async function AnilistTrending() {
  try {
    const res =
      await fetch(`${process.env.SOURCE_URL1}/meta/anilist/trending?perPage=20
    `);

    if (!res.ok) {
      throw new Error("Error fetching trending.");
    }
    const data = await res.json();
    return <CardCarousel data={data.results} />;
  } catch (error) {
    console.log(error);
  }
}

export default function popular() {
  return (
    <div className="mt-16 mb-5 customSm:px-2">
      <h1 className="text-3xl text-trending text-start mb-5 font-semibold customSm:text-2xl lg:text-3xl">
        Trending Anime
      </h1>
      <Suspense fallback={<Skeleton className="h-[300px]" />}>
        <AnilistTrending />
      </Suspense>
    </div>
  );
}
