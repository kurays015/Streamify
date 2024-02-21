import WatchAndInfoError from "@/components/WatchAndInfoError";
import MainInfoContent from "@/components/infos/MainInfoContent";

async function getInfo(id, searchParams) {
  const { type } = searchParams;
  const tmdbParams = type ? `?type=${type}` : "";
  const tmdb = type === "movie" || type === "tv";

  try {
    const res = await fetch(
      `${process.env.SOURCE_URL}/meta/${
        tmdb ? "tmdb" : "anilist"
      }/info/${id}${tmdbParams}`,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) {
      throw new Error("Error fetching anime/manga/movie/series info.");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export default async function page({ params, searchParams }) {
  const allInfo = await getInfo(params.id, searchParams);

  if (!allInfo) return <WatchAndInfoError />;

  return <MainInfoContent infoData={allInfo} />;
}
