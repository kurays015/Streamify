import NewsCard from "./NewsCard";

async function fetchNews() {
  try {
    const res = await fetch(
      `${process.env.SOURCE_URL1}/news/ann/recent-feeds`,
      {
        cache: "no-store",
      }
    );

    return res.json();
  } catch (error) {}
}

export default async function News() {
  const newsData = await fetchNews();

  return (
    <div>
      <h5>News for today!</h5>
      <div className="grid customSm:grid-cols-2 customSm:gap-2 customGrid3:grid-cols-3 customGrid3:gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {newsData.map(news => (
          <NewsCard newsInfo={news} key={news.id} />
        ))}
      </div>
    </div>
  );
}
