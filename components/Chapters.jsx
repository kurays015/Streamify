"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Chapters({ chapters }) {
  const searchParams = useSearchParams();
  const currentChapter = searchParams.get("chapter");
  return (
    <div className="overflow-auto max-h-screen scrollbar-gray p-2">
      {chapters.map(chapter => (
        <Link
          href={`?chapter=${chapter.number}&readId=${chapter.id}`}
          key={chapter.id}
          className={`${
            chapter.number === parseFloat(currentChapter) ? "text-blue-400" : ""
          } font-medium`}
        >
          <div>{chapter.title}</div>
        </Link>
      ))}
    </div>
  );
}
