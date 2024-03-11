"use client";
import { EpisodeDropdown } from "./EpisodeDropdown";
import GridEpisodes from "./GridEpisodes";

export default function EpisodesContainer({ info }) {
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
