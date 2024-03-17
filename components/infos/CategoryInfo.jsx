import { LIGHT_NOVELS } from "@consumet/extensions";
import MainInfoContent from "./MainInfoContent";
import WatchAndInfoError from "../WatchAndInfoError";

async function getCategoriesInfo(id) {
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

export default async function CategoryInfo({ id }) {
  await new Promise(resolve => setTimeout(resolve, 1000));
  const info = await getCategoriesInfo(id);

  if (!info) return <WatchAndInfoError />;

  return <MainInfoContent infoData={info} id={id} />;
}
