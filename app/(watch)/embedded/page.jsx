import EpisodeContainer from "@/components/infos/episodes-and-chapters/EpisodeContainer";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { getStreamingLinks } from "@/components/videoplayer/VideoPlayerContainer";
import WatchAndInfoError from "@/components/WatchAndInfoError";
import capitalFirstLetter from "@/lib/capitalFirstLetter";
import { getInfoData } from "@/lib/getInfoData";

export const generateMetadata = async () => {
  return {
    title: "Bonus Page",
    description: "Watch bonus pages of anime episodes.",
  };
};

export default async function EmbeddedAnime({ searchParams }) {
  const [streamLinks, infoData] = await Promise.all([
    getStreamingLinks(searchParams?.episodeId),
    getInfoData(searchParams?.id, { type: "anime" }),
  ]);

  if (!streamLinks || !infoData) return <WatchAndInfoError />;

  return (
    <main className="max-w-7xl mx-auto p-4">
      <AspectRatio ratio={16 / 9}>
        <iframe
          className="w-full customSm:h-[250px] sm:h-[350px] md:h-[400px] lg:h-screen overflow-y-hidden "
          src={streamLinks.headers.Referer}
          allowFullScreen
        ></iframe>
      </AspectRatio>
      <div className="text-center text-slate-300 font-semibold  customSm:mt-12 customSm:mb-5 lg:my-5">
        <h1 className="customSm:text-xl lg:text-3xl">
          {capitalFirstLetter(searchParams?.episodeId.split("-").join(" "))}
        </h1>
        <p className="text-sm">(Bonus page)</p>
      </div>
      <EpisodeContainer info={infoData} />
    </main>
  );
}
