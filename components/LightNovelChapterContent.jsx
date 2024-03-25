import { LIGHT_NOVELS } from "@consumet/extensions";
import WatchAndInfoError from "./WatchAndInfoError";
import { Baskervville } from "next/font/google";

const baskervville = Baskervville({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});

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
      <p
        key={index}
        className={`mt-10 customSm:text-lg text-gray-300 ${baskervville.className}`}
      >
        {paragraph}
      </p>
    ));

  return (
    <div>
      <h1 className="font-semibold customSm:my-3 customSm:text-lg text-amber-300">
        {chaptersContent.novelTitle}
      </h1>
      <h3 className="font-semibold customSm:my-3 text-green-300">
        {chaptersContent.chapterTitle}
      </h3>
      {paragraphs}
    </div>
  );
}
