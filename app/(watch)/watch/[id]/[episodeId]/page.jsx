import VideoPlayerSkeleton from "@/components/skeletons/VideoPlayerSkeleton";
import VideoPlayerContainer from "@/components/videoplayer/VideoPlayerContainer";
import { Suspense } from "react";

export default async function Watch({ params }) {
  return (
    <Suspense fallback={<VideoPlayerSkeleton />}>
      <VideoPlayerContainer episodeId={params.episodeId} />
    </Suspense>
  );
}
