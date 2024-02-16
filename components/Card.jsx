import titleHandler from "@/lib/titleHandler";
import Image from "next/image";

export default function Card({ image, title, episodeTitle, coverImage }) {
  return (
    <div>
      <div className="overflow-hidden rounded-lg relative group">
        <Image
          src={image ? image : coverImage}
          alt={titleHandler(title)}
          width={500}
          height={500}
          priority
          className="w-full hover:scale-105 transition-all customSm:h-[200px] md:h-[250px] lg:h-[300px]"
        />
      </div>
      <h1 className="text-center text-white font-semibold text-ellipsis overflow-hidden whitespace-nowrap w-full mt-2 customSm:text-sm lg:text-base">
        {titleHandler(title)}
      </h1>
      {episodeTitle && (
        <div className="absolute bottom-10 left-3 bg-red-500 text-white text-xs font-semibold p-2 rounded md">
          {episodeTitle}
        </div>
      )}
    </div>
  );
}
