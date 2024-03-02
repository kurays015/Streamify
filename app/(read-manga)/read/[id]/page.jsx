import ChaptersButton from "@/components/ChaptersButton";
import ChaptersContent from "@/components/ChaptersContent";
import NoContent from "@/components/NoContent";
import WatchAndInfoError from "@/components/WatchAndInfoError";

async function getChaptersPages(id, searchParams, reverseChapters) {
  const { chapter, readId } = searchParams;
  const firstChapterReadId = reverseChapters[0].id;
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
  // const providers = await getChapters(params.id);
  // const comickChapters = providers?.find(
  //   provider => provider.providerId === "comick"
  // );
  // const reverseChapters = comickChapters.chapters.sort(
  //   (a, b) => a.number - b.number
  // );
  // const chaptersPages = await getChaptersPages(
  //   params.id,
  //   searchParams,
  //   reverseChapters
  // );

  // if (!chaptersPages) return <WatchAndInfoError />;

  return (
    <div className="text-white">
      <h1>in development...</h1>
      {/* <ChaptersButton reverseChapters={reverseChapters} />
      {chaptersPages ? (
        <ChaptersContent chaptersContent={chaptersPages} />
      ) : (
        <NoContent />
      )}
      <ChaptersButton reverseChapters={reverseChapters} /> */}
    </div>
  );
}
