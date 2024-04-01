import MainInfoContent from "./MainInfoContent";
import WatchAndInfoError from "../WatchAndInfoError";

async function getNewsInfo(id) {
  // https://consumet-christ.vercel.app/news/ann/info?id=2024-03-29/yen-press-licenses-6-manga-4-light-novel-series-for-september-2024/.209338
  try {
    const res = await fetch(
      `${process.env.SOURCE_URL3}/news/ann/info?id=2024-03-31/shangri-la-frontier-anime-gets-2nd-season-in-october/.209414`
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

  if (!newsInfo || newsInfo.message) return <WatchAndInfoError />;

  // console.log(newsInfo);

  return <MainInfoContent infoData={newsInfo} id={id} />;
}
