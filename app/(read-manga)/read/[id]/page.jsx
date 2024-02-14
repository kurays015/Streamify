import ChaptersContent from "@/components/ChaptersContent";
import { Suspense } from "react";

async function getChaptersPages(id, searchParams) {
  const { chapter, provider, readId } = searchParams;
  try {
    const res = await fetch(
      `${process.env.ANIFY_URL}/pages/${id}/${chapter}/${provider}/${readId}`
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
  // console.log(chaptersContent);
  return (
    <div className="text-white">
      <ChaptersContent chaptersContent={chaptersContent} chapter={chapter} />
    </div>
  );
}
