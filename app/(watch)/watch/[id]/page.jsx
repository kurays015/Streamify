import VideoPlayer from "@/components/ArtPlayer";
import BackToHomeBtn from "@/components/BackToHomeBtn";
import WatchAndInfoError from "@/components/WatchAndInfoError";

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

export default async function Watch({ params }) {
  const streamLinks = await getStreamingLinks(params.id);
  if (!streamLinks) return <WatchAndInfoError />;

  return (
    <main>
      <BackToHomeBtn />
      <VideoPlayer videoSources={streamLinks} />
    </main>
  );
}
