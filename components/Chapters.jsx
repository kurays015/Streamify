"use client";

export default function Chapters() {
  return <div className="text-center text-white">Chapter!!!!!!!! pota</div>;
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
