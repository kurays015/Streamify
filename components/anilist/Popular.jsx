import { CardCarousel } from "../CardCarousel";

async function getPopular() {
  try {
    const res = await fetch(`${process.env.META_URL}/popular?page=1&perPage=20
    `);

    if (!res.ok) {
      throw new Error("Error fetching popular.");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export default async function Popular() {
  const popular = await getPopular();
  return (
    <div className="max-w-7xl mx-auto mt-16 mb-5">
      <h1 className="text-2xl text-violet-300 text-start mb-5 font-semibold">
        Popular Anime
      </h1>
      <CardCarousel data={popular?.results} />
    </div>
  );
}
