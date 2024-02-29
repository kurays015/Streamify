import { TrendingCarousel } from "../TrendingCarousel";

async function getTrending() {
  try {
    const res = await fetch(
      `${process.env.TMDB_BASE_URL}/3/trending/movie/day?api_key=${process.env.API_KEY}`
    );
    if (!res.ok) {
      throw new Error("Error fetching trending movies.");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export default async function TrendingMoviesCarousel() {
  const trending = await getTrending();
  return (
    <div>
      <TrendingCarousel data={trending?.results} />
    </div>
  );
}
