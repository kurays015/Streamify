"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import { useSearchParams } from "next/navigation";

export default function ChaptersButton({ chapters }) {
  const [currentIndex, setCurrentIndex] = useState(1);
  const searchParams = useSearchParams();
  const reverseChapters = chapters.sort((a, b) => a.number - b.number);
  const chapterNumber = searchParams.get("chapter");
  const searchedParams = `?chapter=${reverseChapters[currentIndex].number}&readId=${reverseChapters[currentIndex].id}`;

  return (
    <div className="text-white flex items-center justify-between customSm:mt-24 customSm:mb-8 px-5">
      <Link href={searchedParams}>
        <Button
          variant="secondary"
          onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
        >
          Prev
        </Button>
      </Link>
      <span className="text-emerald-300 font-semibold">
        Chapter {chapterNumber ? chapterNumber : 1}
      </span>
      <Link
        onClick={() =>
          setCurrentIndex(prev =>
            Math.min(prev + 1, reverseChapters.length - 1)
          )
        }
        className="disabled:bg-red-700"
        disabled={currentIndex === reverseChapters.length - 1}
        href={searchedParams}
      >
        <Button
          variant="secondary"
          className="disabled:bg-red-700"
          disabled={currentIndex === reverseChapters.length - 1}
        >
          Next
        </Button>
      </Link>
    </div>
  );
}

// ?chapter=191&readId=6Y05zoc9
// {chapters.map(chapter => (
//   <Link
//     href={`?chapter=${chapter.number}&readId=${chapter.id}`}
//     key={chapter.id}
//   >
//     <div
//       className={`bg-slate-800 my-1 font-bold hover:bg-slate-200 hover:text-black transition-all ${
//         chapter.number === parseFloat(currentChapter)
//           ? "text-amber-300"
//           : ""
//       }`}
//     >
//       Chapter {chapter.number}
//     </div>
//   </Link>
// ))}
