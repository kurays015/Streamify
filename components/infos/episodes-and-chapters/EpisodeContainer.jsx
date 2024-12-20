import EpisodeDropdown from "./EpisodeDropdown";
import GridEpisodes from "./GridEpisodes";

export default function EpisodeContainer({ info }) {
  const isValid = info.episodes?.length > 100;

  if (!info.episodes || !info.episodes.length) return;

  return (
    <div className="customSm:my-5 customSm:mx-2 md:mx-6 lg:my-12 xl:mx-0 z-50">
      {isValid ? <EpisodeDropdown info={info} /> : <GridEpisodes info={info} />}
    </div>
  );
}
