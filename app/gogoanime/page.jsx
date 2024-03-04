import RecentEpisodes from "@/components/ganime/RecentEpisodes";
import TopAiring from "@/components/ganime/TopAiring";

export default function GogoAnime() {
  return (
    <main className="text-white max-w-7xl mx-auto">
      <h1 className="px-2 mt-12 text-orange-300 font-medium customSm:text-lg lg:text-xl">
        Gogoanime
      </h1>
      maintenance...
      <RecentEpisodes />
      <TopAiring />
    </main>
  );
}
