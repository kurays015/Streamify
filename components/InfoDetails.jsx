import Image from "next/image";
import Details from "./Details";
import YouMayLike from "./YouMayLike";
import Overlay from "./Overlay";

export default function InfoDetails({ infoData }) {
  return (
    <div className="relative top-[37%] z-10 max-w-7xl mx-auto pb-24">
      <div className="flex gap-24">
        <Image
          src={infoData.image}
          height={500}
          width={500}
          alt={titleHandler(infoData.title)}
          className="w-1/4 rounded-md max-h-[480px]"
        />
        <Details type={type} infoData={infoData} />
      </div>
      <YouMayLike infoData={infoData} />
      <Overlay />
    </div>
  );
}
