import { LIGHT_NOVELS } from "@consumet/extensions";
import WatchAndInfoError from "./WatchAndInfoError";

async function fetchChaptersContent(id) {
  try {
    const readLightNovels = new LIGHT_NOVELS.ReadLightNovels();
    const chaptersContent = await readLightNovels.fetchChapterContent(id);
    return chaptersContent;
  } catch (error) {
    console.log(error);
  }
}

export default async function LightNovelChapterContent({ chapterId }) {
  const chaptersContent = await fetchChaptersContent(chapterId);

  if (!chaptersContent) return <WatchAndInfoError />;

  const paragraphs = chaptersContent?.text
    .split("\n")
    .map((paragraph, index) => (
      <p key={index} className="mt-10">
        {paragraph}
      </p>
    ));

  return (
    <div>
      <h1 className="text-amber-300 text-xl font-semibold">
        Novel title:{chaptersContent.novelTitle}
      </h1>
      <h3 className="text-green-300 text-lg font-semibold">
        {chaptersContent.chapterTitle}
      </h3>
      {paragraphs}
    </div>
  );
}
