import titleHandler from "@/lib/titleHandler";
import GenresBadge from "../GenresBadge";
import InfoPlayAndAddToWatchlist from "./InfoPlayAndAddToWatchlist";
import InfoDescription from "./InfoDescription";
import WithAdsMessage from "./WithAdsMessage";
import infoStatus from "@/lib/infoStatus";
import Rating from "./episodes-and-chapters/Rating";

export default function Details({ info, id }) {
  return (
    <div className="customSm:mx-2 md:mx-6 lg:mx-0">
      <h1 className="font-bold text-white customSm:text-xl lg:text-4xl">
        {titleHandler(info.title)}
      </h1>
      {info.intro && (
        <h2 className="text-slate-300 my-5 text-lg font-semibold">
          {info.intro}
        </h2>
      )}
      <div className="flex items-center gap-5 my-5 text-white">
        {info.rating && <Rating info={info} />}
        {info.genres && <GenresBadge genres={info.genres} />}
      </div>
      <div className="flex items-center gap-3 text-yellow-500 font-semibold my-2">
        <div className={info.intro && "hidden"}>{infoStatus(info)}</div>
        {info.status && <div>{info.status}</div>}
      </div>
      <InfoDescription description={info.description} maxLength={300} />
      {!info.intro && <InfoPlayAndAddToWatchlist info={info} id={id} />}
      {(info.type === "Movie" || info.type === "TV Series") && (
        <WithAdsMessage />
      )}
    </div>
  );
}
