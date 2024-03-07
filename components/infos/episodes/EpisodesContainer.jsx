"use client";
import { useEffect } from "react";
import { EpisodeDropdown } from "./EpisodeDropdown";
import GridEpisodes from "./GridEpisodes";

export default function EpisodesContainer({ info }) {
  useEffect(() => {
    localStorage.setItem("episodes", JSON.stringify(info.episodes));
  }, []);

  return (
    <div className="customSm:my-5 customSm:mx-2 md:mx-6 lg:my-12 xl:mx-0">
      {info.episodes.length > 100 ? (
        <EpisodeDropdown info={info} />
      ) : (
        <GridEpisodes info={info} />
      )}
    </div>
  );
}
