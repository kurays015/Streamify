import LightNovel from "@/components/categories/lightnovel/LightNovel";
import SearchSkeleton from "@/components/skeletons/SearchSkeleton";
import { Suspense } from "react";

export default function LightNovelPage({ searchParams }) {
  return (
    <div className="">
      <Suspense
        key={JSON.stringify(searchParams)}
        fallback={<SearchSkeleton />}
      >
        <LightNovel searchParams={searchParams} />
      </Suspense>
    </div>
  );
}

// const paragraphs = info?.text.split("\n").map((paragraph, index) => (
//   <p key={index} className="mt-10">
//     {paragraph}
//   </p>
// ));
