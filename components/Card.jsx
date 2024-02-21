import titleHandler from "@/lib/titleHandler";
import tmdbImgHandler from "@/lib/tmdbImg";
import Image from "next/image";

export default function Card({
  image,
  title,
  episodeTitle,
  poster_path,
  name,
}) {
  return (
    <div>
      <div className="overflow-hidden rounded-lg relative group">
        <Image
          src={image ? image : tmdbImgHandler(poster_path)}
          alt={titleHandler(title ? title : name)}
          width={500}
          height={500}
          priority
          className="text-white w-full hover:scale-105 transition-all customSm:h-[300px] "
        />
      </div>
      <h1 className="text-center text-white font-semibold text-ellipsis overflow-hidden whitespace-nowrap w-full mt-2 customSm:text-sm lg:text-base">
        {titleHandler(title ? title : name)}
      </h1>
      {episodeTitle && (
        <div className="absolute bottom-10 left-3 bg-red-500 text-white text-xs font-semibold p-2 rounded md">
          {episodeTitle}
        </div>
      )}
    </div>
  );
}
