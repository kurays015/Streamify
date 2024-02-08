import Header from "@/components/Header";
import RecentEpisodes from "@/components/ganime/RecentEpisodes";
// import TopAiring from "@/components/ganime/TopAiring";
import Popular from "@/components/anilist/Popular";
import Trending from "@/components/anilist/Trending";
import TrendingMovies from "@/components/tmdb/TrendingMovies";
import RecentMovies from "@/components/tmdb/RecentMovies";
import RecentTvShows from "@/components/tmdb/RecentTvShows";
import TrendingTvShows from "@/components/tmdb/TrendingTvShows";
import Footer from "@/components/Footer";
import RecentManga from "@/components/anify(manga)/RecentManga";
import { TrendingMoviesCarousel } from "@/components/tmdb/TrendingMoviesCarousel";

export default async function Home() {
  return (
    <main className="relative">
      <Header />
      <TrendingMoviesCarousel />
      <TrendingMovies />
      <RecentMovies />
      <RecentTvShows />
      <TrendingTvShows />
      <RecentEpisodes />
      <Trending />
      {/* <TopAiring /> */}
      <Popular />
      <RecentManga />
      <Footer />
    </main>
  );
}
