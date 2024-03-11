import { Skeleton } from "@/components/ui/skeleton";
import { CardCarousel } from "../../CardCarousel";
import { Suspense } from "react";

async function UpcomingMoviesResult() {
  try {
    const res = await fetch(
      `${process.env.TMDB_BASE_URL}/3/movie/upcoming?api_key=${process.env.API_KEY}`
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

export default function UpcomingMovies() {
  return (
    <div className="mt-16 mb-5 customSm:px-2">
      <h1 className="text-3xl text-orange-300 text-start mb-5 font-semibold customSm:text-2xl lg:text-3xl">
        Upcoming Movies
      </h1>
      <Suspense fallback={<Skeleton className="h-[300px]" />}>
        <UpcomingMoviesResult />
      </Suspense>
    </div>
  );
}
