import Card from "@/components/Card";
import infoUrl from "@/lib/infoUrl";
import Link from "next/link";

export default async function NewsCard({ newsInfo }) {
  return (
    <Link href={infoUrl(newsInfo)}>
      <Card {...newsInfo} />
    </Link>
  );
}
