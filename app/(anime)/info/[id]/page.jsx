import MainInfoContent from "@/components/infos/MainInfoContent";
import { fetchInfo } from "@/lib/infoUrl";

async function getInfo(id) {
  try {
    const res = await fetch(`${fetchInfo(id)}/info/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("ERROR FETCHING THIS SHIT!");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export default async function page({ params }) {
  const animeInfo = await getInfo(params.id);
  return <MainInfoContent infoData={animeInfo} />;
}
