import titleHandler from "@/lib/titleHandler";
import GenresBadge from "../GenresBadge";
import InfoPlayAndAddToWatchlist from "./InfoPlayAndAddToWatchlist";
import { FaStar } from "react-icons/fa6";
import ratingHandler from "@/lib/ratingHandler";
import InfoDescription from "./InfoDescription";

export default function Details({ info, type }) {
  return (
    <div className="customSm:mx-2 md:mx-6 lg:mx-0">
      <h1 className="font-bold text-white customSm:text-xl lg:text-4xl">
        {titleHandler(info.title)}
      </h1>
      <div className="flex items-center gap-5 my-5 text-white">
        {!isNaN(info.rating) && (
          <div className="flex items-center gap-2 text-lg">
            <div>
              <FaStar className="text-[#e8b647] text-xl" />
            </div>
            <div className="text-base font-medium">
              {ratingHandler(info.rating)}
            </div>
          </div>
        )}
        <GenresBadge genres={info.genres} />
      </div>
      <InfoDescription description={info.description} maxLength={300} />
      <div className="text-yellow-500 font-semibold my-2">
        {type ? (
          <div className="flex items-center gap-5">
            <div>{info.releaseDate}</div>
            <span>{info.type}</span>
            <div>{info.duration}</div>
          </div>
        ) : (
          <div className={`flex items-center ${info.releaseDate && "gap-3"}`}>
            <span>{info.releaseDate}</span>
            <span>{info.status}</span>
          </div>
        )}
      </div>
      <InfoPlayAndAddToWatchlist info={info} />
    </div>
  );
}
