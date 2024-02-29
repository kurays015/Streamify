export default function EmbeddedVideo({ type, params }) {
  return (
    <iframe
      className={`${
        type === "Movie"
          ? "h-screen w-full"
          : "customSm:h-[40vh] md:h-[60vh] lg:h-[70vh] w-full"
      } rounded-md`}
      src={`https://vidsrc.to/embed/${"params"}`}
      allowFullScreen
    ></iframe>
  );
}
