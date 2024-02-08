async function getEpisodes(episodeId) {
  try {
    const res = await fetch(`${process.env.META_URL}/watch/${episodeId}`);
    if (!res.ok) {
      throw new Error("Error fetching episodes.");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export default async function page({ params }) {
  const episodes = await getEpisodes(params.episodeId);
  console.log(episodes);
  return <div className="text-white text-3xl">{params.episodeId}</div>;
}
