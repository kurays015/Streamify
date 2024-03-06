import EmbeddedVideo from "@/components/EmbeddedVideo";

export default function EmbeddedVideoPage({ params, searchParams }) {
  const { type, title } = searchParams;

  const queryParams =
    type === "Movie" ? `movie/${params.id}` : `tv/${params.id}`;

  return (
    <main className="relative max-w-7xl mx-auto lg:mt-12">
      {searchParams.toString() && (
        <EmbeddedVideo type={type} queryParams={queryParams} />
      )}
      <h1
        className={`text-slate-300 font-semibold text-center mt-5 customSm:p-2 customSm:text-base md:text-lg lg:text-3xl lg:p-0`}
      >
        {title}
      </h1>
      <span
        className="text-slate-400 font-medium text-xs text-center w-full 
          flex justify-center my-2"
      >
        Hate ads? Download brave browser!
      </span>
    </main>
  );
}
