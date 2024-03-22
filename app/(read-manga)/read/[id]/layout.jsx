import EpisodesAndChapters from "@/components/infos/episodes-and-chapters/EpisodesAndChapters";
import { LIGHT_NOVELS } from "@consumet/extensions";

async function fetchReadPageInfo(id) {
  try {
    const readlightnovels = new LIGHT_NOVELS.ReadLightNovels();
    const info = await readlightnovels.fetchLightNovelInfo(id);
    if (!info) {
      throw new Error("Error fetching categories info.");
    }
    return info;
  } catch (error) {
    console.log(error);
  }
}

export default async function ReadLayout({ children, params }) {
  const info = await fetchReadPageInfo(params.id);

  return (
    <main className="text-white">
      <div className="max-w-7xl mx-auto mt-12">
        <EpisodesAndChapters info={info} id={params.id} />
        {children}
        <EpisodesAndChapters info={info} id={params.id} />
      </div>
    </main>
  );
}
