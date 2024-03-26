import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import CardCarouselSkeleton from "@/components/skeletons/CardCarouselSkeleton";
import CardCarouselContainer from "@/components/CardCarouselContainer";
import TrendingMoviesCarousel from "@/components/trending-carousel/TrendingMoviesCarousel";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto">
      <Suspense
        fallback={
          <Skeleton className=" w-full m-2 customSm:h-48 customSm:mb-12 lg:mb-0 lg:h-96" />
        }
      >
        <TrendingMoviesCarousel />
      </Suspense>
      <Suspense fallback={<CardCarouselSkeleton />}>
        <CardCarouselContainer />
      </Suspense>
    </main>
  );
}
