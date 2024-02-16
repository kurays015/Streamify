import { CardCarousel } from "../CardCarousel";

async function getTrending() {
  try {
    const res = await fetch(`${process.env.SUGOI_PRIVATE_URL}/trending
    `);

    if (!res.ok) {
      throw new Error("Error fetching trending.");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export default async function popular() {
  const trending = await getTrending();
  return (
    <div className="max-w-7xl mx-auto mt-16 mb-5 customSm:px-2">
      <h1 className="text-3xl text-trending text-start mb-5 font-semibold customSm:text-2xl lg:text-3xl">
        Trending Anime
      </h1>
      <CardCarousel data={trending?.results} />
    </div>
  );
}
