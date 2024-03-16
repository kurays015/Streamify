import { customBase64 } from "@/lib/base64";
import Image from "next/image";

export default async function NewsCard({ thumbnail, title }) {
  const blurURL = await customBase64(thumbnail);
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
