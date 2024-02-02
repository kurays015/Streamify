import { CardCarousel } from "../CardCarousel";

async function getTrending() {
  try {
    const res = await fetch(`${process.env.META_URL}/trending?page=1&perPage=20
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
    <div className="max-w-7xl mx-auto mt-16 mb-5">
      <h1 className="text-2xl text-trending text-start mb-5 font-semibold">
        Trending Anime
      </h1>
      <CardCarousel data={trending?.results} />
    </div>
  );
}