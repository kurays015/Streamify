import { CardCarousel } from "../CardCarousel";

async function getRecentEpisodes() {
  try {
    const res = await fetch(`${process.env.GOGO_ANIME_URL}/recent-episodes
    `);
    if (!res.ok) {
      throw new Error("Error fetching recent episodes.");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export default async function RecentEpisodes() {
  const recentEpisodes = await getRecentEpisodes();
  return (
    <div className="max-w-7xl mx-auto mt-16 mb-5">
      <h1 className="text-3xl text-recent text-start mb-5 font-semibold">
        Recent Anime Episodes
      </h1>
      <CardCarousel data={recentEpisodes?.results} />
    </div>
  );
}
