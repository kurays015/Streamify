import LightNovelChapterContent from "@/components/LightNovelChapterContent";
import { Suspense } from "react";

export default function ReadPage({ searchParams }) {
  return (
    <div>
      <Suspense
        key={JSON.stringify(searchParams)}
        fallback={<h1 className="text-white text-xl">Loading...!</h1>}
      >
        <LightNovelChapterContent chapterId={searchParams.chapterId} />
      </Suspense>
    </div>
  );
}
