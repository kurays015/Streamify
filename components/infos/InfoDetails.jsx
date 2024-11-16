import Image from "next/image";
import Details from "./Details";
import YouMayLike from "../YouMayLike";
import titleHandler from "@/lib/titleHandler";
import Trailer from "../Trailer";
import Similar from "../Similar";
import getImageBase64 from "@/lib/base64";
import EpisodeContainer from "./episodes-and-chapters/EpisodeContainer";
import tmdbImgHandler from "@/lib/tmdbImg";
import Seasons from "./Seasons";
import Casts from "./Casts";

export default async function InfoDetails({ info }) {
  const { base64, img } = await getImageBase64(
    info.image ? info.image : tmdbImgHandler(info.poster_path)
  );

  return (
    <div className="relative z-10 customSm:top-0 customSm:pb-8 lg:top-[37%] lg:pb-24 lg:max-w-7xl lg:mx-auto lg:pt-[330px]">
      <div className="flex customSm:flex-col customSm:gap-8 lg:flex-row lg:gap-24 lg:mx-6 xl:mx-0">
        <Image
          {...img}
          height={500}
          width={500}
          alt={titleHandler(info.title ? info.title : info.name)}
          className={`text-white customSm:w-full lg:w-80 lg:h-[480px] lg:rounded-md`}
          priority
          placeholder="blur"
          blurDataURL={base64}
        />
        <Details info={info} />
      </div>
      <Trailer {...info.trailer} info={info} />
      <Casts info={info} />
      <EpisodeContainer info={info} />
      <Seasons info={info} />
      <YouMayLike info={info} />
      <Similar info={info} />
    </div>
  );
}
