import { TrendingCarousel } from "./TrendingCarousel";

export default async function TrendingMoviesCarousel() {
  const res = await fetch(
    `${process.env.TMDB_BASE_URL}/3/trending/movie/day?api_key=${process.env.API_KEY}`
  );
  if (!res.ok) {
    throw new Error("Error fetching trending movies.");
  }
  const data = await res.json();
  return (
    <div>
      <TrendingCarousel data={data.results} />
    </div>
  );
}
