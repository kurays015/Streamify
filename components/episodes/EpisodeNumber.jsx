import watchUrl from "@/lib/watchUrl";
import Link from "next/link";

export default function EpisodeNumber({ id, number, info }) {
  return (
    <Link
      href={watchUrl(info)}
      key={id}
      className="text-slate-400 text-center font-medium border border-slate-700 p-2 rounded-md hover:bg-slate-300 hover:text-slate-900 transition-all customSm:text-sm md:text-base"
    >
      {number}
    </Link>
  );
}
