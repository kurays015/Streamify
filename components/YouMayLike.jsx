import Link from "next/link";
import Card from "./Card";
import infoUrl from "@/lib/infoUrl";

export default function YouMayLike({ info }) {
  return (
    <div className="text-white ">
      <div className="mt-24 mb-5 font-semibold text-3xl">You may like</div>
      <div className="grid grid-cols-6 gap-5">
        {info.recommendations.map(recommendation => (
          <Link href={infoUrl(recommendation)} key={recommendation.id}>
            <div>
              <Card {...recommendation} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
