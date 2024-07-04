import LightNovelInfo, {
  getCategoriesInfo,
} from "@/components/infos/LightNovelInfo";
import PikachuLoading from "@/components/skeletons/PikachuLoading";
import { Suspense } from "react";

export const generateMetadata = async ({ params }, parent) => {
  const lightnovelInfo = await getCategoriesInfo(params.id);

  const previousImages = (await parent).openGraph?.images || [];

  return infoMetadata(lightnovelInfo, previousImages);
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
