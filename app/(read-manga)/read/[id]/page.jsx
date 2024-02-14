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

export default async function MangaMainContent({ params, searchParams }) {
  const chapters = await getChapters(params.id);
  const comick = chapters.find(chapter => chapter.providerId === "comick");
  const { chapter } = searchParams;
  const chaptersContent = await getChaptersPages(
    params.id,
    searchParams,
    comick.chapters
  );

  return (
    <div className="text-white">
      <div className="flex">
        <Chapters chapters={comick.chapters} />
        <ChaptersContent
          chaptersContent={chaptersContent}
          chapterNumber={chapter}
        />
      </div>
    </div>
  );
}
