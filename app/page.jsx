import Header from "@/components/Header";
import RecentEpisodes from "@/components/anilist(anime)/RecentEpisodes";
import Popular from "@/components/anilist(anime)/Popular";
import Trending from "@/components/anilist(anime)/Trending";
import TrendingMovies from "@/components/tmdb/TrendingMovies";
import RecentMovies from "@/components/tmdb/RecentMovies";
import RecentTvShows from "@/components/tmdb/RecentTvShows";
import TrendingTvShows from "@/components/tmdb/TrendingTvShows";
import Footer from "@/components/Footer";
// import RecentManga from "@/components/anify(manga)/RecentManga";
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
      <Popular />
      {/* <RecentManga /> */}
      <Footer />
    </main>
  );
}
