import { CardCarousel } from "../CardCarousel";

export default async function TestComponent() {
  const res = await fetch(
    `${process.env.TMDB_BASE_URL}/3/movie/popular?api_key=${process.env.API_KEY}`,
    {
      cache: "no-store",
    }
  );
  const movies = await res.json();

  return (
    <div>
      <h1 className="text-white">
        This is a Test Component for data blur and suspense!
      </h1>
      {/* <div className="grid grid-cols-4 gap-6"> */}
      {/* {movies.results.map(movie => (
          <div key={movie.id} className="col-span-4 lg:col-span-1">
            <Card {...movie} />
          </div>
        ))} */}
      <CardCarousel data={movies.results} />
      {/* </div> */}
    </div>
  );
}
