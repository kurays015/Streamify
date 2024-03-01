import EmbeddedVideo from "@/components/EmbeddedVideo";

export default function EmbeddedVideoPage({ params, searchParams }) {
  const { type } = searchParams;

  const queryParams =
    type === "Movie" ? `movie/${params.id}` : `tv/${params.id}`;

  console.log(type);

  return (
    <main
      className={`relative ${
        type === "TV Series" ? "max-w-7xl mx-auto lg:mt-12 h-screen" : ""
      }`}
    >
      {searchParams.toString() && (
        <EmbeddedVideo type={type} queryParams={queryParams} />
      )}
      {/* {type === "TV Series" && (
        <h1 className="text-slate-300 font-semibold text-center mt-5 customSm:p-2 customSm:text-base md:text-lg lg:text-xl lg:p-0">
          {title}
        </h1>
      )} */}
      <span className="text-slate-400 font-medium text-xs text-center w-full">
        You want no ads? Download brave browser!
      </span>
    </main>
  );
}
