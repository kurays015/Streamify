import { movies } from "@/lib/constants";
import { Card, CardCarousel } from "../CardCarousel";

async function getRecentMovies() {
  try {
    const moviesHd = new movies.MovieHdWatch();
    const recent = await moviesHd.fetchRecentMovies();
    if (!recent) {
      throw new Error("Error fetching recent movies.");
    }
    return recent;
  } catch (error) {
    console.log(error);
  }
}

export default async function RecentMovies() {
  const recentMovies = await getRecentMovies();
  return (
    <div className="max-w-7xl mx-auto mt-16 mb-5 customSm:px-2">
      <h1 className="text-3xl text-violet-300 text-start mb-5 font-semibold customSm:text-2xl lg:text-3xl">
        Recent Movies
      </h1>
      <CardCarousel data={recentMovies} />
    </div>
  );
}
