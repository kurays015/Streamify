import Link from "next/link";
import ClickHereBtn from "./ClickHereBtn";

export default function WithAdsMessage({ info, id }) {
  return (
    <div>
      <p className="text-slate-300 customSm:text-center customSm:text-xs md:text-start lg:text-base">
        If no-ads stream link doesn&apos;t work, you can still watch{" "}
        <Link href={`/embedded?type=${info.type}`} className="text-blue-400">
          <ClickHereBtn info={info} id={id} />
        </Link>{" "}
        but with ads
        <span className="text-base">😂✌️</span>
        (if you really don&apos;t want to watch with ads, install brave
        browser!)
      </p>
    </div>
  );
}
