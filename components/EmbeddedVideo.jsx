export default function EmbeddedVideo({ queryParams }) {
  return (
    <iframe
      className="h-screen w-full"
      src={`https://embed.su/embed/${queryParams}`}
      allowFullScreen
    ></iframe>
  );
}
//https://embed.su/embed/movie/{id}
//https://embed.su/embed/tv/{season}/{episode}
