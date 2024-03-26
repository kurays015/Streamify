import MainInfoContent from "./MainInfoContent";
import WatchAndInfoError from "../WatchAndInfoError";

async function getNewsInfo(id) {
  try {
    const res = await fetch(
      `${process.env.SOURCE_URL1}/news/ann/info?id=${id}`
    );
    if (!res) {
      throw new Error("Error fetching news info.");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export default async function NewsInfo({ id }) {
  const newsInfo = await getNewsInfo(id);

  if (!newsInfo) return <WatchAndInfoError />;

  return <MainInfoContent infoData={newsInfo} id={id} />;
}
