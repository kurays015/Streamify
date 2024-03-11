import { Skeleton } from "@/components/ui/skeleton";
import { CardCarousel } from "../../CardCarousel";
import { Suspense } from "react";

async function AnilistPopularAnime() {
  try {
    const res =
      await fetch(`${process.env.SOURCE_URL1}/meta/anilist/popular?perPage=20
    `);

    if (!res.ok) {
      throw new Error("Error fetching popular.");
    }
    const data = await res.json();
    return <CardCarousel data={data.results} />;
  } catch (error) {
    console.log(error);
  }
}

export default function Popular() {
  return (
    <div className="mt-16 mb-5 customSm:px-2">
      <h1 className="text-3xl text-violet-300 text-start mb-5 font-semibold customSm:text-2xl lg:text-3xl">
        Popular Anime
      </h1>
      <Suspense fallback={<Skeleton className="h-[300px]" />}>
        <AnilistPopularAnime />
      </Suspense>
    </div>
  );
}
