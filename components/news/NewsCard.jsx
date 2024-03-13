import getImageBase64Async from "@/lib/base64";
import Image from "next/image";

export default async function NewsCard({ thumbnail, title }) {
  // await new Promise(resolve => setTimeout(resolve, 5000));
  const blurURL = await getImageBase64Async(thumbnail);
  return (
    <div>
      <Image
        src={thumbnail}
        alt={title}
        width={500}
        height={500}
        placeholder="blur"
        blurDataURL={blurURL}
      />
    </div>
  );
}
