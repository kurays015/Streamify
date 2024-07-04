import NewsInfo, { getNewsInfo } from "@/components/infos/NewsInfo";
import PikachuLoading from "@/components/skeletons/PikachuLoading";
import { Suspense } from "react";

export const generateMetadata = async ({ searchParams }, parent) => {
  const newsInfo = await getNewsInfo(searchParams?.id);

  const previousImages = (await parent).openGraph?.images || [];

  return infoMetadata(newsInfo, previousImages);
};

export default async function LightNovelInfoPage({ searchParams }) {
  return (
    <main>
      <Suspense fallback={<PikachuLoading />}>
        <NewsInfo id={searchParams?.id} />
      </Suspense>
    </main>
  );
}
