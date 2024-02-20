import WatchAndInfoError from "@/components/WatchAndInfoError";
import MainInfoContent from "@/components/infos/MainInfoContent";

async function getInfo(id, searchParams) {
  const { type } = searchParams;
  const types = type === "tv" ? "anilist" : "anilist-manga";
  try {
    const res = await fetch(
      `${process.env.SOURCE_URL}/meta/${types}/info/${id}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Error fetching anime/manga info.");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export default async function page({ params, searchParams }) {
  const animeInfo = await getInfo(params.id, searchParams);
  console.log(animeInfo, "ANIME INFO!");
  if (!animeInfo) return <WatchAndInfoError />;

  return <MainInfoContent infoData={animeInfo} />;
}
