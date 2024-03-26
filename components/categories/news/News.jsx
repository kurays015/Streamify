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
      <div className="grid customSm:grid-cols-3 md:grid-cold-4 lg:grid-cols-5 gap-2">
        {newsData.map(news => (
          <NewsCard {...news} key={news.id} />
        ))}
      </div>
    </div>
  );
}
