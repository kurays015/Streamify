import Link from "next/link";
import Card from "../../Card";
import infoUrl from "@/lib/infoUrl";

export default function SearchResult({ results }) {
  return (
    <div className="grid customSm:grid-cols-2 customSm:gap-2 customGrid3:grid-cols-3 customGrid3:gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {results.map(result => (
        <Link href={infoUrl(result)} key={result.id}>
          <Card {...result} />
        </Link>
      ))}
    </div>
  );
}
