import { Skeleton } from "../ui/skeleton";

export default function CardCarouselSkeleton() {
  return (
    <div>
      {Array.from({ length: 8 }).map((_, index) => (
        <Skeletons key={index} index={index} />
      ))}
    </div>
  );
}

function Skeletons({ index }) {
  return (
    <div className="customSm:px-2">
      <Skeleton
        className={`customSm:w-52 h-10 mb-5 customSemiMd:w-72 ${
          index === 0 ? "customSm:mt-0 lg:mt-48" : "mt-16"
        }`}
      />
      <div className="flex items-center customSm:gap-1 lg:gap-2">
        <Skeleton className="h-[300px] w-full" />
        <Skeleton className="h-[300px] w-full" />
        <Skeleton className="h-[300px] w-full customSm:hidden customSemiMd:block" />
        <Skeleton className="h-[300px] w-full customSm:hidden customSemiMd2:block" />
        <Skeleton className="h-[300px] w-full customSm:hidden md:block" />
        <Skeleton className="h-[300px] w-full customSm:hidden lg:block" />
      </div>
      <div className="flex items-center customSm:gap-1 lg:gap-2">
        <Skeleton className="h-5 w-full my-2" />
        <Skeleton className="h-5 w-full my-2" />
        <Skeleton className="h-5 w-full my-2 customSm:hidden customSemiMd:block" />
        <Skeleton className="h-5 w-full my-2 customSm:hidden customSemiMd2:block" />
        <Skeleton className="h-5 w-full my-2 customSm:hidden md:block" />
        <Skeleton className="h-5 w-full my-2 customSm:hidden lg:block" />
      </div>
    </div>
  );
}
