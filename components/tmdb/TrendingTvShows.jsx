import { movies } from "@/lib/constants";
import { AnimeSlider } from "../CardCarousel";

async function getTrendingTvShows() {
  try {
    const moviesHd = new movies.FlixHQ();
    const trendingTvShows = await moviesHd.fetchTrendingTvShows();
    if (!trendingTvShows) {
      throw new Error("Error fetching trending movies.");
    }
    return trendingTvShows;
  } catch (error) {
    console.log(error);
  }
}

export default async function TrendingTvShows() {
  const trendingTvShows = await getTrendingTvShows();
  return (
    <div className="max-w-7xl mx-auto mt-16 mb-5">
      <h1 className="text-2xl text-yellow-300 text-start mb-5 font-semibold">
        Trending TV Shows
      </h1>
      <AnimeSlider data={trendingTvShows} />
    </div>
  );
}
