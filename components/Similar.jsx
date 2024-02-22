import Link from "next/link";
import Card from "./Card";
import infoUrl from "@/lib/infoUrl";

export default function Similar({ info }) {
  return (
    <div className="text-slate-200 customSm:mx-2 md:mx-6 lg:mt-24 xl:mx-0">
      <div className="font-semibold customSm:text-xl customSm:my-5 lg:text-3xl">
        Similar
      </div>
      <div className="grid customSm:grid-cols-2 customSm:gap-2 customGrid3:grid-cols-3 customGrid3:gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {info.similar.map(similar => (
          <Link href={infoUrl(similar)} key={similar.id}>
            <Card {...similar} />
          </Link>
        ))}
      </div>
    </div>
  );
}
