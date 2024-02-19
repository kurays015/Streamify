import Link from "next/link";
import { FaPlay, FaPlus } from "react-icons/fa6";
import { Button } from "../ui/button";
import watchAndReadRoute from "@/lib/watchAndReadRoute";

export default function InfoPlayAndAddToWatchlist({ info }) {
  return (
    <div className="flex items-center gap-3 my-5 customSm:flex-col md:flex-row">
      <Link
        href={watchAndReadRoute(info)}
        className={`${
          info.type === "TV Series" || info.type === "TV" ? "hidden" : ""
        } customSm:w-full md:w-auto`}
      >
        <Button
          variant="secondary"
          className="text-base font-semibold py-6 px-10 hover:scale-105 transition-all customSm:w-full md:w-auto"
        >
          <FaPlay className="text-lg mr-1" />
          <span>{info.chapters ? "Read now" : "Play now"}</span>
        </Button>
      </Link>
      <Link href={""} className="customSm:w-full">
        <Button
          variant="outline"
          className="text-white text-base font-semibold py-6 px-12 hover:text-white hover:scale-105 transition-all customSm:w-full md:w-auto"
        >
          <FaPlus className="mr-1" />{" "}
          {info.chapters ? "Add to Readlist" : "Add to Watchlist"}
        </Button>
      </Link>
    </div>
  );
}
