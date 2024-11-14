import titleHandler from "@/lib/titleHandler";
import GenresBadge from "../GenresBadge";
import InfoPlayAndAddToWatchlist from "./InfoPlayAndAddToWatchlist";
import InfoDescription from "./InfoDescription";
import WithAdsMessage from "./WithAdsMessage";
import Rating from "./episodes-and-chapters/Rating";

export default function Details({ info }) {
  return (
    <div className="customSm:mx-2 md:mx-6 lg:mx-0">
      <h1 className="font-bold text-white customSm:text-xl lg:text-4xl">
        {titleHandler(info.title ? info.title : info.name)}
      </h1>
      <div className="flex items-center gap-5 my-5 text-white">
        {(info.rating || info.vote_average) && <Rating info={info} />}
        {info.genres && <GenresBadge genres={info.genres} />}
      </div>

      <div className="flex items-center gap-3 text-yellow-500 font-semibold my-2">
        {info.first_air_date ||
          (info.release_date && (
            <div>
              {info.first_air_date ? info.first_air_date : info.release_date}
            </div>
          ))}
        {info.status && <div>{info.status}</div>}
      </div>
      <div>
        <InfoDescription
          description={info.description ? info.description : info.overview}
          maxLength={300}
          fontSize="lg"
        />
      </div>
      {!info.intro && <InfoPlayAndAddToWatchlist info={info} />}
      {!info.type && <WithAdsMessage />}
    </div>
  );
}
