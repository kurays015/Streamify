"use client";
import { useState } from "react";
import GridEpisodes from "./GridEpisodes";
import SelectEpisode from "./SelectEpisode";

export default function EpisodesAndChaptersContainer({ infoData, type }) {
  const [filteredEpisodes, setFilteredEpisodes] = useState([]);
  const animeEpisodes = infoData.episodes && !type;
  const seriesOrChapters = infoData.chapters || infoData.type === "TV Series";
  return (
    <div className="my-12">
      {animeEpisodes && <GridEpisodes infoData={infoData} />}
      {seriesOrChapters && (
        <SelectEpisode
          infoData={infoData}
          setFilteredEpisodes={setFilteredEpisodes}
        />
      )}
      <div className="grid grid-cols-5">
        {filteredEpisodes.map(episode => (
          <div key={episode.id} className="text-white">
            {episode.title}
          </div>
        ))}
      </div>
    </div>
  );
}