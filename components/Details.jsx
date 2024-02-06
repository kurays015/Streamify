import titleHandler from "@/lib/titleHandler";
import GenresBadge from "./GenresBadge";
import InfoPlayAndAddToWatchlist from "./InfoPlayAndAddToWatchlist";
import { FaStar } from "react-icons/fa6";

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
            <div className="text-base font-medium">{infoData.rating}</div>
          </div>
        )}
        <GenresBadge genres={infoData.genres} />
      </div>
      <p className="text-gray-300 text-lg leading-8 font-medium max-w-2xl">
        {infoData.description}
      </p>
      <div className="text-yellow-500 flex items-center gap-3 font-semibold my-2">
        {type ? (
          <>
            <div>{infoData.releaseDate}</div>
            <span>-</span>
            <div>{infoData.duration}</div>
          </>
        ) : (
          <>
            <span>{infoData.releaseDate}</span>
            <span>{infoData.status}</span>
          </>
        )}
      </div>
      <InfoPlayAndAddToWatchlist />
    </div>
  );
}
