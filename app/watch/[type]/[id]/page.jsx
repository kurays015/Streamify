export default function page({ params }) {
  return (
    <div className="text-white text-5xl">
      {params.id} - {params.type}
    </div>
  );
}
