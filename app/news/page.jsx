import News from "@/components/news/News";
import NewsSkeleton from "@/components/skeletons/NewsSkeleton";
import { Suspense } from "react";

export const runtime = "experimental-edge";

export default async function NewsPage() {
  return (
    <main className="max-w-7xl mx-auto text-white">
      <h1>News! (In development...)</h1>
      <div>
        <Suspense fallback={<NewsSkeleton />}>
          <News />
        </Suspense>
      </div>
    </main>
  );
}
