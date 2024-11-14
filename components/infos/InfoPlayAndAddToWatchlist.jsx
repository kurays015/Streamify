import Link from "next/link";
import { FaPlay } from "react-icons/fa6";
import { Button } from "../ui/button";
import { watchRoute } from "@/lib/watchRoute";
import dynamic from "next/dynamic";

const AddToList = dynamic(() => import("./AddToList"), {
  ssr: false,
  loading: () => <p className="text-white text-center">loading...</p>,
});

export default function InfoPlayAndAddToWatchlist({ info }) {
  return (
    <div className="flex items-center gap-3 my-5 customSm:flex-col md:flex-row">
      <Link href={watchRoute(info)} className={`customSm:w-full md:w-auto`}>
        <Button
          variant="secondary"
          className="text-base font-semibold py-6 px-10 hover:scale-105 transition-all customSm:w-full md:w-auto"
        >
          <FaPlay className="text-lg mr-1" />
          <span>Play now</span>
        </Button>
      </Link>
      <AddToList info={info} />
    </div>
  );
}
