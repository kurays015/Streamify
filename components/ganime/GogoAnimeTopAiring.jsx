import { CardCarousel } from "../CardCarousel";

async function getTopAiring() {
  try {
    const res = await fetch(
      `${process.env.SOURCE_URL6}/anime/gogoanime/top-airing`
    );
    if (!res.ok) {
      throw new Error("Error fetching gogoanime top airing.");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export default async function TopAiring() {
  const topAiring = await getTopAiring();
  return (
    <div className="mt-16 mb-5 customSm:px-2">
      <h1 className="text-3xl text-recent text-start mb-5 font-semibold customSm:text-2xl lg:text-3xl">
        Top Airing
      </h1>
      <CardCarousel data={topAiring?.results} />
    </div>
  );
}
