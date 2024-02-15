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
          className="w-full h-[300px] hover:scale-105 transition-all"
        />
      </div>
      <h1 className="text-center text-white text-base font-semibold text-ellipsis overflow-hidden whitespace-nowrap w-full mt-2">
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
