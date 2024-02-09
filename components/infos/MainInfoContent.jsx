import Link from "next/link";
import { IoIosReturnLeft } from "react-icons/io";
import Overlay from "../Overlay";
import InfoDetails from "./InfoDetails";

export default function MainInfoContent({ infoData, type }) {
  const coverImages = infoData.cover || infoData.bannerImage;

  return (
    <div className="relative h-screen inset-0 ">
      <Link
        href=".."
        className="absolute text-white text-5xl top-10 left-16 z-20 hover:scale-110 transition-all cursor-pointer"
      >
        <IoIosReturnLeft />
      </Link>
      <Overlay />
      {coverImages && (
        <div
          style={{
            backgroundImage: `url("${infoData.cover || infoData.bannerImage}")`,
          }}
          className="absolute h-screen -top-36 w-full bg-no-repeat bg-cover bg-center "
        ></div>
      )}
      <InfoDetails infoData={infoData} type={type} />
    </div>
  );
}
