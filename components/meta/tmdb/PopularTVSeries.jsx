import { CardCarousel } from "../../CardCarousel";

async function getPopularTVSeries() {
  try {
    const res = await fetch(
      `${process.env.TMDB_BASE_URL}/3/tv/popular?api_key=${process.env.API_KEY}`
    );
    if (!res.ok) {
      throw new Error("Error fetching popular movies.");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export default async function PopularTVSeries() {
  const popularTVSeries = await getPopularTVSeries();
  return (
    <div className="mt-16 mb-5 customSm:px-2">
      <h1 className="text-3xl text-teal-300 text-start mb-5 font-semibold customSm:text-2xl lg:text-3xl ">
        Popular TV Series
      </h1>
      <CardCarousel data={popularTVSeries?.results} />
    </div>
  );
}
