import { Button } from "./ui/button";
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import Link from "next/link";

export default function TrendingCarouselContent({
  id,
  title,
  name,
  overview,
  release_date,
  first_air_date,
  media_type,
  index,
}) {
  return (
    <div className="absolute py-5 w-full customSm:left-0 customSm:bottom-0 customSm:max-w-full customSm:px-5 lg:top-1/4 lg:left-0 lg:max-w-3xl xl:left-[17%] xl:px-0">
      <div>
        <h1
          className={`${
            index % 2 === 0 ? "text-[#ffe57f]" : "text-[#7B8FFC]"
          }  font-bold customSm:text-xl lg:text-5xl`}
        >
          {title ? title : name}
        </h1>
        <div className="flex items-center gap-3 font-semibold text-yellow-500 customSm:my-3 customSm:text-xs lg:text-base lg:mt-6 lg:mb-2">
          <div>{release_date ? release_date : first_air_date}</div>
          <div>{media_type.charAt(0).toUpperCase() + media_type.slice(1)}</div>
        </div>
        <p className="text-gray-300 font-medium customSm:text-xs md:text-sm lg:text-xl">
          {overview}
        </p>
        <div className="flex items-center gap-3 my-5">
          <Link href={`/embedded/?type=${media_type === "movie" && "Movie"}`}>
            <Button
              variant="secondary"
              className="font-semibold hover:scale-105 transition-all customSm:text-sm customSm:py-3 customSm:px-5 lg:text-xl lg:py-6 lg:px-12"
            >
              <FaPlay className="text-lg mr-1" />
              <span>Play</span>
            </Button>
          </Link>
          <Link
            href={`info/${id}?providerId=tmdb&tmdbParams=${
              name ? "tv" : "movie"
            }`}
          >
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
