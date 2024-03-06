import VideoPlayer from "@/components/ArtPlayer";
import BackToHomeBtn from "@/components/BackToHomeBtn";
import WatchAndInfoError from "@/components/WatchAndInfoError";

async function getStreamingLinks(id, searchParams) {
  const { type, showId } = searchParams;
  const tmdb = type === "Movie" || type === "TV Series";

  const tmdbWatchParams = tmdb ? `?id=${showId}` : "";

  try {
    const res = await fetch(
      `${process.env.SOURCE_URL1}/meta/${
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
  const streamLinks = await getStreamingLinks(params.id, searchParams);
  if (!streamLinks) return <WatchAndInfoError />;

  return (
    <main>
      <BackToHomeBtn />
      <VideoPlayer videoSources={streamLinks} />
    </main>
  );
}
