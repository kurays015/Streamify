import { CardCarousel } from "../../CardCarousel";

export default async function AnilistPopular() {
  const res =
    await fetch(`${process.env.SOURCE_URL1}/meta/anilist/popular?perPage=20
    `);
  if (!res.ok) {
    throw new Error("Error fetching anilist popular.");
  }
  const data = await res.json();

  return (
    <div className="mt-16 mb-5 customSm:px-2">
      <h1 className="text-3xl text-violet-300 text-start mb-5 font-semibold customSm:text-2xl lg:text-3xl">
        Popular Anime
      </h1>
      <CardCarousel data={data.results} />
    </div>
  );
}
