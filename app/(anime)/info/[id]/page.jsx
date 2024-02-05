import { fetchInfo } from "@/lib/infoUrl";
import titleHandler from "@/lib/titleHandler";

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
  const infos = await getInfo(params.id);
  return <div className="text-2xl text-white">{titleHandler(infos.title)}</div>;
}
