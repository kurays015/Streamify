import { movies } from "@/lib/constants";
import { AnimeSlider } from "../CardCarousel";

async function getTrendingMovies() {
  try {
    const moviesHd = new movies.FlixHQ();
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
    <div className="max-w-7xl mx-auto mt-16 mb-5">
      <h1 className="text-2xl text-amber-300 text-start mb-5 font-semibold">
        Trending Today
      </h1>
      <AnimeSlider data={trendingMovies} />
    </div>
  );
}
