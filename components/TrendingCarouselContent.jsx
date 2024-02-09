import { Button } from "./ui/button";
import { FaPlay } from "react-icons/fa";
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
    <div className="absolute top-1/4 left-[17%] max-w-3xl py-5 w-full">
      <div>
        <h1
          className={`${
            index % 2 === 0 ? "text-[#FFE57F]" : "text-[#7B8FFC]"
          } text-5xl font-bold`}
        >
          {title}
        </h1>
        <div className="font-semibold text-slate-200 text-base my-6">
          <p className="mb-2">{releaseDate}</p>
          <GenresBadge genres={genres} />
        </div>
        <p className="text-gray-300 text-xl font-medium">{description}</p>
        <div className="flex items-center gap-3 my-5">
          <Link href={`/watch/${watchPath[0]}/${watchPath[1]}`}>
            <Button
              variant="secondary"
              className="text-xl font-semibold py-6 px-10 hover:scale-105 transition-all"
            >
              <FaPlay className="text-lg mr-1" />
              <span>Play</span>
            </Button>
          </Link>

          <Link href={`/movie-series/${id}`}>
            <Button
              variant="outline"
              className="text-white text-xl font-semibold py-6 px-12 hover:text-white hover:scale-105 transition-all"
            >
              More Info
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
