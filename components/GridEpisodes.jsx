import Image from "next/image";

export default function GridEpisodes({ infoData, type }) {
  return (
    <div className="my-12">
      <h1 className="text-white text-3xl font-semibold mb-5">Episodes</h1>
      <div className="grid grid-cols-4 gap-3 max-h-[600px] overflow-auto">
        {infoData.episodes.map(episode => (
          <div key={episode.id} className="relative">
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
        ))}
      </div>
    </div>
  );
}
