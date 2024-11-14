import EmbeddedVideo from "@/components/EmbeddedVideo";

export const generateMetadata = async ({ params }) => {
  return {
    title: `Watch ${decodeURIComponent(params.title)}`,
    openGraph: {
      title: `Watch ${decodeURIComponent(params.title)}`,
    },
  };
};

export default function EmbeddedVideoPage({ params, searchParams }) {
  const { type, season, episode } = searchParams;

  const queryParams =
    type === "movie"
      ? `movie/${params.id}`
      : `tv/${params.id}/${season ?? "1"}/${episode ?? "1"}`;

  return (
    <main className="">
      <EmbeddedVideo queryParams={queryParams} />
    </main>
  );
}
