import MetaInfo, { getMetaInfo } from "@/components/infos/MetaInfo";
import PikachuLoading from "@/components/skeletons/PikachuLoading";
import titleHandler from "@/lib/titleHandler";
import { Suspense } from "react";

export const generateMetadata = async ({ params, searchParams }, parent) => {
  const metaInfo = await getMetaInfo(params.id, searchParams);

  const previousImages = (await parent).openGraph?.images || [];

  const image = metaInfo.image ? metaInfo.image : metaInfo.thumbnail;

  return {
    title: titleHandler(metaInfo.title),
    openGraph: {
      title: titleHandler(metaInfo.title),
      description: metaInfo.description,
      images: ["/maloi.png"],
    },
  };
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
