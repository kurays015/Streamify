import watchType from "@/lib/watchType";
import Cast from "./Cast";
async function getCasts(info) {
  try {
    const res = await fetch(
      `${process.env.TMDB_BASE_URL}/3/${watchType(info)}/${
        info.id
      }/credits?api_key=${process.env.API_KEY}`
    );

    if (!res.ok) throw new Error("Error fetching casts.");

    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export default async function Casts({ info }) {
  if (info.type === "TV") return;

  const casts = await getCasts(info);

  if (!casts.cast.length) return <h1>No casts found</h1>;

  return (
    <div className="text-white customSm:mx-2 md:mx-6 xl:mx-0">
      <h1 className="text-slate-200 font-semibold customSm:text-xl customSm:mt-12 customSm:mb-5 lg:my-5 lg:text-3xl">
        Casts
      </h1>
      <div className="grid customSm:grid-cols-2 customSemiMd:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mt-12 overflow-auto max-h-[900px] scrollbar-gray ">
        {casts.cast.map(cast => (
          <Cast key={cast.id} {...cast} info={info} />
        ))}
      </div>
    </div>
  );
}
