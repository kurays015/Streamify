import { CardCarousel } from "@/components/CardCarousel";

export default async function PopularMovies() {
  const popular = await getPopularMovies();
  return (
    <div className="mt-16 mb-5 relative customSm:mt-0 customSm:px-2 lg:mt-48">
      <h1 className="text-amber-300 text-start mb-5 font-semibold customSm:text-2xl lg:text-3xl ">
        Popular Movies
      </h1>
      <CardCarousel data={popular?.results} />
    </div>
  );
}

async function getPopularMovies() {
  try {
    const res = await fetch(
      `${process.env.TMDB_BASE_URL}/3/movie/popular?api_key=${process.env.API_KEY}`
    );
    if (!res.ok) {
      throw new Error("Error fetching popular movies.");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
}
