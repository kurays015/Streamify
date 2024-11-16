import getImageBase64 from "@/lib/base64";
import titleHandler from "@/lib/titleHandler";
import Image from "next/image";

export default async function GridEpisodesImages({ image, title }) {
  const { img, base64 } = await getImageBase64(image);
  return (
    <Image
      {...img}
      blurDataURL={base64}
      placeholder="blur"
      alt={titleHandler(title)}
      width={500}
      height={500}
      priority
      className="rounded-md h-[180px] object-cover"
    />
  );
}
