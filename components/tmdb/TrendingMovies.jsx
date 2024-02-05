import { movies } from "@/lib/constants";
import { CardCarousel } from "../CardCarousel";

async function getTrendingMovies() {
  try {
    const moviesHd = new movies.MovieHdWatch();
    const trending = await moviesHd.fetchTrendingMovies();
    if (!trending) {
      throw new Error("Error fetching trending movies.");
    }
    return trending;
  } catch (error) {
    console.log(error);
  }
}

export default async function TrendingMovies() {
  const trendingMovies = await getTrendingMovies();
  return (
    <div className="max-w-7xl mx-auto mt-16 mb-5 relative">
      <h1 className="text-3xl text-amber-300 text-start mb-5 font-semibold">
        Trending Today
      </h1>
      <CardCarousel data={trendingMovies} />
    </div>
  );
}
