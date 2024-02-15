import Chapters from "@/components/Chapters";
import ChaptersContent from "@/components/ChaptersContent";

async function getChaptersPages(id, searchParams, comick) {
  const { chapter, readId } = searchParams;
  const firstChapterReadId = comick[comick.length - 1].id;
  try {
    const res = await fetch(
      `${process.env.ANIFY_URL}/pages/${id}/${chapter ? chapter : 1}/comick/${
        readId ? readId : firstChapterReadId
      }`
    );
    if (!res.ok) {
      throw new Error("Error fetching chapter pages.");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

async function getChapters(id) {
  try {
    const res = await fetch(`${process.env.ANIFY_URL}/chapters/${id}`);
    if (!res.ok) {
      throw new Error("Error fetching chapters.");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export default async function MangaMainContent({ params }) {
  const chapters = await getChapters(params.id);

  return (
    <div className="text-white">
      <h1>Test</h1>
    </div>
  );
}
