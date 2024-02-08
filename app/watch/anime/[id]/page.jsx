async function getAnimeEpisodes() {
  try {
    const res = await fetch(`${process.env.META_URL}/watch/${id}`);
  } catch (error) {
    console.log(error);
  }
}

export default function page({ params }) {
  return <div className="text-white text-5xl">{params.id}</div>;
}
