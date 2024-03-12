import { CardCarousel } from "../../CardCarousel";

export default async function AnilistRecentEpisodes() {
  const res =
    await fetch(`${process.env.SOURCE_URL1}/meta/anilist/recent-episodes
`);
  if (!res.ok) {
    throw new Error("Error fetching anilist recent episodes.");
  }
  const data = await res.json();
  return (
    <div className="mt-16 mb-5 customSm:px-2">
      <h1 className="text-3xl text-recent text-start mb-5 font-semibold customSm:text-2xl lg:text-3xl">
        Recent Anime Episodes
      </h1>
      <CardCarousel data={data.results} />
    </div>
  );
}
