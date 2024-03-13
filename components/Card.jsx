import getImageBase64Async from "@/lib/base64";
import titleHandler from "@/lib/titleHandler";
import tmdbImgHandler from "@/lib/tmdbImg";
import Image from "next/image";

export default async function Card({
  image,
  title,
  episodeTitle,
  episodeNumber,
  poster_path,
  name,
}) {
  const imageUrl = image ? image : tmdbImgHandler(poster_path);
  const recentEpisode = episodeTitle ? episodeTitle : episodeNumber;

  // const blurURL = await getImageBase64Async(imageUrl);

  return (
    <div>
      <div className="overflow-hidden rounded-lg relative group">
        <Image
          src={imageUrl}
          alt={titleHandler(title ? title : name)}
          width={500}
          height={500}
          priority
          className="text-white w-full hover:scale-105 transition-all customSm:h-[300px] "
          // placeholder="blur"
          // blurDataURL={blurURL && blurURL}
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
