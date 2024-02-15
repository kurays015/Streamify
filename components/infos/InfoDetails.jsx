import Image from "next/image";
import Details from "./Details";
import YouMayLike from "../YouMayLike";
import EpisodesAndChaptersContainer from "../episodes/EpisodesAndChaptersContainer";
import titleHandler from "@/lib/titleHandler";

export default function InfoDetails({ info, type }) {
  return (
    <div className="relative top-[37%] z-10 max-w-7xl mx-auto pb-24">
      <div className="flex gap-24">
        <Image
          src={info.image ? info.image : info.coverImage}
          height={500}
          width={500}
          alt={titleHandler(info.title)}
          className="w-1/4 rounded-md h-[480px]"
          priority
        />
        <Details type={type} info={info} />
      </div>
      <EpisodesAndChaptersContainer info={info} type={type} />
      {info.recommendations && <YouMayLike info={info} />}
    </div>
  );
}
