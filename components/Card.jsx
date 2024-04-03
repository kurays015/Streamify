import titleHandler from "@/lib/titleHandler";
import tmdbImgHandler from "@/lib/tmdbImg";
import Image from "next/image";

export default function Card({
  image,
  poster_path,
  thumbnail,
  title,
  episodeTitle,
  episodeNumber,
  name,
  list,
}) {
  const imageUrl = image
    ? image
    : thumbnail
    ? thumbnail
    : tmdbImgHandler(poster_path);

  const recentEpisode = episodeTitle ? episodeTitle : episodeNumber;

  return (
    <div>
      <div className="overflow-hidden rounded-lg relative group">
        <Image
          src={imageUrl}
          alt={titleHandler(title ? title : name)}
          width={500}
          height={500}
          priority
          className={`text-white w-full hover:scale-105 transition-all object-cover ${
            list ? "h-auto w-auto" : "customSm:h-[300px]"
          }`}
        />
      </div>
      <h1 className="text-center text-white font-semibold text-ellipsis overflow-hidden whitespace-nowrap w-full mt-2 customSm:text-sm lg:text-base">
        {titleHandler(title ? title : name)}
      </h1>
      {recentEpisode && (
        <div className="absolute bottom-10 left-3 bg-red-500 text-white text-xs font-semibold p-2 rounded md">
          {episodeTitle ? episodeTitle : `Episode ${episodeNumber}`}
        </div>
      )}
    </div>
  );
}
