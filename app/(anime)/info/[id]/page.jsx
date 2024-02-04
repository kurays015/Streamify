import titleHandler from "@/lib/titleHandler";

async function getGogoAnimeInfo(id) {
  const gogoAnime = process.env.GOGO_ANIME_URL;
  try {
    const res = await fetch(`${gogoAnime}/info/${id}`);
    if (!res.ok) {
      throw new Error("Error fetching gogoanime info.");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function getAnilistInfo(id) {
  const anilist = process.env.META_URL;
  try {
    const res = await fetch(`${anilist}/info/${id}`);
    if (!res.ok) {
      throw new Error("Error fetching anilist info.");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function getAnifyInfo(id) {
  const anify = process.env.ANIFY_URL;
  try {
    const res = await fetch(`${anify}/info/${id}`);
    if (!res.ok) {
      throw new Error("Error fetching anify info.");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default async function page({ params }) {
  let infos = null;

  if (params.id) {
    infos = await getGogoAnimeInfo(params.id);
    if (!infos) {
      infos = await getAnilistInfo(params.id);
      if (!infos) {
        infos = await getAnifyInfo(params.id);
      }
    }
  }

  return <div className="text-2xl text-white">{titleHandler(infos.title)}</div>;
}
