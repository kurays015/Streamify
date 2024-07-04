import LightNovelInfo, {
  getCategoriesInfo,
} from "@/components/infos/LightNovelInfo";
import PikachuLoading from "@/components/skeletons/PikachuLoading";
import titleHandler from "@/lib/titleHandler";
import { Suspense } from "react";

export const generateMetadata = async ({ params }, parent) => {
  const lightnovelInfo = await getCategoriesInfo(params.id);

  const previousImages = (await parent).openGraph?.images || [];

  const image = lightnovelInfo.image
    ? lightnovelInfo.image
    : lightnovelInfo.thumbnail;

  return {
    title: titleHandler(lightnovelInfo.title),
    openGraph: {
      title: titleHandler(lightnovelInfo.title),
      description: lightnovelInfo.description,
      images: ["/maloi.png"],
    },
  };
};

export default async function LightNovelInfoPage({ params }) {
  return (
    <main>
      <Suspense fallback={<PikachuLoading />}>
        <LightNovelInfo id={params.id} />
      </Suspense>
    </main>
  );
}
