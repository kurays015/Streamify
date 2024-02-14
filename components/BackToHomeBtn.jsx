import Link from "next/link";
import { IoIosReturnLeft } from "react-icons/io";

export default function BackToHomeBtn() {
  return (
    <Link
      href="/"
      className="absolute text-white text-5xl top-10 left-16 z-20 hover:scale-110 transition-all cursor-pointer"
    >
      <IoIosReturnLeft />
    </Link>
  );
}
