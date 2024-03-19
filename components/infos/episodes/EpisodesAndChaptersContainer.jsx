import titleHandler from "@/lib/titleHandler";
import EpisodesAndChapters from "./EpisodesAndChapters";

async function getWatchPageInfo(id) {
  try {
    const res = await fetch(
      `${process.env.SOURCE_URL8}/meta/anilist/info/${id}`,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) {
      throw new Error("Error fetching info in watch page.");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export default async function EpisodesAndChaptersContainer({ params }) {
  const info = await getWatchPageInfo(params.id);
  const currentEpisodeUserWatching = info.episodes.find(
    episode => episode.id === params.episodeId
  )?.number;

  return (
    <div className="customSm:px-3 xl:px-0">
      <h1 className="text-cyan-300 font-bold mt-3 mb-8 text-center customSm:text-sm md:text-lg lg:text-xl">
        {titleHandler(info.title)} - {`Episode ${currentEpisodeUserWatching}`}
      </h1>
      <EpisodesAndChapters info={info} {...params} />
    </div>
  );
}
