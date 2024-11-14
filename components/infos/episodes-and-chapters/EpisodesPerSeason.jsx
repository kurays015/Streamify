import getImageBase64 from "@/lib/base64";
import titleHandler from "@/lib/titleHandler";
import tmdbImgHandler from "@/lib/tmdbImg";
import watchType from "@/lib/watchType";
import Image from "next/image";
import Link from "next/link";

async function getSeasons(id, searchParams) {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/tv/${id}/season/${
        searchParams?.season ?? "0"
      }?api_key=5e8b9e4f3d246ecf770aa76bb470e4c8`
    );
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export default async function EpisodesPerSeason({ info, searchParams }) {
  const episodesPerSeasons = await getSeasons(info.id, searchParams);

  const episodesPerSeasonsWithBase64 = await Promise.all(
    episodesPerSeasons.episodes.map(async episode => {
      const { base64, img } = await getImageBase64(
        tmdbImgHandler(episode.still_path)
      );
      return { ...episode, base64, img };
    })
  );

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 text-white max-h-[700px] overflow-auto scrollbar-gray w-full mt-8">
      {episodesPerSeasonsWithBase64?.map(
        ({
          id,
          season_number,
          episode_number,
          still_path,
          name,
          img,
          base64,
        }) => (
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
                className="w-full h-[140px] rounded-lg"
                alt={name}
                {...img}
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
