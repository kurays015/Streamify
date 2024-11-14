import MetaInfo, { getInfoData } from "@/components/infos/MetaInfo";
import PikachuLoading from "@/components/skeletons/PikachuLoading";
import infoMetadata from "@/lib/infoMetadata";
import { Suspense } from "react";

export const generateMetadata = async ({ params, searchParams }, parent) => {
  const infoData = await getInfoData(params.id, searchParams);
  const previousImages = (await parent).openGraph?.images || [];

  return infoMetadata(infoData, previousImages);
};

export default async function AllMetaInfo({ params, searchParams }) {
  return (
    <main>
      <Suspense fallback={<PikachuLoading />}>
        <MetaInfo id={params.id} searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
