"use client";
import { useState } from "react";
import GridEpisodes from "./GridEpisodes";
import ReusableSelect from "../ReusableSelect";
import FilteredEpisodes from "./FilteredEpisodes";

export default function EpisodesContainer({ info, type }) {
  const [filteredEpisodes, setFilteredEpisodes] = useState([]);
  const animeEpisodes = info.episodes && !type;
  const tvSeries = info.type === "TV Series";
  return (
    <div className="customSm:my-5 customSm:mx-2 md:mx-6 lg:mt-24 xl:mx-0">
      {animeEpisodes && <GridEpisodes info={info} />}
      {tvSeries && (
        <ReusableSelect info={info} setFilteredEpisodes={setFilteredEpisodes} />
      )}
      <FilteredEpisodes filteredEpisodes={filteredEpisodes} info={info} />
    </div>
  );
}
