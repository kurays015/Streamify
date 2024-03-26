import LightNovel from "@/components/categories/lightnovel/LightNovel";
import PikachuLoading from "@/components/skeletons/PikachuLoading";
import { Suspense } from "react";

export default function LightNovelPage({ searchParams }) {
  return (
    <div>
      <Suspense
        key={JSON.stringify(searchParams)}
        fallback={<PikachuLoading />}
      >
        <LightNovel searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
