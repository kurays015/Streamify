import titleHandler from "@/lib/titleHandler";
import Image from "next/image";
import Link from "next/link";
import { IoIosReturnLeft } from "react-icons/io";
import YouMayLike from "./YouMayLike";
import Details from "./Details";
import Overlay from "./Overlay";

export default function InfoContent({ infoData, type }) {
  return (
    <div className="relative h-screen inset-0 ">
      <Link
        href=".."
        className="absolute text-white text-5xl top-10 left-16 z-20 hover:scale-110 transition-all cursor-pointer"
      >
        <IoIosReturnLeft />
      </Link>
      <Overlay />
      {infoData.cover && (
        <div
          style={{
            backgroundImage: `url("${infoData.cover}")`,
          }}
          className="absolute h-screen -top-36 w-full bg-no-repeat bg-cover bg-center "
        ></div>
      )}
      <div className="relative top-[37%] z-10 max-w-7xl mx-auto pb-24">
        <div className="flex gap-24">
          <Image
            src={infoData.image}
            height={500}
            width={500}
            alt={titleHandler(infoData.title)}
            className="w-1/4 rounded-md h-[480px]"
          />
          <Details type={type} infoData={infoData} />
        </div>
        <YouMayLike infoData={infoData} />
      </div>
    </div>
  );
}
