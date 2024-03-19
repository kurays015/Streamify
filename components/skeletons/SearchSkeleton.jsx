import { Skeleton } from "../ui/skeleton";

export default function SearchSkeleton() {
  return (
    <div className="customSm:h-[30vh] lg:h-[50vh]">
      <div className="grid customSm:grid-cols-2 customSm:gap-2 customGrid3:grid-cols-3 customGrid3:gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 ">
        {Array.from({ length: 10 }).map((_, index) => (
          <Skeleton className="h-5" key={index} />
        ))}
      </div>
    </div>
  );
}
