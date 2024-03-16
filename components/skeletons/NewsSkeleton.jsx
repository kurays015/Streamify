import { Skeleton } from "../ui/skeleton";

export default function NewsSkeleton() {
  return (
    <div className="grid gap-2 customSm:grid-cols-2 customSemiMd2:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {Array.from({ length: 100 }).map((_, index) => (
        <Skeleton className="h-[300px]" key={index} />
      ))}
    </div>
  );
}
