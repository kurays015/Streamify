import Image from "next/image";
import Details from "./Details";
import YouMayLike from "../YouMayLike";
import EpisodesContainer from "../episodes/EpisodesContainer";
import titleHandler from "@/lib/titleHandler";
import Trailer from "../Trailer";

export default function InfoDetails({ info, type }) {
  return (
    <div className="relative z-10 customSm:top-0 customSm:pb-8 lg:top-[37%] lg:pb-24 lg:max-w-7xl lg:mx-auto">
      <div className="flex customSm:flex-col customSm:gap-8 lg:flex-row lg:gap-24 lg:mx-6 xl:mx-0">
        <Image
          src={info.image ? info.image : info.coverImage}
          height={500}
          width={500}
          alt={titleHandler(info.title)}
          className="w-1/4 customSm:w-full lg:w-auto lg:h-[480px] lg:rounded-md"
          priority
        />
        <Details type={type} info={info} />
      </div>
      {info.trailer && <Trailer {...info.trailer} />}
      {type !== "movie" && <EpisodesContainer info={info} type={type} />}
      {info.recommendations && <YouMayLike info={info} />}
    </div>
  );
}
