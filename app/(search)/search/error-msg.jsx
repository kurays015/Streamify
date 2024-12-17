export default function ErrorMessage({ message }) {
  return <>{message && <p className="text-red-400 text-sm">{message}</p>}</>;
}
