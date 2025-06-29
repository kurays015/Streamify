import Link from "next/link";
import getSeasonNumber from "@/lib/getSeasonNumber";
import Image from "next/image";
import tmdbImgHandler from "@/lib/tmdbImg";
import EpisodesLink from "./EpisodesLink";

async function getSeasons(id) {
  const seasonNumber = getSeasonNumber();
  try {
    const res = await fetch(
      `${process.env.TMDB_BASE_URL}/3/tv/${id}/season/${seasonNumber}?api_key=${process.env.API_KEY}`
    );

    if (!res.ok) throw new Error("Error fetching episodes per season.");

    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export default async function EpisodesPerSeason({ info }) {
  const episodesPerSeasons = await getSeasons(info.id);

  if (!episodesPerSeasons || !episodesPerSeasons.episodes?.length)
    return (
      <div className="mt-12 text-center text-gray-300">
        No episodes at the moment
      </div>
    );

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 text-white max-h-[700px] overflow-auto scrollbar-gray w-full mt-8">
      {episodesPerSeasons.episodes.map(episodes => (
        <EpisodesLink {...episodes} key={episodes.id} info={info} />
      ))}
    </div>
  );
}
