"use client";
import { useState } from "react";
import GridEpisodes from "./GridEpisodes";
import Link from "next/link";
import watchUrl from "@/lib/watchUrl";
import ReusableSelect from "../ReusableSelect";

export default function EpisodesAndChaptersContainer({ infoData, type }) {
  const [filteredEpisodes, setFilteredEpisodes] = useState([]);
  const animeEpisodes = infoData.episodes && !type;
  const tvSeries = infoData.type === "TV Series";
  return (
    <div className="my-12">
      {animeEpisodes && <GridEpisodes infoData={infoData} />}
      {tvSeries && (
        <ReusableSelect
          infoData={infoData}
          setFilteredEpisodes={setFilteredEpisodes}
        />
      )}
      <div className="grid grid-cols-5 gap-2 my-5 max-h-96 overflow-auto scrollbar-gray">
        {filteredEpisodes.map(episode => (
          <Link
            href={watchUrl(infoData)}
            key={episode.id}
            className="text-slate-400 text-center font-medium border border-slate-700 p-2 rounded-md hover:bg-slate-300 hover:text-slate-900 transition-all text-ellipsis overflow-hidden whitespace-nowrap w-full"
          >
            {episode.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
