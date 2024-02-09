async function getAnimeEpisodes(id) {
  try {
    const res = await fetch(`${process.env.META_URL}/watch/${id}`);
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
  console.log(episodes, "EPISODE");
  return <div className="text-white text-5xl">{params.id}</div>;
}
