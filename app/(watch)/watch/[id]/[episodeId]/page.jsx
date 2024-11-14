import { getWatchPageInfo } from "@/components/infos/episodes-and-chapters/EpisodesAndChaptersContainer";
import VideoPlayerSkeleton from "@/components/skeletons/VideoPlayerSkeleton";
import VideoPlayerContainer from "@/components/videoplayer/VideoPlayerContainer";
import currentEpisodeUserWatching from "@/lib/currentEpisodeUserWatching";
import titleHandler from "@/lib/titleHandler";
import { Suspense } from "react";

export const generateMetadata = async ({ params }, parent) => {
  const watchInfo = await getWatchPageInfo(params.id);
  const currentPlayingEpisode = currentEpisodeUserWatching(
    watchInfo,
    params.episodeId
  );
  const previousImages = (await parent).openGraph?.images || [];

  const image = watchInfo.image ? watchInfo.image : watchInfo.thumbnail;

  return {
    title: `Watch ${titleHandler(
      watchInfo.title ? watchInfo.title : watchInfo.name
    )} - Episode ${currentPlayingEpisode}`,
    description: watchInfo.description,
    openGraph: {
      title: `Watch ${titleHandler(
        watchInfo.title ? watchInfo.title : watchInfo.name
      )} - Episode ${currentPlayingEpisode}`,
      description: watchInfo.description,
      images: [image, ...previousImages],
    },
  };
};

export default async function Watch({ params }) {
  return (
    <Suspense fallback={<VideoPlayerSkeleton />}>
      <VideoPlayerContainer episodeId={params.episodeId} />
    </Suspense>
  );
}
