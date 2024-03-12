import { CardCarousel } from "../../CardCarousel";

export default async function TopRatedMovies() {
  const res = await fetch(
    `${process.env.TMDB_BASE_URL}/3/movie/top_rated?api_key=${process.env.API_KEY}`
  );
  if (!res.ok) {
    throw new Error("Error fetching top rated movies.");
  }
  const data = await res.json();
  return (
    <div className="mt-16 mb-5 customSm:px-2">
      <h1 className="text-3xl text-lime-300 text-start mb-5 font-semibold customSm:text-2xl lg:text-3xl">
        Top Rated Movies
      </h1>
      <CardCarousel data={data.results} />
    </div>
  );
}
