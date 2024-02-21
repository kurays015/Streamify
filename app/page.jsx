import Header from "@/components/Header";
import UpcomingMovies from "@/components/tmdb/UpcomingMovies";
import Footer from "@/components/Footer";
import TrendingMoviesCarousel from "@/components/tmdb/TrendingMoviesCarousel";
import RecentEpisodes from "@/components/anilist(anime)/RecentEpisodes";
import Trending from "@/components/anilist(anime)/Trending";
import Popular from "@/components/anilist(anime)/Popular";
import PopularMovies from "@/components/tmdb/PopularMovies";
import TopRatedMovies from "@/components/tmdb/TopRatedMovies";
import PopularTVSeries from "@/components/tmdb/PopularTVSeries";
import TopRatedTVSeries from "@/components/tmdb/TopRatedTVSeries";

export default async function Home() {
  return (
    <main className="relative">
      <Header />
      <TrendingMoviesCarousel />
      <PopularMovies />
      <UpcomingMovies />
      <TopRatedMovies />
      <PopularTVSeries />
      <TopRatedTVSeries />
      <RecentEpisodes />
      <Trending />
      <Popular />
      <Footer />
    </main>
  );
}
