import VideoPlayer from "@/components/ArtPlayer";

async function getAnimeEpisodes(id) {
  try {
    const res = await fetch(
      `${process.env.SOURCE_URL}/meta/anilist/watch/${id}`
    );
    if (!res.ok) {
      throw new Error("Error fetching anime episodes.");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export default async function page({ params }) {
  const episodes = await getAnimeEpisodes(params.id);
  return (
    <div>
      <VideoPlayer videoSources={episodes} />
    </div>
  );
}
