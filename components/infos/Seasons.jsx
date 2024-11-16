import { Suspense } from "react";
import EpisodesPerSeason from "./episodes-and-chapters/EpisodesPerSeason";
import SeasonsSelect from "./SeasonsSelect";
import { RiLoader5Fill } from "react-icons/ri";
import getSeasonNumber from "@/lib/getSeasonNumber";

export default function Seasons({ info }) {
  const seasonNumber = getSeasonNumber();
  return (
    <div className="mt-24 text-white customSm:mx-2 md:mx-6 ">
      <SeasonsSelect info={info} />
      <Suspense
        fallback={
          <RiLoader5Fill className="h-24 w-24 mx-auto my-12 animate-spin" />
        }
        key={seasonNumber}
      >
        <EpisodesPerSeason info={info} />
      </Suspense>
    </div>
  );
}
