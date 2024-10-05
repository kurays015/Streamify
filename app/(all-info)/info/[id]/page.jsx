import MetaInfo, { getMetaInfo } from "@/components/infos/MetaInfo";
// import PikachuLoading from "@/components/skeletons/PikachuLoading";
// import infoMetadata from "@/lib/infoMetadata";
// import { Suspense } from "react";

// export const generateMetadata = async ({ params, searchParams }, parent) => {
//   const metaInfo = await getMetaInfo(params.id, searchParams);

//   const previousImages = (await parent).openGraph?.images || [];

//   return infoMetadata(metaInfo, previousImages);
// };

export default async function AllMetaInfo({ params, searchParams }) {
  return (
    <main>
      <h1 className="text-white">Hello?!</h1>
      {/* <Suspense fallback={<PikachuLoading />}> */}
      {/* <MetaInfo id={params.id} searchParams={searchParams} /> */}
      {/* </Suspense> */}
    </main>
  );
}
