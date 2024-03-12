import { CardCarousel } from "../../CardCarousel";

export default async function TopRatedTVSeries() {
  const res = await fetch(
    `${process.env.TMDB_BASE_URL}/3/tv/top_rated?api_key=${process.env.API_KEY}`
  );
  if (!res.ok) {
    throw new Error("Error fetching top rated series.");
  }
  const data = await res.json();
  return (
    <div className="mt-16 mb-5 customSm:px-2">
      <h1 className="text-3xl text-sky-300 text-start mb-5 font-semibold customSm:text-2xl lg:text-3xl ">
        Top Rated TV Series
      </h1>
      <CardCarousel data={data.results} />
    </div>
  );
}
