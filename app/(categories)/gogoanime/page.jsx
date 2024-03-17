import GogoAnimeRecentEpisodes from "@/components/ganime/GogoAnimeRecentEpisodes";
import GogoAnimeTopAiring from "@/components/ganime/GogoAnimeTopAiring";

// export const dynamic = "force-dynamic";

export default function GogoAnime() {
  return (
    <main className="text-white max-w-7xl mx-auto">
      <h1 className="px-2 mt-12 text-orange-300 font-medium customSm:text-lg lg:text-xl">
        Gogoanime
      </h1>
      <h2>in development...</h2>
      <GogoAnimeRecentEpisodes />
      <GogoAnimeTopAiring />
    </main>
  );
}
