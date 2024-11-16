import getImageBase64 from "@/lib/base64";
import tmdbImgHandler from "@/lib/tmdbImg";
import Image from "next/image";

export default async function Cast({ name, character, profile_path, info }) {
  const { base64, img } = await getImageBase64(
    tmdbImgHandler(
      profile_path ||
        info.backdrop_path ||
        "https://image.tmdb.org/t/p/original//ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg"
    )
  );

  return (
    <div className="flex flex-col gap-3 items-center">
      <Image
        className="h-32 w-32 rounded-full object-cover"
        {...img}
        alt={name}
        width={200}
        height={200}
        blurDataURL={base64}
        placeholder="blur"
      />
      <div className="text-center">
        <h1 className="text-md">{name}</h1>
        <p className="italic text-sm text-yellow-500">{character}</p>
      </div>
    </div>
  );
}
