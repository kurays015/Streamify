import UpcomingMovies from "@/components/meta/tmdb/UpcomingMovies";
import Footer from "@/components/Footer";
import TrendingMoviesCarousel from "@/components/meta/tmdb/TrendingMoviesCarousel";
import PopularMovies from "@/components/meta/tmdb/PopularMovies";
import TopRatedMovies from "@/components/meta/tmdb/TopRatedMovies";
import PopularTVSeries from "@/components/meta/tmdb/PopularTVSeries";
import TopRatedTVSeries from "@/components/meta/tmdb/TopRatedTVSeries";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import AnilistRecentEpisodes from "@/components/meta/anilist(anime)/RecentEpisodes";
import AnilistTrending from "@/components/meta/anilist(anime)/Trending";
import AnilistPopular from "@/components/meta/anilist(anime)/Popular";

export const runtime = "experimental-edge";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto">
      <Suspense
        fallback={
          <Skeleton className="bg-gradient-to-t from-gray-900 via-gray-900 to-black opacity-75 animate-none absolute inset-0 h-screen w-full" />
        }
      >
        <TrendingMoviesCarousel />
      </Suspense>

      <Suspense fallback={<PopularMoviesSkeleton />}>
        <PopularMovies />
      </Suspense>

      <Suspense fallback={<GridSkeleton />}>
        <UpcomingMovies />
      </Suspense>

      <Suspense fallback={<GridSkeleton />}>
        <TopRatedMovies />
      </Suspense>

      <Suspense fallback={<GridSkeleton />}>
        <PopularTVSeries />
      </Suspense>

      <Suspense fallback={<GridSkeleton />}>
        <TopRatedTVSeries />
      </Suspense>

      <Suspense fallback={<GridSkeleton />}>
        <AnilistRecentEpisodes />
      </Suspense>

      <Suspense fallback={<GridSkeleton />}>
        <AnilistTrending />
      </Suspense>

      <Suspense fallback={<GridSkeleton />}>
        <AnilistPopular />
      </Suspense>

      <Footer />
    </main>
  );
}

function PopularMoviesSkeleton() {
  return (
    <Skeleton className="h-[300px] w-full mt-16 mb-5 relative customSm:mt-0 customSm:px-2 lg:mt-48" />
  );
}

function GridSkeleton() {
  return <Skeleton className="h-[300px] w-full mt-16 mb-5 customSm:px-2" />;
}
