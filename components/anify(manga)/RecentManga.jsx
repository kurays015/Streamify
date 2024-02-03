import { CardCarousel } from "../CardCarousel";

async function getManga() {
  try {
    const res =
      await fetch(`${process.env.ANIFY_URL}/recent?type=manga&page=1&perPage=20&fields=[id, title, coverImage, bannerImage, description, year, type, genres, chapters, averageRating, averagePopularity, status]
    `);
    if (!res.ok) {
      throw new Error("Error fetching manga.");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export default async function RecentManga() {
  const manga = await getManga();
  return (
    <div className="max-w-7xl mx-auto mt-16 mb-5">
      <h1 className="text-3xl text-red-300 text-start mb-5 font-semibold">
        Recent Manga
      </h1>
      <CardCarousel data={manga} />
    </div>
  );
}
