import MainInfoContent from "./MainInfoContent";
import WatchAndInfoError from "../WatchAndInfoError";

async function getNewsInfo(id) {
  // https://consumet-christ.vercel.app/news/ann/info?id=2024-03-29/yen-press-licenses-6-manga-4-light-novel-series-for-september-2024/.209338
  try {
    const res = await fetch(
      `${process.env.SOURCE_URL1}/news/ann/info?id=${id}`,
      { cache: "no-store" }
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

  // console.log(newsInfo);

  return <MainInfoContent infoData={newsInfo} id={id} />;
}
