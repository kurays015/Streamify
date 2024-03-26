import LightNovelInfo from "@/components/infos/LightNovelInfo";
import PikachuLoading from "@/components/skeletons/PikachuLoading";
import { Suspense } from "react";

export default async function LightNovelInfoPage({ params }) {
  return (
    <main>
      <Suspense fallback={<PikachuLoading />}>
        <LightNovelInfo id={params.id} />
      </Suspense>
    </main>
  );
}
