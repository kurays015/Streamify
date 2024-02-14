import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Chapters({ chapters, provider }) {
  const searchParams = useSearchParams();
  const currentChapter = searchParams.get("chapter");
  console.log(typeof currentChapter);
  return (
    <div className="sticky top-0 overflow-auto max-h-screen scrollbar-gray p-2">
      {chapters.map(chapter => (
        <Link
          href={`?chapter=${chapter.number}&provider=${provider}&readId=${chapter.id}`}
          key={chapter.id}
          className={`${
            chapter.number === parseFloat(currentChapter) ? "text-blue-400" : ""
          } font-medium`}
        >
          <div>{chapter.number}</div>
        </Link>
      ))}
    </div>
  );
}
