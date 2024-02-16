import { Button } from "./ui/button";
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";

import Link from "next/link";
import GenresBadge from "./GenresBadge";

export default function TrendingCarouselContent({
  id,
  title,
  description,
  releaseDate,
  genres,
  index,
}) {
  const watchPath = id.split("/");

  return (
    <div className="absolute py-5 w-full customSm:left-0 customSm:bottom-0 customSm:max-w-full customSm:px-5 lg:top-1/4 lg:left-0 lg:max-w-3xl xl:left-[17%] xl:px-0">
      <div>
        <h1
          className={`${
            index % 2 === 0 ? "text-[#ffe57f]" : "text-[#7B8FFC]"
          }  font-bold customSm:text-xl lg:text-5xl`}
        >
          {title}
        </h1>
        <div className="font-semibold text-slate-200 text-base my-6 customSm:my-3">
          <p className="mb-2 customSm:text-xs">{releaseDate}</p>
          <GenresBadge genres={genres} />
        </div>
        <p className="text-gray-300 font-medium customSm:text-xs lg:text-xl">
          {description}
        </p>
        <div className="flex items-center gap-3 my-5">
          <Link href={`/watch/${watchPath[0]}/${watchPath[1]}`}>
            <Button
              variant="secondary"
              className="font-semibold hover:scale-105 transition-all customSm:text-sm customSm:py-3 customSm:px-5 lg:text-xl lg:py-6 lg:px-12"
            >
              <FaPlay className="text-lg mr-1" />
              <span>Play</span>
            </Button>
          </Link>

          <Link href={`/movie-series/${id}`}>
            <Button
              variant="outline"
              className="text-white font-semibold hover:text-white hover:scale-105 transition-all customSm:text-sm customSm:py-3 customSm:px-5 lg:text-xl lg:py-6 lg:px-12"
            >
              <IoIosInformationCircleOutline className="mr-1 customSm:text-lg lg:text-2xl" />
              <span>More Info</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
