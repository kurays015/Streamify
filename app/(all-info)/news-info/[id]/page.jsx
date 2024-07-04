import NewsInfo, { getNewsInfo } from "@/components/infos/NewsInfo";
import PikachuLoading from "@/components/skeletons/PikachuLoading";
import titleHandler from "@/lib/titleHandler";
import { Suspense } from "react";

export const generateMetadata = async ({ searchParams }, parent) => {
  const newsInfo = await getNewsInfo(searchParams?.id);

  const previousImages = (await parent).openGraph?.images || [];

  const image = newsInfo.image ? newsInfo.image : newsInfo.thumbnail;

  return {
    title: titleHandler(newsInfo.title),
    openGraph: {
      title: titleHandler(newsInfo.title),
      description: newsInfo.description,
      images: ["/maloi.png"],
    },
  };
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
