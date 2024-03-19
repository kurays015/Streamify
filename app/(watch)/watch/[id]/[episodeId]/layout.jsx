import EpisodesAndChaptersContainer from "@/components/infos/episodes/EpisodesAndChaptersContainer";
import EpisodesAndChaptersSkeleton from "@/components/skeletons/EpisodesAndChaptersSkeleton";
import { Suspense } from "react";

export default async function layout({ children, params }) {
  return (
    <div className="max-w-7xl mx-auto">
      {children}
      <Suspense fallback={<EpisodesAndChaptersSkeleton />}>
        <EpisodesAndChaptersContainer params={params} />
      </Suspense>
    </div>
  );
}
