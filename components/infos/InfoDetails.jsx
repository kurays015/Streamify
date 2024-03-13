import Image from "next/image";
import Details from "./Details";
import YouMayLike from "../YouMayLike";
import EpisodesContainer from "./episodes/EpisodesContainer";
import titleHandler from "@/lib/titleHandler";
import Trailer from "../Trailer";
import Similar from "../Similar";

export default function InfoDetails({ info, id }) {
  return (
    <div className="relative z-10 customSm:top-0 customSm:pb-8 lg:top-[37%] lg:pb-24 lg:max-w-7xl lg:mx-auto lg:pt-[330px]">
      <div className="flex customSm:flex-col customSm:gap-8 lg:flex-row lg:gap-24 lg:mx-6 xl:mx-0">
        <Image
          src={info.image}
          height={500}
          width={500}
          alt={titleHandler(info.title)}
          className="w-1/4 customSm:w-full lg:w-auto lg:h-[480px] lg:rounded-md"
          priority
        />
        <Details info={info} id={id} />
      </div>
      {info.trailer && <Trailer {...info.trailer} />}
      {info.episodes && <EpisodesContainer info={info} />}
      {info.recommendations && <YouMayLike info={info} />}
      {/* {info.similar && <Similar info={info} />} */}
    </div>
  );
}
