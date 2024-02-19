import Image from "next/image";
import cover from "@/public/login-cover.png";
import Overlay from "./Overlay";

export default function AuthCover() {
  return (
    <div>
      <Image
        src={cover}
        width={500}
        height={500}
        alt="login-cover"
        className="w-full h-full absolute inset-0  object-cover"
      />
      <Overlay />
    </div>
  );
}
