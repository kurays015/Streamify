import titleHandler from "@/lib/titleHandler";
import GenresBadge from "../GenresBadge";
import InfoPlayAndAddToWatchlist from "./InfoPlayAndAddToWatchlist";
import { FaStar } from "react-icons/fa6";
import ratingHandler from "@/lib/ratingHandler";
import InfoDescription from "./InfoDescription";

export default function Details({ infoData, type }) {
  return (
    <div>
      <h1 className="font-bold text-4xl text-white">
        {titleHandler(infoData.title)}
      </h1>
      <div className="flex items-center gap-5 my-5 text-white">
        {infoData.rating && (
          <div className="flex items-center gap-2 text-lg">
            <div>
              <FaStar className="text-[#e8b647] text-xl" />
            </div>
            <div className="text-base font-medium">
              {ratingHandler(infoData.rating)}
            </div>
          </div>
        )}
        <GenresBadge genres={infoData.genres} />
      </div>
      <InfoDescription description={infoData.description} maxLength={300} />
      <div className="text-yellow-500 font-semibold my-2">
        {type ? (
          <div className="flex items-center gap-3">
            <div>{infoData.releaseDate}</div>
            <span>-</span>
            <div>{infoData.duration}</div>
          </div>
        ) : (
          <div
            className={`flex items-center ${infoData.releaseDate && "gap-3"}`}
          >
            <span>{infoData.releaseDate}</span>
            <span>{infoData.status}</span>
          </div>
        )}
      </div>
      <InfoPlayAndAddToWatchlist chapters={infoData.chapters} />
    </div>
  );
}
