import Link from "next/link";
import { IoIosReturnLeft } from "react-icons/io";

export default function BackToHomeBtn() {
  return (
    <Link
      href="/"
      className="absolute text-white hover:scale-110 transition-all cursor-pointer customSm:left-2 customSm:top-2 customSm:text-4xl md:text-5xl md:top-5 md:left-7 z-20"
    >
      <IoIosReturnLeft className="" />
    </Link>
  );
}
