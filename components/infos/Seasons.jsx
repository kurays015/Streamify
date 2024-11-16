import { Suspense } from "react";
import EpisodesPerSeason from "./episodes-and-chapters/EpisodesPerSeason";
import SeasonsSelect from "./SeasonsSelect";
import { RiLoader5Fill } from "react-icons/ri";

export default async function Seasons({ info }) {
  return (
    <div className="mt-24 text-white customSm:mx-2 md:mx-6 lg:mx-0">
      <SeasonsSelect info={info} />
      <Suspense
        fallback={
          <RiLoader5Fill className="h-24 w-24 mx-auto my-12 animate-spin" />
        }
        // key={searchParams?.season}
      >
        <EpisodesPerSeason info={info} />
      </Suspense>
    </div>
  );
}
