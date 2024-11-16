import getImageBase64 from "@/lib/base64";
import tmdbImgHandler from "@/lib/tmdbImg";
import Image from "next/image";

export default async function SeasonsImages({ imgUrl, name }) {
  const { img, base64 } = (await getImageBase64(tmdbImgHandler(imgUrl))) || {
    img: { src: placeholder, height: 300, width: 300 },
    base64: "",
  };
  return (
    <Image
      {...img}
      className="w-full customSm:h-[100px] customSemiMd:h-[140px] rounded-lg text-white"
      alt={name}
      blurDataURL={base64}
      placeholder="blur"
      width={300}
      height={300}
    />
  );
}
