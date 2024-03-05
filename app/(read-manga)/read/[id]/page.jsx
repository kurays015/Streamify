import { MANGA } from "@consumet/extensions";

// async function getChaptersPages(id, searchParams, reverseChapters) {
//   const { chapter, readId } = searchParams;
//   const firstChapterReadId = reverseChapters[0].id;
//   try {
//     const res = await fetch(
//       `${process.env.ANIFY_URL}/pages/${id}/${chapter ? chapter : 1}/comick/${
//         readId ? readId : firstChapterReadId
//       }`
//     );
//     if (!res.ok) {
//       throw new Error("Error fetching chapter pages.");
//     }
//     return res.json();
//   } catch (error) {
//     console.log(error);
//   }
// }

// async function getChapters(id) {
//   try {
//     const res = await fetch(`${process.env.ANIFY_URL}/chapters/${id}`);
//     if (!res.ok) {
//       throw new Error("Error fetching chapters.");
//     }
//     return res.json();
//   } catch (error) {
//     console.log(error);
//   }
// }

export default async function MangaMainContent() {
  return (
    <div className="text-white">
      <h1>in development...</h1>
    </div>
  );
}
