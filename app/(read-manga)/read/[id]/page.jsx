import ChaptersContent from "@/components/ChaptersContent";

async function getChaptersPages(id, searchParams) {
  const { chapter, readId } = searchParams;
  try {
    const res = await fetch(
      `${process.env.ANIFY_URL}/pages/${id}/${chapter}/comick/${readId}`
    );
    if (!res.ok) {
      throw new Error("Error fetching chapter pages.");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export default async function MangaMainContent({ params, searchParams }) {
  const chaptersContent = await getChaptersPages(params.id, searchParams);
  const { chapter } = searchParams;

  return (
    <div className="text-white">
      <ChaptersContent
        chaptersContent={chaptersContent}
        chapterNumber={chapter}
      />
    </div>
  );
}
