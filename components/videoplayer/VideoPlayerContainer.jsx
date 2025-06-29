import VideoPlayer from "./VideoPlayer";

export async function getStreamingLinks(episodeId) {
  try {
    const res = await fetch(
      `${process.env.SOURCE_URL}/meta/anilist/watch/${episodeId}`
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

  return <VideoPlayer videoSources={streamLinks} />;
}
