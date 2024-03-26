import LightNovelChapterContent from "@/components/LightNovelChapterContent";
import PikachuLoading from "@/components/skeletons/PikachuLoading";
import { Suspense } from "react";

export default function ReadPage({ searchParams }) {
  return (
    <div>
      <Suspense
        key={JSON.stringify(searchParams)}
        fallback={<PikachuLoading />}
      >
        <LightNovelChapterContent chapterId={searchParams.chapterId} />
      </Suspense>
    </div>
  );
}
