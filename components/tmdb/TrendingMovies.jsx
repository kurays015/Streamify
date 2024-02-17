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
    <div className="max-w-7xl mx-auto mt-16 mb-5 relative customSm:mt-0 customSm:px-2 lg:mt-48">
      <h1 className="text-amber-300 text-start mb-5 font-semibold customSm:text-2xl lg:text-3xl ">
        Trending Today
      </h1>
      <CardCarousel data={trendingMovies} />
    </div>
  );
}
