export default function EmbeddedVideo({ type, params }) {
  return (
    <iframe
      className={`${
        type === "Movie"
          ? "h-screen w-screen"
          : "customSm:h-[40vh] md:h-[60vh] lg:h-[70vh] w-full"
      } rounded-md`}
      src={`https://vidsrc.xyz/embed/${params}`}
    ></iframe>
  );
}
