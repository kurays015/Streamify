import WatchAndInfoError from "@/components/WatchAndInfoError";
import MainInfoContent from "@/components/infos/MainInfoContent";

async function getInfo(id, searchParams) {
  const { providerId, tmdbParams } = searchParams;
  const tmdb = `?type=${tmdbParams}`;
  const anilistManga = "?provider=mangadex";
  const params = providerId === "tmdb" ? tmdb : anilistManga;

  try {
    const res = await fetch(
      `${process.env.SOURCE_URL}/meta/${
        providerId === "tmdb"
          ? "tmdb"
          : providerId === "anilist"
          ? "anilist"
          : "anilist-manga"
      }/info/${id}${params}`,
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
