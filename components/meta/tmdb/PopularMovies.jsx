import Card from "@/components/Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
import infoUrl from "@/lib/infoUrl";
import { unstable_noStore } from "next/cache";
import Link from "next/link";
import { Suspense } from "react";

// async function getPopularMovies() {
//   try {
//     const res = await fetch(
//       `${process.env.TMDB_BASE_URL}/3/movie/popular?api_key=${process.env.API_KEY}`
//     );
//     if (!res.ok) {
//       throw new Error("Error fetching popular movies.");
//     }
//     return res.json();
//   } catch (error) {
//     console.log(error);
//   }
// }

async function PopularMoviesResult() {
  unstable_noStore();
  const res = await fetch(
    `${process.env.TMDB_BASE_URL}/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const data = await res.json();

  return (
    <Carousel
      className="w-full lg:max-w-7xl mx-auto relative group z-50"
      opts={{ dragFree: true, loop: false }}
    >
      <CarouselContent className="-ml-1 flex customSm:gap-1 lg:gap-2">
        {data.results.map(result => (
          <CarouselItem
            key={result.id}
            className="pl-1 relative customSm:basis-1/2 customSemiMd:basis-1/3 customSemiMd2:basis-1/4 md:basis-1/5 lg:basis-1/6"
          >
            <Link href={infoUrl(result)}>
              <Card {...result} />
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default async function PopularMovies() {
  // const popular = await getPopularMovies();
  return (
    <div className="mt-16 mb-5 relative customSm:mt-0 customSm:px-2 lg:mt-48">
      <h1 className="text-amber-300 text-start mb-5 font-semibold customSm:text-2xl lg:text-3xl ">
        Popular Movies
      </h1>
      <Suspense fallback={<Skeleton className="h-[300px]" />}>
        <PopularMoviesResult />
      </Suspense>
      {/* <CardCarousel data={popular?.results} /> */}
    </div>
  );
}
