export default function Trailer({ site, id }) {
  return (
    <div className="flex flex-col justify-center customSm:mx-2 md:mx-6 lg:mt-24 xl:mx-0">
      <h1 className="text-slate-200 font-semibold customSm:text-xl customSm:mt-12 customSm:mb-5 lg:my-5 lg:text-3xl">
        Trailer
      </h1>
      <iframe
        className="customSm:w-full customSm:rounded-md customSm:h-[200px] customSemiMd:h-[300px] customSemiMd2:h-[400px] md:h-[500px] lg:h-[700px]"
        src={`https://www.${site}.com/embed/${id}`}
        allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}
