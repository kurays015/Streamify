import EmbeddedVideo from "@/components/EmbeddedVideo";
import Seasons from "@/components/infos/Seasons";
import { getInfoData } from "@/lib/getInfoData";

export const generateMetadata = async ({ params }) => {
  return {
    title: `Watch ${decodeURIComponent(params.title)}`,
    openGraph: {
      title: `Watch ${decodeURIComponent(params.title)}`,
    },
  };
};

export default async function EmbeddedVideoPage({ params, searchParams }) {
  const { id, type, title } = params;
  const info = await getInfoData(id, { type: type === "tv" ? "tv" : "movie" });

  const tv = `tv/${id}/${searchParams?.season ?? "1"}/${
    searchParams?.episode ?? "1"
  }`;
  const movie = `movie/${id}`;
  const queryParams = type === "tv" ? tv : movie;

  return (
    <main className="max-w-7xl mx-auto">
      <EmbeddedVideo queryParams={queryParams} title={title} />
      {type === "tv" && <Seasons info={info} />}
    </main>
  );
}
