import { Skeleton } from "../ui/skeleton";

export default function EpisodesAndChaptersSkeleton() {
  return (
    <div className="customSm:px-3 xl:px-0">
      <Skeleton className="w-full h-10 mt-3 mb-8" />
      <div className="flex customSm:flex-col customSm:gap-5 customSemiMd2:flex-row customSemiMd2:gap-10 customSemiMd2:justify-between ">
        <Skeleton className="w-full h-10 customSemiMd2:w-44" />
        <Skeleton className="w-full h-10 customSemiMd2:w-44" />
        <Skeleton className="w-full h-10 customSemiMd2:w-44" />
      </div>
    </div>
  );
}
