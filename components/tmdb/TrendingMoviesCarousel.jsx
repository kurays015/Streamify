import { movies } from "@/lib/constants";
import { TrendingCarousel } from "../TrendingCarousel";

async function getTrendingMovies() {
  try {
    const moviesHd = new movies.MovieHdWatch();
    const trending = await moviesHd.fetchTrendingMovies();
    if (!trending) {
      throw new Error("Error fetching trending carousel data.");
    }
    return trending;
  } catch (error) {
    console.log(error);
  }
}

async function getTrendingCarouselData() {
  try {
    const trendings = await getTrendingMovies();
    const moviesHd = new movies.MovieHdWatch();

    const trendingData = trendings.map(async trending => {
      const { id, title, cover, description, releaseDate, genres } =
        await moviesHd.fetchMediaInfo(trending.id);
      return {
        id,
        title,
        cover,
        title,
        description,
        releaseDate,
        genres,
      };
    });

    const trendingCarouselData = await Promise.all(trendingData);

    return trendingCarouselData;
  } catch (error) {
    console.log(error);
  }
}

export async function TrendingCarouselContent() {
  const carouselData = await getTrendingCarouselData();
  return <div className="text-white text-3xl max-w-7xl mx-auto"></div>;
}

export async function TrendingMoviesCarousel() {
  const carouselData = await getTrendingCarouselData();
  return (
    <div>
      <TrendingCarousel data={carouselData} />
    </div>
  );
}
