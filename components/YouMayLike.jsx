import Link from "next/link";
import Card from "./Card";
import infoUrl from "@/lib/infoUrl";

export default function YouMayLike({ info }) {
  return (
    <div className="text-slate-200 customSm:mx-2 md:mx-6 lg:mt-24 xl:mx-0">
      <div className="font-semibold customSm:text-xl customSm:my-5 lg:text-3xl">
        You may like
      </div>
      <div className="grid customSm:grid-cols-2 customSm:gap-2 customGrid3:grid-cols-3 customGrid3:gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {info.recommendations.map(recommendation => (
          <Link href={infoUrl(recommendation)} key={recommendation.id}>
            <Card {...recommendation} />
          </Link>
        ))}
      </div>
    </div>
  );
}
