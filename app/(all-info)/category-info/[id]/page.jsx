import CategoryInfo from "@/components/infos/CategoryInfo";
import PikachuLoading from "@/components/skeletons/PikachuLoading";
import { Suspense } from "react";

export default async function CategoriesInfo({ params }) {
  return (
    <main>
      <Suspense fallback={<PikachuLoading />}>
        <CategoryInfo id={params.id} />
      </Suspense>
    </main>
  );
}
