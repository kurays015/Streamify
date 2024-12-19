import MetaInfo from "@/components/infos/MetaInfo";
import PikachuLoading from "@/components/skeletons/PikachuLoading";
import { getInfoData } from "@/lib/getInfoData";
import infoMetadata from "@/lib/infoMetadata";
import { Suspense } from "react";

export const generateMetadata = async ({ params, searchParams }, parent) => {
  const infoData = await getInfoData(params.id, searchParams);
  const previousImages = (await parent).openGraph?.images || [];

  if (!infoData) {
    return {
      title: "Information not found",
      description: "The requested information could not be found.",
      openGraph: {
        images: previousImages,
      },
    };
  }

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
