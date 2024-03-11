import { Skeleton } from "@/components/ui/skeleton";
import { CardCarousel } from "../../CardCarousel";
import { Suspense } from "react";

async function TopRatedTVSeriesResult() {
  try {
    const res = await fetch(
      `${process.env.TMDB_BASE_URL}/3/tv/top_rated?api_key=${process.env.API_KEY}`
    );
    if (!res.ok) {
      throw new Error("Error fetching popular movies.");
    }
    const data = await res.json();
    return <CardCarousel data={data.results} />;
  } catch (error) {
    console.log(error);
  }
}

export default function TopRatedTVSeries() {
  return (
    <div className="mt-16 mb-5 customSm:px-2">
      <h1 className="text-3xl text-sky-300 text-start mb-5 font-semibold customSm:text-2xl lg:text-3xl ">
        Top Rated TV Series
      </h1>
      <Suspense fallback={<Skeleton className="h-[300px]" />}>
        <TopRatedTVSeriesResult />
      </Suspense>
    </div>
  );
}
