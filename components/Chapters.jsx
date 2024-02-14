"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Chapters({ chapters }) {
  const searchParams = useSearchParams();
  const currentChapter = searchParams.get("chapter");
  return (
    <aside className="sticky top-0 overflow-auto max-h-screen scrollbar-gray p-2 w-[200px] text-center">
      {chapters.map(chapter => (
        <Link
          href={`?chapter=${chapter.number}&readId=${chapter.id}`}
          key={chapter.id}
        >
          <div
            className={`bg-slate-800 my-1 font-bold hover:bg-slate-200 hover:text-black transition-all ${
              chapter.number === parseFloat(currentChapter)
                ? "bg-amber-300 text-slate-900"
                : ""
            }`}
          >
            {chapter.title}
          </div>
        </Link>
      ))}
    </aside>
  );
}
