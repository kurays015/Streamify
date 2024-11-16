import Image from "next/image";
import Link from "next/link";
import EpisodeNumber from "./EpisodeNumber";
import GridEpisodesImages from "../GridEpisodesImages";

export default function GridEpisodes({ info }) {
  return (
    <div>
      <h1 className="text-slate-200 font-semibold customSm:text-xl customSm:mt-12 customSm:mb-5 lg:my-5 lg:text-3xl">
        Episodes
      </h1>
      <div className="grid grid-cols-5 customSm:gap-2 lg:gap-3 max-h-[600px] overflow-auto scrollbar-gray">
        {info.episodes.map(episode => (
          <Link href={`/watch/${info.id}/${episode.id}`} key={episode.id}>
            <div className="relative customSm:hidden lg:block">
              <GridEpisodesImages {...episode} />
              <div className="absolute bottom-0 left-0 text-white bg-emerald-600 font-semibold rounded-tr-md rounded-bl-md py-2 px-3">
                {episode.number}
              </div>
            </div>
            <div className="lg:hidden">
              <EpisodeNumber number={episode.number} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
