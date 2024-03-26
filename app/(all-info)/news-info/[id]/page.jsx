import NewsInfo from "@/components/infos/NewsInfo";
import PikachuLoading from "@/components/skeletons/PikachuLoading";
import { Suspense } from "react";

export default async function LightNovelInfoPage({ searchParams }) {
  return (
    <main>
      <Suspense fallback={<PikachuLoading />}>
        <NewsInfo {...searchParams} />
      </Suspense>
    </main>
  );
}
