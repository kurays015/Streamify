import Link from "next/link";
import { FaPlay, FaPlus } from "react-icons/fa6";
import { Button } from "./ui/button";

export default function InfoPlayAndAddToWatchlist() {
  return (
    <div className="flex items-center gap-3 my-5">
      <Link href={""}>
        <Button
          variant="secondary"
          className="text-base font-semibold py-6 px-10 hover:scale-105 transition-all"
        >
          <FaPlay className="text-lg mr-1" />
          <span>Play now</span>
        </Button>
      </Link>
      <Link href={""}>
        <Button
          variant="outline"
          className="text-white text-base font-semibold py-6 px-12 hover:text-white hover:scale-105 transition-all"
        >
          <FaPlus className="mr-1" /> Add to Watchlist
        </Button>
      </Link>
    </div>
  );
}
