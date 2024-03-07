import Image from "next/image";

async function getRecentNewsFeed() {
  try {
    const res = await fetch(`${process.env.SOURCE_URL1}/news/ann/recent-feeds`);
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export default async function News() {
  const newsFeed = await getRecentNewsFeed();
  return (
    <main className="max-w-7xl mx-auto text-white">
      <h1>in development...</h1>
      <div className="grid grid-cols-5">
        {newsFeed.map(feed => (
          <div key={feed.id}>
            <h1>{feed.title}</h1>
            <Image
              src={feed.thumbnail}
              width={500}
              height={800}
              alt={feed.title}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
