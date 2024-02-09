export default function page({ params }) {
  return <pre className="text-white">{JSON.stringify(params, null, 2)}</pre>;
}
