// import MetaInfo from "@/components/infos/MetaInfo";
// import PikachuLoading from "@/components/skeletons/PikachuLoading";
// import infoMetadata from "@/lib/infoMetadata";
// import { Suspense } from "react";

// export const generateMetadata = async ({ params, searchParams }, parent) => {
//   const metaInfo = await getMetaInfo(params.id, searchParams);

//   const previousImages = (await parent).openGraph?.images || [];

//   return infoMetadata(metaInfo, previousImages);
// };

// export const dynamic = "force-dynamic";

export default async function AllMetaInfo({ params, searchParams }) {
  const res = await fetch(
    `${process.env.TEST_URL}/meta/tmdb/info/519182?type=movie`,
    {
      cache: "no-store",
    }
  );
  const info = await res.json();

  if (!info) return <div className="text-white text-xl">Nothing...</div>;

  return (
    <main>
      <h1 className="text-white">{info.title ? info.title : "no response "}</h1>
      <h1 className="text-white">
        {info.description ? info.description : "no response "}
      </h1>
    </main>
  );
}

{
  /* <Suspense fallback={<PikachuLoading />}>
        <MetaInfo id={params.id} searchParams={searchParams} />
      </Suspense> */
}
