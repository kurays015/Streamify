import { CardCarousel } from "../../CardCarousel";

async function getUpcomingMovies() {
  try {
    const res = await fetch(
      `${process.env.TMDB_BASE_URL}/3/movie/upcoming?api_key=${process.env.API_KEY}`
    );
    if (!res.ok) {
      throw new Error("Error fetching popular movies.");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export default async function UpcomingMovies() {
  const upcoming = await getUpcomingMovies();
  return (
    <div className="mt-16 mb-5 customSm:px-2">
      <h1 className="text-3xl text-orange-300 text-start mb-5 font-semibold customSm:text-2xl lg:text-3xl">
        Upcoming Movies
      </h1>
      <CardCarousel data={upcoming.results} />
    </div>
  );
}
