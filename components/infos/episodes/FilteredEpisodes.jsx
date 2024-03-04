"use client";
import Link from "next/link";
import EpisodeNumber from "./EpisodeNumber";
import { useMetaContext } from "@/hooks/useMetaContext";
import { watchEpisodes } from "@/lib/watchAndReadRoute";

export default function FilteredEpisodes({ info }) {
  const { filteredEpisodes } = useMetaContext();
  return (
    <div
      className={
        filteredEpisodes
          ? "grid grid-cols-5 gap-2 my-5 max-h-96 overflow-auto scrollbar-gray customSm:grid-cols-5 customSemiMd:grid-cols-6 customSemiMd2:grid-cols-7 md:grid-cols-8 lg:grid-cols-9 xl:grid-cols-12"
          : "text-center text-slate-300 my-5"
      }
    >
      {filteredEpisodes ? (
        filteredEpisodes.map(episode => (
          <Link href={watchEpisodes(info, episode)} key={episode.id}>
            <EpisodeNumber {...episode} info={info} />
          </Link>
        ))
      ) : (
        <span>No episode available.</span>
      )}
    </div>
  );
}
