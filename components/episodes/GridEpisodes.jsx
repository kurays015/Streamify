import watchUrl from "@/lib/watchUrl";
import Image from "next/image";
import Link from "next/link";

export default function GridEpisodes({ info }) {
  return (
    <div>
      <h1 className="text-slate-200 font-semibold customSm:text-xl customSm:mt-12 customSm:mb-5 lg:my-5 lg:text-3xl">
        Episodes
      </h1>
      <div
        className={`grid  ${
          info.episodes.length > 100
            ? "customSm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10"
            : "grid-cols-4"
        } customSm:gap-2 lg:gap-3 max-h-[600px] overflow-auto scrollbar-gray`}
      >
        {info.episodes.map(({ id, image, title, number }) => (
          <Link href={watchUrl(id)} key={id}>
            <div className="relative customSm:hidden lg:block">
              <Image
                src={image}
                alt={title}
                width={500}
                height={500}
                className="rounded-md h-[180px] object-cover"
              />
              <div className="absolute bottom-0 left-0 text-white bg-emerald-600 font-semibold rounded-tr-md rounded-bl-md py-2 px-3">
                {number}
              </div>
            </div>
            <div className="text-slate-400 text-center p-1 font-medium border border-slate-700 rounded-md hover:bg-slate-300 hover:text-slate-900 transition-all customSm:text-sm lg:hidden">
              {number}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
