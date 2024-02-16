export default function Trailer({ site, id }) {
  return (
    <div className="flex flex-col justify-center mt-24 mb-12">
      <h1 className="text-slate-200 font-semibold text-3xl mb-5">Trailer</h1>
      <iframe
        width="100%"
        height="700"
        src={`https://www.${site}.com/embed/${id}`}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
}
