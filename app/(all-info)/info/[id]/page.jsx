import MetaInfo from "@/components/infos/MetaInfo";
import PikachuLoading from "@/components/skeletons/PikachuLoading";
import { Suspense } from "react";

export default async function AllMetaInfo({ params, searchParams }) {
  return (
    <main>
      <Suspense fallback={<PikachuLoading />}>
        <MetaInfo id={params.id} searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
