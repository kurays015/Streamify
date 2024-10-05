import { providerUrl } from "@/lib/infoUrl";
import MainInfoContent from "./MainInfoContent";
import WatchAndInfoError from "../WatchAndInfoError";

// export async function getMetaInfo(id, searchParams) {
//   const { providerId, tmdbParams } = searchParams;
//   const tmdb = `?type=${tmdbParams}`;
//   const anilistManga = "?provider=mangadex";
//   const params = providerId === "tmdb" ? tmdb : anilistManga;

//   try {
//     const res = await fetch(
//       `${process.env.SOURCE_URL8}${providerUrl(providerId, id, params)}`,
//       {
//         cache: "no-store",
//       }
//     );
//     if (!res.ok) {
//       throw new Error("Error fetching anime/manga/movie/series info.");
//     }
//     return res.json();
//   } catch (error) {
//     console.log(error);
//   }
// }

export default async function MetaInfo({ id, searchParams }) {
  // const info = await getMetaInfo(id, searchParams);

  // if (!info) return <WatchAndInfoError />;

  // return <MainInfoContent infoData={info} id={id} />;
  return <h1 className="text-white">Maintenance!?...</h1>;
}
