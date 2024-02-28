export default function Embedded({ params }) {
  return (
    <main>
      <iframe
        className="h-screen w-screen"
        src={`https://vidsrc.xyz/embed/movie/${params.id}`}
      ></iframe>
    </main>
  );
}
