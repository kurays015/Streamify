import WatchAndInfoError from "../WatchAndInfoError";
import VideoPlayer from "./VideoPlayer";

async function getStreamingLinks(id) {
  try {
    const res = await fetch(
      `${process.env.SOURCE_URL1}/meta/anilist/watch/${id}`
    );
    if (!res.ok) {
      throw new Error("Error fetching stream links.");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export default async function VideoPlayerContainer({ episodeId }) {
  const streamLinks = await getStreamingLinks(episodeId);

  if (!streamLinks) return <WatchAndInfoError />;

  return <VideoPlayer videoSources={streamLinks} />;
}
