import Card from "../Card";
import { CardCarousel } from "../CardCarousel";

// const urls = [
//   `${process.env.TMDB_BASE_URL}/3/movie/popular?api_key=${process.env.API_KEY}`,
//   `${process.env.TMDB_BASE_URL}/3/tv/popular?api_key=${process.env.API_KEY}`,
//   `${process.env.SOURCE_URL1}/meta/anilist/popular?perPage=20
//     `,
//   `${process.env.TMDB_BASE_URL}/3/movie/top_rated?api_key=${process.env.API_KEY}`,
// ];

export default async function TestComponent() {
  // const responses = await Promise.all(
  //   urls.map(url => fetch(url, { cache: "no-store" }))
  // );
  // const data = await Promise.all(responses.map(response => response.json()));
  const res = await fetch(
    `${process.env.SOURCE_URL1}/meta/anilist/popular?perPage=20
  `,
    { cache: "no-store" }
  );
  const data = await res.json();

  return (
    <div>
      <h1 className="text-white">Maintenance...</h1>
      {/* <pre className="text-white">{JSON.stringify(data, null, 2)}</pre> */}
      {/* {data.map((d, index) => (
        <CardCarousel data={d.results} key={index} />
      ))} */}
      <div className="grid grid-cols-5">
        {data?.results.map(result => (
          <Card key={result.id} {...result} />
        ))}
      </div>
    </div>
  );
}
