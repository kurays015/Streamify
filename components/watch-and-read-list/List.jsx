import infoUrl from "@/lib/infoUrl";
import Card from "../Card";
import Link from "next/link";

export default function List({ lists }) {
  return (
    <>
      {lists.map(list => (
        <Link href={infoUrl(list)} key={list.id}>
          <Card {...list} />
        </Link>
      ))}
    </>
  );
}
