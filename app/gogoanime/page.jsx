import RecentEpisodes from "@/components/gogoanime/RecentEpisodes";
import TopAiring from "@/components/gogoanime/TopAiring";

export default function GogoAnime() {
  return (
    <main className="text-white max-w-7xl mx-auto">
      <h1 className="px-2 mt-12 text-orange-300 font-medium customSm:text-lg lg:text-xl">
        Gogoanime
      </h1>
      <RecentEpisodes />
      <TopAiring />
    </main>
  );
}
