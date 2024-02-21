import titleHandler from "@/lib/titleHandler";
import GenresBadge from "../GenresBadge";
import InfoPlayAndAddToWatchlist from "./InfoPlayAndAddToWatchlist";
import { FaStar } from "react-icons/fa6";
import InfoDescription from "./InfoDescription";

export default function Details({ info }) {
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
              {Math.floor(info.rating * 10) / 10}
            </div>
          </div>
        )}
        <GenresBadge genres={info.genres} />
      </div>
      <div className="flex items-center gap-3 text-yellow-500 font-semibold my-2">
        <div>{info.releaseDate}</div>
        {info.status && <div>{info.status}</div>}
      </div>
      <InfoDescription description={info.description} maxLength={300} />
      <InfoPlayAndAddToWatchlist info={info} />
    </div>
  );
}
