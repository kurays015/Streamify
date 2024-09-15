import SearchResult from "@/components/meta/filter-search/SearchResult";
import { LIGHT_NOVELS } from "@consumet/extensions";

async function getLightNovels(searchParams) {
  try {
    const readlightnovels = new LIGHT_NOVELS.ReadLightNovels();
    const lightNovels = await readlightnovels.search(searchParams?.title);
    if (!lightNovels) {
      throw new Error("Empty Light novel response.");
    }
    return lightNovels?.results;
  } catch (error) {
    console.log(error);
  }
}

export default async function LightNovel({ searchParams }) {
  const lightNovels = await getLightNovels(searchParams);
  return (
    <div className="max-w-7xl mx-auto">
      <SearchResult results={lightNovels} searchParams={searchParams} />
    </div>
  );
}
