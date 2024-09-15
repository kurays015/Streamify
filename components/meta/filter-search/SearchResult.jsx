import Link from "next/link";
import infoUrl from "@/lib/infoUrl";
import Card from "@/components/Card";

export default function SearchResult({ results, searchParams }) {
  return (
    <div
      className={
        results.length
          ? "grid customSm:grid-cols-2 customSm:gap-2 customGrid3:grid-cols-3 customGrid3:gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
          : ""
      }
    >
      {results.length ? (
        results.map(result => (
          <Link href={infoUrl(result)} key={result.id}>
            <Card {...result} />
          </Link>
        ))
      ) : (
        <div className="text-slate-300 customSm:text-center h-[50vh]">
          {searchParams?.title && !results.length
            ? "No lightnovel found..."
            : !searchParams?.title
            ? "Search..."
            : ""}
        </div>
      )}
    </div>
  );
}
