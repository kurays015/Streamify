import { CardCarousel } from "../CardCarousel";

async function getTopAiring() {
  try {
    const res = await fetch(`${process.env.API_BASE_URL}/top-airing`);
    if (!res.ok) {
      throw new Error("Error fetching top airing.");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export default async function TopAiring() {
  const topAiring = await getTopAiring();

  return (
    <div className="max-w-7xl mx-auto mt-16 mb-5">
      <h1 className="text-3xl text-topAiring text-start mb-5 font-semibold">
        Top Airing Anime
      </h1>
      <CardCarousel data={topAiring?.results} />
    </div>
  );
}
