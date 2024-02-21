"use client";
import { useState } from "react";
import GridEpisodes from "./GridEpisodes";
import ReusableSelect from "../ReusableSelect";
import FilteredEpisodes from "./FilteredEpisodes";

export default function EpisodesContainer({ info }) {
  const [filteredEpisodes, setFilteredEpisodes] = useState([]);
  const tvSeries = info.type === "TV Series";
  return (
    <div className="customSm:my-5 customSm:mx-2 md:mx-6 lg:my-12 xl:mx-0">
      {info.episodes && <GridEpisodes info={info} />}
      {tvSeries && (
        <>
          <ReusableSelect
            info={info}
            setFilteredEpisodes={setFilteredEpisodes}
          />
          <FilteredEpisodes filteredEpisodes={filteredEpisodes} info={info} />
        </>
      )}
    </div>
  );
}
