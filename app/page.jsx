import Footer from "@/components/Footer";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import CardCarouselSkeleton from "@/components/skeletons/CardCarouselSkeleton";
import CardCarouselContainer from "@/components/CardCarouselContainer";
import TrendingMoviesCarousel from "@/components/TrendingMoviesCarousel";

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
      <Suspense fallback={<CardCarouselSkeleton />}>
        <CardCarouselContainer />
      </Suspense>
      <Footer />
    </main>
  );
}
