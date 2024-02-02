import { movies } from "@/lib/constants";
import { AnimeSlider } from "../CardCarousel";

async function getRecentTvShows() {
  try {
    const moviesHd = new movies.FlixHQ();
    const recentTvShows = await moviesHd.fetchRecentTvShows();
    if (!recentTvShows) {
      throw new Error("Error fetching recent tv shows.");
    }
    return recentTvShows;
  } catch (error) {
    console.log(error);
  }
}

export default async function RecentTvShows() {
  const recentTvShows = await getRecentTvShows();
  return (
    <div className="max-w-7xl mx-auto mt-16 mb-5">
      <h1 className="text-2xl text-teal-300 text-start mb-5 font-semibold">
        Recent TV Shows
      </h1>
      <AnimeSlider data={recentTvShows} />
    </div>
  );
}
