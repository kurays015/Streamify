import getImageBase64 from "@/lib/base64";
import tmdbImgHandler from "@/lib/tmdbImg";
import Image from "next/image";

export default async function Cast({ name, character, profile_path, info }) {
  // const { base64, img } = await getImageBase64(
  //   tmdbImgHandler(profile_path || info.backdrop_path)
  // );

  return (
    <div className="flex flex-col gap-3 items-center">
      <Image
        priority
        src={tmdbImgHandler(profile_path || info.backdrop_path)}
        className="h-32 w-32 rounded-full object-cover"
        alt={name}
        width={200}
        height={200}
      />
      <div className="text-center">
        <h1 className="text-md">{name}</h1>
        <p className="italic text-sm text-yellow-500">{character}</p>
      </div>
    </div>
  );
}
