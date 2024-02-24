import VideoPlayer from "@/components/ArtPlayer";
import BackToHomeBtn from "@/components/BackToHomeBtn";
import WatchAndInfoError from "@/components/WatchAndInfoError";

async function getAnimeEpisodes(id, searchParams) {
  const { type, showId } = searchParams;
  const tmdb = type === "Movie" || type === "TV Series";
  const tmdbWatchParams = tmdb ? `?id=${showId}` : "";

  try {
    const res = await fetch(
      `${process.env.RAILWAY_SERVER_URL}/meta/${
        tmdb ? "tmdb" : "anilist"
      }/watch/${id}${tmdbWatchParams}`
    );
    if (!res.ok) {
      throw new Error("Error fetching stream links.");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export default async function Watch({ params, searchParams }) {
  const streamLinks = await getAnimeEpisodes(params.id, searchParams);

  if (!streamLinks) return <WatchAndInfoError />;

  return (
    <div>
      <BackToHomeBtn />
      <VideoPlayer videoSources={streamLinks} />
    </div>
  );
}
