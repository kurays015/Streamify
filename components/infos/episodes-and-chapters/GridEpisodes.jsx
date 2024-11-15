import Image from "next/image";
import Link from "next/link";
import EpisodeNumber from "./EpisodeNumber";

export default function GridEpisodes({ info }) {
  return (
    <div>
      <h1 className="text-slate-200 font-semibold customSm:text-xl customSm:mt-12 customSm:mb-5 lg:my-5 lg:text-3xl">
        Episodes
      </h1>
      <div className="grid grid-cols-5 customSm:gap-2 lg:gap-3 max-h-[600px] overflow-auto scrollbar-gray">
        {info.episodes.map(({ id, image, title, number }) => (
          <Link href={`/watch/${info.id}/${id}`} key={id}>
            <div className="relative customSm:hidden lg:block">
              <Image
                src={image ? image : info.image}
                alt={title ? title : id}
                width={500}
                height={500}
                priority
                className="rounded-md h-[180px] object-cover"
              />
              <div className="absolute bottom-0 left-0 text-white bg-emerald-600 font-semibold rounded-tr-md rounded-bl-md py-2 px-3">
                {number}
              </div>
            </div>
            <div className="lg:hidden">
              <EpisodeNumber number={number} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
