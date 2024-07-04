import News from "@/components/categories/news/News";
import NewsSkeleton from "@/components/skeletons/NewsSkeleton";
import { Suspense } from "react";

export const metadata = {
  title: "News",
};

export default async function NewsPage() {
  return (
    <main className="max-w-7xl mx-auto text-white">
      <Suspense fallback={<NewsSkeleton />}>
        <News />
      </Suspense>
    </main>
  );
}
