import getImageBase64 from "@/lib/base64";
import titleHandler from "@/lib/titleHandler";
import tmdbImgHandler from "@/lib/tmdbImg";
import watchType from "@/lib/watchType";
import Image from "next/image";
import Link from "next/link";
import getSeasonNumber from "@/lib/getSeasonNumber";

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

  if (!episodesPerSeasons.episodes)
    return (
      <div className="mt-12 text-center text-gray-300">
        No episodes at the moment
      </div>
    );

  const episodesWithImages = await Promise.all(
    episodesPerSeasons.episodes.map(async ({ still_path, ...episode }) => {
      const imageUrl = tmdbImgHandler(still_path || info.backdrop_path);
      const { base64, img } = await getImageBase64(imageUrl);
      return { ...episode, base64, img };
    })
  );

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 text-white max-h-[700px] overflow-auto scrollbar-gray w-full mt-8">
      {episodesWithImages.map(
        ({ id, season_number, episode_number, name, base64, img }) => (
          <Link
            key={id}
            href={`/embedded/${titleHandler(
              info.title ? info.title : info.name
            )}/${info.id}${
              info.name
                ? `?season=${season_number}&episode=${episode_number}&type=${watchType(
                    info
                  )}`
                : ""
            }`}
          >
            <div className="relative">
              <div className="absolute top-2 left-2 font-bold bg-gray-800 bg-opacity-75 px-2 py-1 rounded customSm:text-sm lg:text-lg">
                S{season_number}-E{episode_number}
              </div>
              <Image
                {...img}
                className="w-full h-[140px] rounded-lg"
                alt={name}
                blurDataURL={base64}
                placeholder="blur"
                width={300}
                height={300}
              />
            </div>
          </Link>
        )
      )}
    </div>
  );
}
