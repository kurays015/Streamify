import watchUrl from "@/lib/watchUrl";
import Image from "next/image";
import Link from "next/link";

export default function GridEpisodes({ infoData }) {
  return (
    <div className="my-12">
      <h1 className="text-white text-3xl font-semibold mb-5">Episodes</h1>
      <div className="grid grid-cols-4 gap-3 max-h-[600px] overflow-auto">
        {infoData.episodes.map(episode => (
          <Link href={watchUrl(episode.id)} key={episode.id}>
            <div className="relative">
              <Image
                src={episode.image}
                alt={episode.title}
                width={500}
                height={500}
                className="rounded-md h-[180px] object-cover"
              />
              <div className="absolute bottom-0 left-0 text-white bg-emerald-600 font-semibold rounded-tr-md rounded-bl-md py-2 px-3">
                {episode.number}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
